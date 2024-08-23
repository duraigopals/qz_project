import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import Navbar from "@/lib/components/navbar";
import Footer from "@/lib/components/footer";
import ContactUs from "@/lib/components/contact_us";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "QZ Sustainability",
  description: "Generated by create next app",
  icons: [{ rel: "icon", url: '/favicon.svg' }]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Navbar />
          {children}
          
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
