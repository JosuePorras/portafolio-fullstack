"use client";

import { CheckCircle2, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

type ToastMessageProps = {
  title: string;
  description?: string;
  type?: "success" | "error";
  duration?: number;
};

export function ToastMessage({
  title,
  description,
  type = "success",
  duration = 4500,
}: ToastMessageProps) {
  return (
    <div className="relative overflow-hidden">
      <div className="flex gap-3 px-4 py-4 pr-12">
        <div
          className={cn(
            "mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl",
            type === "success" && "bg-emerald-500/15 text-emerald-400",
            type === "error" && "bg-red-500/15 text-red-400"
          )}
        >
          {type === "success" ? (
            <CheckCircle2 className="h-5 w-5" />
          ) : (
            <AlertCircle className="h-5 w-5" />
          )}
        </div>

        <div className="min-w-0">
          <p className="text-sm font-semibold text-foreground">{title}</p>
          {description ? (
            <p className="mt-1 text-sm leading-6 text-muted-foreground">
              {description}
            </p>
          ) : null}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 h-[3px] w-full bg-white/8">
        <div
          className={cn(
            "h-full origin-left animate-toast-timer",
            type === "success" && "bg-emerald-400/90",
            type === "error" && "bg-red-400/90"
          )}
          style={{
            animationDuration: `${duration}ms`,
          }}
        />
      </div>
    </div>
  );
}