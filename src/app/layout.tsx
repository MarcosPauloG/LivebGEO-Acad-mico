import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Liveb GEO Acadêmico",
  description:
    "Protótipo acadêmico com dados sintéticos para análise territorial e planejamento de visitas."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
