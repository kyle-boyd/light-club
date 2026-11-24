import type { Metadata, Viewport } from "next";
import { Anton, Archivo, Big_Shoulders_Stencil, Courier_Prime, Special_Elite } from "next/font/google";
import "./globals.css";
import { brand } from "@/content/site";
import { RoughFilter } from "@/components/Diagrams";

const display = Anton({ weight: "400", subsets: ["latin"], variable: "--font-anton" });
const body = Archivo({ subsets: ["latin"], variable: "--font-archivo" });
const type = Courier_Prime({ weight: ["400", "700"], subsets: ["latin"], variable: "--font-courier" });
const stencil = Big_Shoulders_Stencil({ weight: ["800", "900"], subsets: ["latin"], variable: "--font-stencil-face", adjustFontFallback: false });
const beatup = Special_Elite({ weight: "400", subsets: ["latin"], variable: "--font-elite-face" });

export const metadata: Metadata = {
  title: brand.name,
  description: brand.tagline,
};

export const viewport: Viewport = {
  themeColor: "#111111",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${type.variable} ${stencil.variable} ${beatup.variable}`}>
      <body>
        <RoughFilter />
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
