import { Inter } from "next/font/google";
import "./globals.scss";
import { Metadata } from "next";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nextjs App Started",
  // description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark">
      <body suppressHydrationWarning className={inter.className}>
        {children}
      </body>
    </html>
  );
}
