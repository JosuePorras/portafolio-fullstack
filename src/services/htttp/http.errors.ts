import { AxiosError } from "axios";

interface FieldError {
  field: string;
  message: string | string[];
}

interface ApiErrorResponse {
  message?: string | string[];
  error?: string | string[];
  statusCode?: number;
  errors?: FieldError[] | Record<string, string[] | string>;
}

export const handleHttpError = (error: AxiosError): string[] => {
  if (error.code === "ECONNABORTED") {
    return ["La solicitud tardó demasiado."];
  }

  const response = error.response;
  const data = response?.data as ApiErrorResponse | undefined;

  if (!response || !data) {
    return ["Error de red. No se pudo conectar con el servidor."];
  }

  const { status } = response;
  const messages: string[] = [];

  if (data.message) {
    if (typeof data.message === "string") {
      messages.push(data.message);
    } else if (Array.isArray(data.message)) {
      messages.push(...data.message);
    }
  }

  if (data.error && messages.length === 0) {
    if (typeof data.error === "string") {
      messages.push(data.error);
    } else if (Array.isArray(data.error)) {
      messages.push(...data.error);
    }
  }

  if (data.errors) {
    if (Array.isArray(data.errors)) {
      data.errors.forEach((err) => {
        if (!err) return;

        if (typeof err.message === "string") {
          messages.push(err.message);
        } else if (Array.isArray(err.message)) {
          messages.push(...err.message);
        }
      });
    } else {
      Object.values(data.errors).forEach((val) => {
        if (Array.isArray(val)) {
          messages.push(...val);
        } else if (typeof val === "string") {
          messages.push(val);
        }
      });
    }
  }

  if (messages.length === 0) {
    if (status === 400) return ["Solicitud inválida."];
    if (status === 401) return ["No autorizado."];
    if (status === 403) return ["No tienes permisos para realizar esta acción."];
    if (status === 404) return ["Recurso no encontrado."];
    if (status === 500) return ["Error interno del servidor."];
    return [`Error inesperado (${status})`];
  }

  return [...new Set(messages)];
};