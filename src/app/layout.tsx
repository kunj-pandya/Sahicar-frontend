import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Header } from "@/components/common/header";
import { Footer } from "@/components/common/footer";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: {
    default: "SahiCar — Buy Verified Used Cars in India",
    template: "%s — SahiCar",
  },
  description:
    "Browse verified used cars across India. Filter by brand, fuel, price and more. Trusted used car marketplace.",
  keywords: [
    "used cars", "second hand cars", "buy used cars india",
    "verified used cars"
  ],
  openGraph: {
    siteName: "SahiCar",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", "font-sans", inter.variable)}
    >
      <body className="min-h-full flex flex-col">
        <TooltipProvider>
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
          <Toaster position="bottom-center" richColors />
        </TooltipProvider>
      </body>
    </html>
  );
}
