import { Antonio } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/navbar";

const antonio = Antonio({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-antonio",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={antonio.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
