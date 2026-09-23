import type { Metadata } from "next";
import { Fraunces, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["500", "600", "700"],
  display: "swap",
});

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-plex",
  weight: ["400", "500", "600"],
  display: "swap",
});

const siteUrl = "https://panier-perdu.vercel.app";
const title = "Panier Perdu — Récupérez l'argent de vos paniers abandonnés";
const description =
  "Vos clients remplissent leur panier puis partent sans payer. Panier Perdu les relance automatiquement, sans que vous ayez à y penser. 29€/mois, sans engagement.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "Panier Perdu",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${fraunces.variable} ${plexSans.variable}`}>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
