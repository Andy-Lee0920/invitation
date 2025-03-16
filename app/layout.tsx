import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "준현과 민희의 상견례 초대장",
  description: "준현이와 민희의 상견례",
  icons: {
    icon: "/myfavicon1.ico",
  },
  openGraph: {
    title: "상견례 초대장",
    description: "준현이와 민희의 상견례",
    images: "/image/basic/firstImage.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
