const plannedModules = [
  {
    number: "01",
    title: "Ordens de serviço",
    description:
      "Acompanhe cada manutenção do recebimento à entrega, com prioridade, prazo e profissionais participantes.",
  },
  {
    number: "02",
    title: "Peritagem técnica",
    description:
      "Registre componentes, inconformidades e recomendações em formulários pensados para o uso no celular.",
  },
  {
    number: "03",
    title: "Histórico do equipamento",
    description:
      "Consulte intervenções anteriores e mantenha a rastreabilidade dos serviços de cada equipamento.",
  },
];

export default function HomePage() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-xs font-semibold tracking-widest text-blue-700">FUNDAÇÃO DO PRODUTO</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
          Manutenção organizada.<br className="hidden sm:block" /> Do início à entrega.
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
          O Servix reúne ordens de serviço, informações técnicas e histórico de equipamentos
          em um único espaço de trabalho para manutenção industrial.
        </p>
      </div>

      <section aria-labelledby="foundation-title" className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
        <div className="flex flex-wrap items-center gap-3">
          <h2 id="foundation-title" className="text-lg font-semibold">Base inicial do Servix</h2>
          <span className="rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-800">
            Sprint 01 · Em preparação
          </span>
        </div>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600">
          Esta é a estrutura inicial da aplicação. Ainda não há ordens cadastradas,
          indicadores operacionais, formulários ou persistência. Os módulos abaixo
          representam o escopo planejado e ainda não estão disponíveis.
        </p>
        <a
          href="https://github.com/RaulfdSilva/servix/blob/main/docs/roadmap.md"
          className="mt-5 inline-flex min-h-11 items-center rounded-lg bg-blue-700 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-800"
        >
          Consultar o roadmap
        </a>
      </section>

      <section aria-labelledby="modules-title">
        <h2 id="modules-title" className="text-lg font-semibold">Próximos módulos</h2>
        <p className="mt-1 text-sm text-slate-500">Planejados para os próximos incrementos da sprint.</p>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {plannedModules.map((module) => (
            <article key={module.number} className="rounded-xl border border-slate-200 bg-white p-6">
              <span aria-hidden="true" className="font-mono text-sm font-medium text-blue-700">
                {module.number}
              </span>
              <h3 className="mt-5 font-semibold">{module.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{module.description}</p>
              <p className="mt-5 text-xs font-medium text-slate-500">Implementação pendente</p>
            </article>
          ))}
        </div>
      </section>
      <footer className="border-t border-slate-200 pt-5 text-xs leading-6 text-slate-500">
        Projeto de portfólio · Gestão de manutenção industrial · Sem dados operacionais nesta versão.
      </footer>
    </div>
  );
}
