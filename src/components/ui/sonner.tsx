"use client";

import { Toaster } from "sonner";

export default function AppToaster() {
  return (
    <Toaster
      position="bottom-right"
      expand
      richColors
      closeButton
      duration={4500}
      toastOptions={{
        unstyled: true,
        classNames: {
          toast:
            "group pointer-events-auto relative overflow-hidden rounded-2xl border border-white/10 bg-card/85 backdrop-blur-xl shadow-2xl p-0 text-foreground w-[360px]",
          content: "p-0",
          title: "text-sm font-semibold text-foreground",
          description: "text-sm text-muted-foreground",
          closeButton:
            "absolute right-3 top-3 !border-white/10 !bg-black/20 !text-white hover:!bg-black/35",
          success:
            "border-emerald-500/25 bg-emerald-500/10",
          error:
            "border-red-500/25 bg-red-500/10",
        },
      }}
    />
  );
}