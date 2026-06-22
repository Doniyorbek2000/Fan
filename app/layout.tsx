import type { Metadata } from "next";
import "./globals.css";
import { Suspense } from "react";
import BottomNav from "@/components/BottomNav";

export const metadata: Metadata = {
  title: "FanMeet - Celebrity Connect",
  description: "Connect with your favorite celebrities through exclusive experiences",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz" className="dark">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;800&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background text-on-surface min-h-screen">
        {children}
        <Suspense>
          <BottomNav />
        </Suspense>
      </body>
    </html>
  );
}
