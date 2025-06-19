import localFont from "next/font/local";
import Header from "./header";
import Footer from "./footer";
import "./globals.css";

export const metadata = {
  title: "대현데브",
  description: "대현데브",
};

export default function RootLayout({ children }) {
  return (
  
    <html lang="en">
      
      <head>
      <title>대현데브</title>
      <meta property="og:title" content="대현데브"/>
      <meta property="og:description" content="대현데브" />
      <meta property="og:url" content="https://daehyun.dev"/>
      <meta property="og:type" content="website"/>
      </head>

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