import "./globals.css";
import { Inter } from "next/font/google";
import { Locale } from "@/i18n.config";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  return (
    <html lang={params.lang}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
