import type { Metadata } from "next";
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
      <body>{children}</body>
    </html>
  );
}
