import type { Metadata } from "next";
import type { ReactNode } from "react";
import { AppShell } from "@/components/layout/app-shell";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Servix | Manutenção industrial",
    template: "%s | Servix",
  },
  description:
    "Sistema web de gestão de ordens de serviço para manutenção industrial.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">
        <a
          href="#conteudo"
          className="sr-only fixed top-3 left-3 z-50 rounded-lg bg-white px-4 py-3 font-semibold text-blue-700 shadow-lg focus:not-sr-only"
        >
          Pular para o conteúdo
        </a>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
