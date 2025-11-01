import type { Metadata } from "next";
import { Poppins, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import SmoothScroll from "@/components/SmoothScroll";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Combat Gym - Best MMA & Boxing Training in Kolkata",
  description:
    "Join The Combat Gym for professional MMA, Boxing, Kickboxing & fitness training. Expert coaches, modern facilities, and classes for all levels.",
  keywords:
    "the combat gym, combat gym, MMA training, boxing classes, kickboxing, fitness, Kolkata, West Bengal, martial arts, wushu, self defence, karate",
  authors: [{ name: "The Combat Gym" }],
  icons: {
    icon: "/favicon/favicon.ico",
    shortcut: "/favicon/favicon-16x16.png",
    apple: "/favicon/apple-touch-icon.png",
  },
  openGraph: {
    title: "The Combat Gym - Best MMA & Boxing Training",
    description: "Professional combat sports training for all levels",
    url: "https://thecombatgym.in",
    siteName: "The Combat Gym",
    images: [
      {
        url: "/thecombatgymlogo.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Combat Gym - Best MMA & Boxing Training",
    description: "Professional combat sports training for all levels",
    images: ["/thecombatgymlogo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" href="/herothumbnail.png" as="image" />
        <link
          rel="preload"
          href="/thecombatgymhero_bg.mp4"
          as="video"
          type="video/mp4"
        />
      </head>
      <body
        className={`${poppins.variable} ${montserrat.variable}  antialiased bg-texture`}
      >
        <SmoothScroll />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
