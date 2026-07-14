import "./globals.css";
import { Inter } from "next/font/google";
import { Layout } from "@/components/Layout";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Kadus 2 Kecemen",
    template: "%s | Kadus 2 Kecemen",
  },
  description:
    "Website informasi dan publikasi Kadus 2, Kecemen, Manisrenggo, Klaten, Jawa Tengah.",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
