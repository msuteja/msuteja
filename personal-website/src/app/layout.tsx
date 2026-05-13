import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Michael Suteja",
  description: "AI + Secure Systems + Developer Tooling",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="noise" />
        <Navbar />
        {children}
      </body>
    </html>
  );
}