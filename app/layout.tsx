import type { Metadata } from "next";
import "./globals.css";
import AuthProvider from "@/providers/AuthProvider";
import { plusJakarta } from "@/public/font";
import ProgressBarProviders from "@/providers/ProgressBarProvider";
import CrispProvider from "@/providers/CrispProvider";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "Ynsect",
  description: "Ynsect, Cultivating a Sustainable Future with Maggot Farming.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/images/logo.png" type="image/x-icon" />
      </head>
      <CrispProvider />
      <body className={plusJakarta.className}>
        <ProgressBarProviders>
          <AuthProvider>
            <>
              <Toaster richColors position="top-right" />
              {children}
            </>
          </AuthProvider>
        </ProgressBarProviders>
      </body>
    </html>
  );
}
