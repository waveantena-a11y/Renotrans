import type { Metadata } from "next";
import { Raleway, Work_Sans } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "RENOTRANS SRL — Rénovation & Transformation Haut de Gamme à Bruxelles",
  description:
    "RENOTRANS SRL, entreprise générale de rénovation et transformation à Bruxelles. Gros œuvre, plafonnage, carrelage, parquet, peinture, châssis. Devis gratuit.",
  keywords: [
    "rénovation Bruxelles",
    "entreprise générale de rénovation",
    "transformation bâtiment",
    "gros oeuvre",
    "RENOTRANS",
  ],
  openGraph: {
    title: "RENOTRANS SRL — Rénovation & Transformation Haut de Gamme",
    description:
      "Entreprise générale de rénovation et transformation à Bruxelles. Devis gratuit.",
    locale: "fr_BE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${raleway.variable} ${workSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
