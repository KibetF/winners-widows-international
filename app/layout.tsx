import type { Metadata } from "next";
import { Cormorant_Garamond, Lato } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-cormorant",
  weight: ["400", "500", "600", "700"],
});

const lato = Lato({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lato",
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Winners Widows & Widowers International",
    template: "%s | Winners Widows & Widowers International",
  },
  description:
    "Empowering widows and widowers in rural Kenya through sustainable livelihood programs including livestock, education, healthcare, and income training since 2014.",
  keywords: [
    "nonprofit",
    "charity",
    "Kenya",
    "widows",
    "widowers",
    "empowerment",
    "sustainable development",
    "livestock",
    "education",
    "healthcare",
  ],
  authors: [{ name: "Winners Widows & Widowers International" }],
  openGraph: {
    title: "Winners Widows & Widowers International",
    description:
      "Empowering Lives, Restoring Hope - Supporting 92+ widows and widowers across Kenya through sustainable empowerment programs since 2014.",
    url: "https://winnerswidows.org",
    siteName: "Winners Widows & Widowers International",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Winners Widows & Widowers International",
    description:
      "Empowering Lives, Restoring Hope - Supporting 92+ widows and widowers across Kenya through sustainable empowerment programs since 2014.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${lato.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
