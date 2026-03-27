import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Better Payments Ireland | Card Terminals & POS for Small Businesses",
  description:
    "Better Payments provides free card terminals and POS systems for small and micro businesses across Ireland. Straightforward pricing, fast setup, and real local support. Powered by Shift4. CRO 809024.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="leading-relaxed text-base min-h-screen">{children}</body>
    </html>
  );
}
