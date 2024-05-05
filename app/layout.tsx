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
      <head>
        <link rel="icon" href="/static/images/32x32.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
