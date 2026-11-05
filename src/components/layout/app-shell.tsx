import Link from "next/link";
import type { ReactNode } from "react";

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-dvh lg:grid lg:grid-cols-[248px_1fr]">
      <aside className="flex flex-col border-b border-slate-200 bg-white p-5 lg:sticky lg:top-0 lg:h-dvh lg:border-r lg:border-b-0 lg:p-6">
        <Link
          href="/"
          aria-label="Servix — início"
          className="flex min-h-11 w-fit items-center gap-3"
        >
          <span
            aria-hidden="true"
            className="grid size-10 place-items-center rounded-xl bg-blue-700 text-xl font-bold text-white"
          >
            S
          </span>
          <span className="text-2xl font-bold tracking-tight">servix<span className="text-blue-700">.</span></span>
        </Link>
        <p className="mt-3 text-xs font-medium tracking-wide text-slate-500">
          GESTÃO DE MANUTENÇÃO
        </p>
        <nav aria-label="Navegação principal" className="mt-6 lg:mt-10">
          <Link
            href="/"
            aria-current="page"
            className="flex min-h-12 items-center gap-3 rounded-lg bg-blue-50 px-4 text-sm font-semibold text-blue-800"
          >
            <span aria-hidden="true" className="size-2 rounded-full bg-blue-600" />
            Visão geral
          </Link>
        </nav>
        <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-4 lg:mt-auto">
          <p className="text-sm font-semibold">Sprint 01</p>
          <p className="mt-1 text-xs leading-5 text-slate-500">
            Fundação do produto. Os módulos operacionais serão adicionados nos próximos incrementos.
          </p>
        </div>
      </aside>
      <div className="min-w-0">
        <header className="flex min-h-20 flex-wrap items-center justify-between gap-3 border-b border-slate-200 bg-white px-5 py-4 sm:px-8 lg:px-10">
          <p className="text-sm text-slate-500">
            Workspace <span className="mx-2 text-slate-300">/</span>
            <span className="font-medium text-slate-800">Visão geral</span>
          </p>
          <span className="rounded-full border border-slate-200 px-3 py-1 text-xs font-medium text-slate-600">
            Em desenvolvimento
          </span>
        </header>
        <main id="conteudo" tabIndex={-1} className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-10 lg:py-10">
          {children}
        </main>
      </div>
    </div>
  );
}
