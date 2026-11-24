import type { Metadata, Viewport } from "next";
import { Anton, Archivo, Big_Shoulders_Stencil, Courier_Prime, Tinos } from "next/font/google";
import "./globals.css";
import { brand } from "@/content/site";
import { RoughFilter } from "@/components/Diagrams";

const display = Anton({ weight: "400", subsets: ["latin"], variable: "--font-anton" });
const body = Archivo({ subsets: ["latin"], variable: "--font-archivo" });
const type = Courier_Prime({ weight: ["400", "700"], subsets: ["latin"], variable: "--font-courier" });
const stencil = Big_Shoulders_Stencil({ weight: ["800", "900"], subsets: ["latin"], variable: "--font-stencil-face", adjustFontFallback: false });
const serif = Tinos({ weight: ["400", "700"], style: ["normal", "italic"], subsets: ["latin"], variable: "--font-tinos-face" });

export const metadata: Metadata = {
  title: brand.name,
  description: brand.tagline,
};

export const viewport: Viewport = {
  themeColor: "#0e0e0e",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${type.variable} ${stencil.variable} ${serif.variable}`}>
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
