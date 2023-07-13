import "./globals.css";
import { Ubuntu } from "next/font/google";
import NavBar from "./NavBar";
import Footer from "../../Footer";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  variable: "--font-ubuntu",
  weight: "400",
});

export const metadata = {
  title: "Zipcoin - Buy Bitcoin and Cryptocurrencies",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="theme-color"
          content="#FDB72B"
          media="(prefers-color-scheme: light)"
        />
        <meta
          name="theme-color"
          content="#228B22"
          media="(prefers-color-scheme: dark)"
        />
      </head>
      <body className={` ${ubuntu.variable} font-sans`}>
        <NavBar />
        <div className="flex flex-col sm:min-h-screen pt-28">{children}</div>
        <div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
