import type { Metadata } from "next";
import "./globals.css";
import AuthProvider from "@/providers/AuthProvider";
import { plusJakarta } from "@/public/font";

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
      <body className={plusJakarta.className}>
        <AuthProvider>
          <>{children}</>
        </AuthProvider>
      </body>
    </html>
  );
}
