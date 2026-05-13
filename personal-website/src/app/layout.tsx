import type { Metadata } from "next";
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
        {children}
      </body>
    </html>
  );
}