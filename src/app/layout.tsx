import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Calcular Taxa de Metabolismo Basal",
  description:
    "Calcule a Taxa de Metabolismo Basal do seu corpo segundo a equação de Harris-Benedict.",
};

<link rel="icon" href="/icon" type="image" />;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-neutral-50 text-neutral-800`}>
        {children}
      </body>
    </html>
  );
}
