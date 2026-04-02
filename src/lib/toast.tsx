"use client";

import { toast } from "sonner";
import { ToastMessage } from "@/components/ui/toastMessage";

const DEFAULT_DURATION = 4500;

export function showSuccessToast(title: string, description?: string) {
  toast.custom(
    () => (
      <ToastMessage
        type="success"
        title={title}
        description={description}
        duration={DEFAULT_DURATION}
      />
    ),
    {
      duration: DEFAULT_DURATION,
    }
  );
}

export function showErrorToast(title: string, description?: string) {
  toast.custom(
    () => (
      <ToastMessage
        type="error"
        title={title}
        description={description}
        duration={DEFAULT_DURATION}
      />
    ),
    {
      duration: DEFAULT_DURATION,
    }
  );
}