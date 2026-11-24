import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PROXINET - Connecting The World",
  description: "PT. Proxi Jaringan Nusantara (PROXINET)",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="id"><body>{children}</body></html>;
}
