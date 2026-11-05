# Roadmap

## Sprint 01 — Fundação e protótipo visual

### Inicialização remota

- [x] Verificar repositório vazio e branch padrão pelo conector GitHub.
- [x] Criar README e estrutura inicial Next.js com App Router.
- [x] Declarar TypeScript strict, Tailwind CSS e ESLint.
- [x] Registrar arquitetura, domínio proposto e limitações.
- [ ] Instalar dependências e versionar package-lock.json.
- [ ] Confirmar lint, tipos e build em ambiente funcional.

### Domínio e dados demonstrativos

- [ ] Implementar entidades e contratos assíncronos de serviços.
- [ ] Criar repositórios simulados separados dos componentes.
- [ ] Criar dados industriais fictícios com equipamentos, OS e participantes.
- [ ] Implementar regras puras e validações Zod.
- [ ] Adicionar Vitest e testes relevantes.

### Interface operacional

- [ ] Incorporar shadcn/ui e Lucide React.
- [ ] Dashboard: totais por etapa, urgências, atrasos, serviços recentes e atenção prioritária.
- [ ] Listagem de OS: busca, filtros por status e prioridade, prazos e participantes.
- [ ] Detalhes: resumo, peritagem, orçamento, execução, testes, anexos e histórico.
- [ ] Linha do tempo das etapas da OS.
- [ ] Cadastro validado de OS com React Hook Form e Zod.
- [ ] Peritagem por checklist e lista livre, com rascunho demonstrativo.
- [ ] Interface para fotografias com indicação de que não há upload real.
- [ ] Empresas e equipamentos: listagens, detalhes e histórico de manutenção.

### Revisão e aceitação

- [ ] Testar navegação, pesquisa, filtros e gravação simulada de rascunho.
- [ ] Validar layout em celular, tablet e desktop.
- [ ] Revisar estados vazios, carregamento, erros e acessibilidade.
- [ ] Verificar console no navegador.
- [ ] Executar lint, testes, tipos e build; corrigir falhas.
- [ ] Atualizar README com evidências e limitações reais.

A Sprint 01 ainda não está concluída. A inicialização não implementa funcionalidades de negócio nem demonstra persistência.

## Depois da Sprint 01

Validar o fluxo operacional com usuários antes de fechar a política de transições. Em seguida, especificar API e persistência, autenticação, autorização por empresa, armazenamento de anexos e auditoria. Essas funcionalidades estão fora do escopo desta sprint.
