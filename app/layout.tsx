import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Age in Place Insurance | Insurance designed for staying home.",
  description:
    "Insurance designed for one thing: keeping you home. Not in a nursing home. Not in assisted living. Home. A co-op.care insurance product.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
