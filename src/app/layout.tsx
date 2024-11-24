import type { Metadata } from "next";
import "@/app/globals.css";

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
    <html lang="en">
      <head>
        {/* Import Bodoni Moda from Google Fonts */}
        <link
        href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:wght@400;700&display=swap"
        rel="stylesheet"
        />
      </head>
      <body className="font-serif">
        {children}
      </body>
    </html>
  );
}
