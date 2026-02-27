import type { Metadata } from "next";
import { Cinzel, Cormorant_Garamond, Noto_Serif_SC } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  variable: "--font-cinzel",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});

const notoSerifSC = Noto_Serif_SC({
  subsets: ["latin"], // Noto_Serif_SC is primarily for Chinese, but we'll include latin subset if available or omit it if not. Actually, next/font/google defaults might require preload: false if subsets aren't matching.
  weight: ["300", "400", "700"],
  variable: "--font-noto",
  preload: false,
});

export const metadata: Metadata = {
  title: "Missão China Trade — China Direta",
  description: "Imersão empresarial na China para quem quer aprender a importar com segurança — antes de investir capital real.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${cinzel.variable} ${cormorant.variable} ${notoSerifSC.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
