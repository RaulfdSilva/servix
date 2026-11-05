"use client";

export default function ErrorPage({ reset }: { reset: () => void }) {
  return (
    <section className="rounded-xl border border-slate-200 bg-white p-6">
      <h1 className="text-xl font-semibold">Não foi possível carregar esta página</h1>
      <p className="mt-2 text-sm leading-6 text-slate-600">
        Tente novamente. Se o problema continuar, retorne mais tarde.
      </p>
      <button
        type="button"
        onClick={reset}
        className="mt-5 min-h-11 rounded-lg bg-blue-700 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-800"
      >
        Tentar novamente
      </button>
    </section>
  );
}
