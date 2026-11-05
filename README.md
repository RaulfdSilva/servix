# Servix

Sistema web de gestão de ordens de serviço para manutenção industrial.

O Servix acompanha o equipamento do recebimento à entrega, passando por peritagem, orçamento, aprovação, manutenção e testes. Uma ordem mantém seu número durante todo o processo; cada equipamento preserva seu histórico de manutenção e uma OS pode envolver vários profissionais.

Projeto de portfólio profissional com arquitetura preparada para evoluir para um produto comercial. A primeira aplicação demonstrativa será uma oficina de bombas hidráulicas, sem restringir o domínio a esse tipo de equipamento.

## Estado atual

Inicialização do repositório e estrutura do front-end. A página inicial apresenta a fundação visual; dashboard, cadastros, peritagem e dados demonstrativos serão implementados nos próximos incrementos da Sprint 01.

Os arquivos foram preparados diretamente pelo conector GitHub. **Nenhuma instalação, execução, lint, teste ou build foi realizada nesta etapa.** A compatibilidade declarada ainda precisa ser confirmada pela instalação e pelas verificações locais. Não há lockfile gerado.

## Tecnologias

- Next.js 16 com App Router e React 19.
- TypeScript 5 em modo strict.
- Tailwind CSS 4, integrado via PostCSS.
- ESLint 9 com configurações do Next.js.

shadcn/ui, Lucide React, React Hook Form, Zod e Vitest fazem parte do plano da Sprint 01 e serão incorporados nos incrementos correspondentes.

## Instalação e execução

Requer Node.js 22 LTS e npm. Em uma cópia local deste repositório, com acesso ao registro npm:

```bash
npm install
npm run dev
```

Abra http://localhost:3000. O primeiro `npm install` deverá gerar um `package-lock.json`, que precisa ser revisado e versionado. A partir daí, use `npm ci` para instalações reproduzíveis.

Verificações previstas:

```bash
npm run lint
npm run typecheck
npm run build
npm start
```

`npm start` requer um build concluído. A suíte Vitest e o script de testes ainda serão adicionados; não há testes implementados nesta inicialização.

Nenhuma variável de ambiente é necessária nesta etapa.

## Organização

- `src/app`: páginas, layout global, estilos e estados de navegação.
- `src/components/layout`: estrutura visual reutilizável.
- `docs/architecture.md`: organização atual e arquitetura planejada.
- `docs/domain-model.md`: premissas do domínio e transições a validar.
- `docs/roadmap.md`: incrementos e critérios pendentes da Sprint 01.

## Limitações

Não há backend, banco de dados, autenticação, persistência, upload ou ordens de serviço cadastradas. A interface inicial não exibe indicadores operacionais fictícios como se fossem dados reais.

Os próximos incrementos usarão dados fictícios e rascunhos demonstrativos no navegador, identificados explicitamente como simulação.

## Próximas etapas

1. Instalar dependências, gerar o lockfile e executar lint, verificação de tipos e build.
2. Modelar entidades, contratos de serviço, validações e repositórios simulados.
3. Construir dashboard, listagem com filtros e detalhes das OS.
4. Implementar cadastro e peritagem responsiva com rascunho demonstrativo.
5. Adicionar empresas, equipamentos, histórico e testes unitários.
6. Validar navegação, acessibilidade e layout em celular, tablet e desktop.

Consulte o [roadmap](docs/roadmap.md) para acompanhar o escopo.
