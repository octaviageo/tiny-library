import "./globals.css";
import Navbar from "./components/Navbar";
import { Manrope, Montserrat } from "next/font/google";
import Footer from "./components/Footer";

const manrope = Manrope({ 
  subsets: ["latin"], 
  display: "swap"
 });

const montserrat = Montserrat({ 
  subsets: ["latin"], 
  display: "swap",
  weight: ["400", "700"],
  variable: "--font-montserrat"
 });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.className} ${montserrat.variable} flex min-h-dvh flex-col`} >
        <Navbar/>
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}