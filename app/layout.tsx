import type { Metadata } from "next";
import "./globals.css";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { Toaster } from "@/components/ui/toaster";
import RegisterDialog from "@/components/auth/RegisterDialog";
import LoginDialog from "@/components/auth/LoginDialog";
import QueryProvider from "@/context/query-provider";
import { Suspense } from "react";
import FallbackLoader from "@/components/loader/fallbackLoader";

export const metadata: Metadata = {
  title: "Motor Soko",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` bg-[#EBF2F7] antialiased`}>
        <QueryProvider>
          <Suspense fallback={<FallbackLoader />}>
            <NuqsAdapter>
              <RegisterDialog />
              <LoginDialog />
              {children}
            </NuqsAdapter>
            <Toaster />
          </Suspense>
        </QueryProvider>
      </body>
    </html>
  );
}
