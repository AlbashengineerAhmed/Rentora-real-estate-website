import { Jost } from "next/font/google";
import "./globals.css";
import Header from "./_Components/Header";
import Footer from "./_Components/Footer";
import AOSInit from "./_Components/AOSInit";

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Rentora - Professional Real Estate Solutions",
  description:
    "Rentora offers professional property management and real estate services, including property listings, market analysis, and investment advice. Contact us today to learn more.",
  keywords: [
    "property management",
    "real estate",
    "market analysis",
    "investment advice",
  ],
  authors: [
    {
      name: "Rentora",
      url: "https://rentora.com",
    },
  ],
  creator: "Rentora",
  publisher: "Rentora",
  image: "/assets/logo.png",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${jost.className} scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="relative" suppressHydrationWarning>
        <div className="fixed inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 pointer-events-none -z-50" />
        <AOSInit />
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
