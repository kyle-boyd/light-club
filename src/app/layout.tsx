import type { Metadata, Viewport } from "next";
import { Anton, Archivo, Courier_Prime } from "next/font/google";
import "./globals.css";
import { brand } from "@/content/site";

const display = Anton({ weight: "400", subsets: ["latin"], variable: "--font-anton" });
const body = Archivo({ subsets: ["latin"], variable: "--font-archivo" });
const type = Courier_Prime({ weight: ["400", "700"], subsets: ["latin"], variable: "--font-courier" });

export const metadata: Metadata = {
  title: brand.name,
  description: brand.tagline,
};

export const viewport: Viewport = {
  themeColor: "#111111",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${type.variable}`}>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
