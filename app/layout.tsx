import type { Metadata } from "next";
import {Nunito} from "next/font/google";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const nunito= Nunito({subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-nunito",
});
export const metadata: Metadata = {
  title: "Exploreo",
  description: "Explore the world with Exploreo",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`bg-primary text-tertiary overflow-x-hidden ${nunito.variable}`}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}