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
  openGraph: {
    title: "Joshua Kwak | Engineer: Software & Mechanical",
    description: "Portfolio of Joshua Kwak, showcasing software and mechanical projects.",
    images: [
      {
        url: "/images/projects/portfolio.png",
        width: 1500,
        height: 800,
        alt: "Joshua Kwak Portfolio",
      },
    ],
    type: "website",
    url: "https://www.joshkwak.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={bodoniModa.variable}>
      <head>
        <link rel="icon" href="/images/favicon/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon/favicon-16x16.png" />
        <link rel="apple-touch-icon" href="/images/favicon/apple-touch-icon.png" />
        <meta property="og:title" content="Joshua Kwak | Engineer: Software & Mechanical" />
        <meta
          property="og:description"
          content="Portfolio of Joshua Kwak, showcasing software and mechanical projects."
        />
        <meta property="og:image" content="/images/og-image.jpg" />
        <meta property="og:url" content="https://your-portfolio-domain.com" />
        <meta property="og:type" content="website" />
        <title>Joshua Kwak | Engineer: Software & Mechanical</title>
        <meta
          name="description"
          content="Portfolio of Joshua Kwak, Software and Mechanical Engineer"
        />
      </head>
      <body className="font-serif">{children}</body>
    </html>
  );
}
