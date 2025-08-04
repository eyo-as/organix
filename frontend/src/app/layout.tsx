import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import Nav from "@/components/layout/Nav";

export const metadata: Metadata = {
  title: "Organix",
  description: "Be Organized every where.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div>
          <Nav />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
