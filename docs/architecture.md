# Arquitetura

## Estado desta inicialização

O repositório contém a configuração do Next.js com App Router, TypeScript strict, Tailwind CSS 4 via PostCSS e ESLint flat config. A instalação e o build ainda não foram executados.

As dependências usam faixas compatíveis de versões estáveis: Next.js e eslint-config-next na linha 16, React e seus tipos na linha 19, Tailwind e seu plugin PostCSS na linha 4. Após a primeira instalação, revisar as versões resolvidas e versionar o lockfile.

A página inicial é uma apresentação do estado do projeto, sem indicadores operacionais ou formulários. Não representa o dashboard concluído.

## Estrutura existente

```text
src/
  app/
    layout.tsx
    page.tsx
    globals.css
    loading.tsx
    error.tsx
    not-found.tsx
  components/
    layout/
      app-shell.tsx
docs/
  architecture.md
  domain-model.md
  roadmap.md
```

Os componentes são Server Components por padrão. Apenas o limite de erro usa um Client Component para permitir a ação de tentar novamente. Não há fontes remotas nem configuração de serviços externos.

## Estrutura planejada para a Sprint 01

Os diretórios abaixo serão criados com suas primeiras implementações; ainda não contêm código:

```text
src/
  components/ui/          # Primitivas shadcn/ui
  features/work-orders/  # Tabelas, filtros e formulários do domínio
  features/inspections/  # Interface de peritagem
  domain/                # Entidades, tipos e regras puras
  services/              # Interfaces de acesso a dados e composição
  repositories/mock/     # Implementações simuladas dos contratos
  validations/           # Schemas Zod
  data/demo/             # Dados fictícios
```

Fluxo proposto: páginas e features → contratos de serviço → adaptador mock ou API. O domínio não deve importar React, repositórios ou dados demonstrativos. Componentes visuais não devem acessar diretamente os arrays dos mocks.

Os contratos devem ser assíncronos para acomodar uma futura API. A composição escolhe o adaptador, preservando os consumidores. Formulários usam React Hook Form e Zod; regras puras ficam fora dos componentes.

## Dados e persistência

Nenhum backend, banco, Prisma ou autenticação será adicionado nesta sprint. Não há persistência nesta inicialização.

Os próximos incrementos usarão dados demonstrativos e rascunhos locais no navegador, com identificação explícita de simulação e tratamento de indisponibilidade do armazenamento. Fotografias devem ser fictícias ou fornecidas voluntariamente para demonstração; pré-visualização local não equivale a upload.

Nenhuma variável de ambiente é necessária agora.

## Riscos e validação pendente

- Não há lockfile: resolver, revisar e congelar dependências na primeira instalação.
- Instalação, lint, tipos e build não foram executados por indisponibilidade de rede no terminal.
- Os estados e transições das OS precisam de validação com usuários da oficina.
- Uso móvel exige revisão real de tabelas, formulários, foco, contraste e alvos de toque.
- Validar os contratos dos mocks antes de criar a integração real.
