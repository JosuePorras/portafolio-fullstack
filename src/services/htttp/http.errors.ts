import { AxiosError } from "axios";

interface FieldError {
  field: string;
  message: string | string[];
}

interface ApiErrorResponse {
  message?: string | string[];
  error?: string | string[];
  statusCode?: number;
  errors?: FieldError[] | Record<string, string[]>;
}

export const handleHttpError = (error: AxiosError): string[] => {
  if (error.code === "ECONNABORTED") {
    return ["Request timeout."];
  }

  if (!error.response) {
    return ["Network error. Server unreachable."];
  }

  const { status, data } = error.response;
  const apiError = data as ApiErrorResponse;
  const messages: string[] = [];

  // message
  if (apiError.message) {
    if (typeof apiError.message === "string") {
      messages.push(apiError.message);
    } else if (Array.isArray(apiError.message)) {
      messages.push(...apiError.message);
    }
  }

  // error fallback
  if (apiError.error && messages.length === 0) {
    if (typeof apiError.error === "string") {
      messages.push(apiError.error);
    } else if (Array.isArray(apiError.error)) {
      messages.push(...apiError.error);
    }
  }

  // errors detallados
  if (apiError.errors) {
    if (Array.isArray(apiError.errors)) {
      apiError.errors.forEach((err) => {
        if (!err) return;

        if (typeof err.message === "string") {
          messages.push(err.message);
        } else if (Array.isArray(err.message)) {
          messages.push(...err.message);
        }
      });
    } else {
      Object.values(apiError.errors).forEach((val) => {
        if (Array.isArray(val)) {
          messages.push(...val);
        } else if (typeof val === "string") {
          messages.push(val);
        }
      });
    }
  }

  if (messages.length === 0) {
    messages.push(`Unexpected error (${status})`);
  }

  return messages;
};