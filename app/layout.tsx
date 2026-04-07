import type { Metadata } from "next";
import Script from "next/script";
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
      <body className="min-h-full flex flex-col">
        {children}
        <Script src="https://solvinghealth.com/chat-widget.js" data-channel="ageinplace" data-color="#5B3A29" strategy="lazyOnload" />
        <Script src="https://solvinghealth.com/voice-embed.js" data-site="ageinplace" strategy="lazyOnload" />
      </body>
    </html>
  );
}
