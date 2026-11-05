import Link from "next/link";

export default function NotFound() {
  return (
    <section className="rounded-xl border border-slate-200 bg-white p-6">
      <p className="text-xs font-semibold tracking-widest text-blue-700">404</p>
      <h1 className="mt-3 text-2xl font-semibold">Página não encontrada</h1>
      <p className="mt-2 text-sm leading-6 text-slate-600">
        O endereço solicitado não está disponível.
      </p>
      <Link
        href="/"
        className="mt-5 inline-flex min-h-11 items-center rounded-lg bg-blue-700 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-800"
      >
        Voltar ao início
      </Link>
    </section>
  );
}
