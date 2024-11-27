import localFont from "next/font/local";
import Header from "./header";
import Footer from "./footer";
import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "강대현 Kang Daehyun",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <main  className="flex min-h-screen flex-col items-center px-4">
        <Header />
        {children}
        <Footer />
        </main>
      </body>
    </html>
  );
}