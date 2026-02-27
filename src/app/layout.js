import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import { AuthProvider } from "@/context/AuthContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ShopZone - Premium E-Commerce Store",
  description: "Discover premium products with unbeatable prices. Fast shipping & easy returns on every order. Shop now at ShopZone!",
  keywords: ["ecommerce", "online shopping", "premium products", "fashion", "accessories"],
  openGraph: {
    title: "ShopZone - Premium E-Commerce Store",
    description: "Discover premium products with unbeatable prices. Fast shipping & easy returns.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>
          <Navbar />
          <main className="pt-16 md:pt-20">{children}</main>
        </AuthProvider>
      </body>
    </html>
  );
}
