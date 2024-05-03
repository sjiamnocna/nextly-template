"use client";

import React, { PropsWithChildren } from "react";

import { Inter as FontSans } from "next/font/google"

import { ThemeProvider } from "next-themes";

import { cn } from "@/lib/utils";

import "../styles/tailwind.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

const MyApp: React.FC = ({ children }: PropsWithChildren) => {
  return (
    <html lang="en">
      <body className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}>
        <ThemeProvider attribute="class">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

export default MyApp;
