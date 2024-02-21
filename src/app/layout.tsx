import type { Metadata } from "next";
import "./globals.css";
import Footer from "./_commons/footer";

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
      <body>
        <div className="h-screen w-screen max-w-screen-sm max-h-whole_height bg-blue-800 bg-skyBlue-gradient relative ">
          <main className="h-[calc(100%-10.4rem)] flex flex-col justify-center items-center">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
