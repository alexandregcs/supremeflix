import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Supreme Flix | Entretenimento em Filmes, Séries e Canais",
  description:
    "Conheça a Supreme Flix e solicite um teste pelo WhatsApp. Filmes, séries, canais, esportes e muito mais em seus dispositivos favoritos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18275574103"
          strategy="afterInteractive"
        />
        <Script id="google-ads-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18275574103');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
