import type { Metadata } from "next";
import "./globals.css";
import { training } from "@/data/sessions";

export const metadata: Metadata = {
  title: `${training.brand} — ${training.title}`,
  description: training.tagline,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className="antialiased min-h-screen">{children}</body>
    </html>
  );
}
