import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "careho.me | Age-in-Place Insurance — Coming 2027",
  description:
    "Insurance designed for staying home. Coverage for home care, fall prevention, and the services that keep you home — not in a facility. Join the waitlist.",
  metadataBase: new URL("https://careho.me"),
  openGraph: {
    title: "careho.me | Age-in-Place Insurance",
    description:
      "Insurance that pays for the care that keeps you home. Launching 2027. Join the waitlist.",
    siteName: "careho.me",
  },
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
        <Script src="https://solvinghealth.com/footer.js" data-brand="co-op.care" data-theme="light" strategy="lazyOnload" />
      </body>
    </html>
  );
}
