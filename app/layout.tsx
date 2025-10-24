import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Buntega Kollektiv",
  description:
    "A vibrant community festival with interactive experiences and cultural exchange.",
  authors: [
    {
      name: "Buntega Kollektiv",
      url: "https://buntega-kollektiv.com",
    },
  ],
  keywords: [
    "Buntega Kollektiv",
    "community festival",
    "interactive experiences",
    "cultural exchange",
    "art and culture",
    "music and dance",
    "local artists",
    "food and drink",
    "family-friendly",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div className="min-h-screen bg-white">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
