import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ajou-Festa",
  description: "Festival Guide for Ajou University",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
