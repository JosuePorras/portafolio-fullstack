import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import BackgroundOrbs from "@/components/ui/backgroundOrb";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={cn("dark", "font-sans", geist.variable)}
      suppressHydrationWarning
    >
      <body className="relative isolate min-h-screen overflow-x-hidden bg-background text-foreground antialiased">
        <BackgroundOrbs />

        <div className="relative z-10">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}