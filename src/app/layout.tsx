import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import StoreProvider from "./StoreProvider";
import { Suspense } from "react";
import AnmationWrapper from "@/components/Animation/AnmationWrapper";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "E-commerce app",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
          <StoreProvider>
             <Suspense fallback={<div>Loading...</div>}>
                <Navbar/>
                {children}
             </Suspense>
          </StoreProvider>
          <Footer/>
      </body>
    </html>
  );
}
  