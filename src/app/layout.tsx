import type { Metadata } from "next";
import { Playfair_Display, Lora, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "600", "700", "800"],
  style: ["normal", "italic"],
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  weight: ["400", "500"],
  style: ["normal", "italic"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Les Deux Marronniers — Pension Canine & Élevage dans l'Oise",
  description:
    "Pension canine et élevage professionnel à Saint-Maximin dans l'Oise, à 30 min de Roissy CDG, en lisière de la forêt de Chantilly. Cairn Terrier & Berger Belge Malinois.",
  keywords: "pension canine, élevage, Saint-Maximin, Oise, Chantilly, chien, Cairn Terrier, Malinois",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${playfair.variable} ${lora.variable} ${cormorant.variable}`}>
        {children}
      </body>
    </html>
  );
}