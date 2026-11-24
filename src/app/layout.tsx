import type { Metadata, Viewport } from "next";
import { Archivo, Courier_Prime } from "next/font/google";
import "./globals.css";
import { brand } from "@/content/site";

// Two typefaces: Archivo (normal width for headlines, condensed for section
// heads, via its width axis) and Courier Prime for reading.
const sans = Archivo({ subsets: ["latin"], axes: ["wdth"], variable: "--font-sans" });
const mono = Courier_Prime({ weight: ["400", "700"], subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: brand.name,
  description: brand.tagline,
};

export const viewport: Viewport = {
  themeColor: "#eae2d5",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
