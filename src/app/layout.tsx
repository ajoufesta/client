import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/app/_commons/Footer";

export const metadata: Metadata = {
  title: "Ajou Festa",
  description: "아주대학교 축제 도우미",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex items-center justify-center">
        <div className="h-screen w-screen min-h-[80rem] max-w-screen-sm  bg-blue-800 bg-skyBlue-gradient relative flex flex-col pt-[8.8rem] items-center">
          <main className=" flex flex-col justify-center items-center">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
