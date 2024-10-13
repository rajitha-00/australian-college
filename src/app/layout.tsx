import "./globals.css"; // Import global styles
import { Montserrat } from "next/font/google";
import type { Metadata } from "next";
import Header from "@/components/header/Header";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--montserrat",
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  title: {
    absolute: "",
    default: "Australian College - ACBT",
    template: "%s | ACBT",
  },
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div className={montserrat.className}>{children}</div>
      </body>
    </html>
  );
}
