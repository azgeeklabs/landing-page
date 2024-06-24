import "./globals.css";
import type { Metadata } from "next";

// Import Context (provider only)
import GlobalContextProvider from "./_context/GlobalContext";

export const metadata: Metadata = {
  title: "Creative Juicebox",
  description: "Creative Juicebox",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <GlobalContextProvider>
        <body>
          {children}
        </body>
      </GlobalContextProvider>
    </html>
  );
}