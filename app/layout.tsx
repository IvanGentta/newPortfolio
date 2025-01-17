import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./navbar/page";

const font = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Iván Gentta",
  description: "Iván Gentta portfolio",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>
      <body className={font.className}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
