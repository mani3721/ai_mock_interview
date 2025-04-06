import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default:'Propwise',
    template:'%s - Propwise'
  },
  description: "An AI-powered platform for preparing for mock interviews",
  verification: {
    google: 'Fr2Qlgbnonn6z9NxP0yAqyvn2RNmrLRdgzRcAm6aqLs',
  },
  twitter: {
    card: 'summary_large_image'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-FEDVZZXDJB"></script>
          <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-FEDVZZXDJB');

            `}
          </script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}

      <Toaster/>
      </body>
    </html>
  );
}
