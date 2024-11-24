import type { Metadata } from "next";
import "@/app/globals.css";
import { Bodoni_Moda } from "next/font/google";

const bodoniModa = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-bodoni-moda",
});

export const metadata: Metadata = {
  title: "Joshua Kwak | Engineer: Software & Mechanical",
  description: "Portfolio of Joshua Kwak, Software and Mechanical Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={bodoniModa.variable}>
      <body className="font-serif">
        {children}
      </body>
    </html>
  );
}
