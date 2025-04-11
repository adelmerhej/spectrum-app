import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title: {
    template: "%s - Spectrum HR Module",
    absolute: "Spectrum HR Module",
  },
  description: "SPECTRUM ENGINEERING CONSULTANTS S.A.R.L.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={inter.className}
      >
        {children}
      </body>
    </html>
  );
}
