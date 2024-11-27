import localFont from "next/font/local";
import Header from "./header";
import Cv from "./cv";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="./main.css" rel="stylesheet"></link>
        <title>강대현 Kang Daehyun</title>
      </head>
      <body>
        <main className="flex min-h-screen flex-col items-center px-4">
        <Header />
        <Cv />
        </main>
      </body>
    </html>
  );
}