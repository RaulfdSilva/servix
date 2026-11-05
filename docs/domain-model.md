# Modelo de domínio proposto

Este documento registra decisões e hipóteses para os próximos incrementos. As entidades e regras ainda não foram implementadas.

## Entidades

| Entidade | Responsabilidade |
| --- | --- |
| Company | Empresa cliente e informações de contato. |
| Equipment | Equipamento de uma empresa, fabricante, modelo e identificação individual opcional. |
| WorkOrder | Serviço com ID interno, número comercial estável, equipamento, prioridade e data limite opcional. |
| Inspection | Peritagem de uma OS, modo checklist ou lista livre, observações e itens. |
| InspectionItem | Componente, quantidade, presença quando aplicável, inconformidades e recomendação. |
| WorkOrderParticipant | Relação de um profissional com a OS, função e etapa de participação. |
| Attachment | Metadados de fotografia ou documento, vinculados à OS ou item de peritagem. |
| WorkOrderStatusHistory | Registro cronológico de status, responsável, instante e motivo. |

## Invariantes

- IDs internos independem do número comercial da OS.
- A OS conserva seu número durante todo o ciclo.
- Um equipamento pode ter várias OS ao longo do tempo.
- A identificação de plaqueta pode estar ausente e não é globalmente única.
- Uma OS pode ter vários participantes em etapas diferentes.
- Prioridade e prazo são atributos separados.
- O domínio é genérico para manutenção industrial; checklist de bombas é configuração demonstrativa.
- Encerramento sem execução deve registrar motivo, incluindo desistência e orçamento recusado.

## Fluxo candidato, sujeito a validação

1. Recebida → aguardando peritagem.
2. Aguardando peritagem → em peritagem.
3. Em peritagem → elaboração de orçamento.
4. Elaboração de orçamento → aguardando aprovação.
5. Aguardando aprovação → aguardando peças ou em execução, após aprovação.
6. Aguardando peças → em execução.
7. Em execução → em testes.
8. Em testes → liberada para entrega; retorno à execução deve exigir justificativa.
9. Liberada para entrega → entregue.
10. Aguardando aprovação → encerrada sem execução por orçamento recusado.
11. Desistência pode levar ao encerramento sem execução nas etapas que forem validadas com a operação.

Não são permitidas transições arbitrárias: a futura interface de aplicação deve expor intenções e consultar uma regra explícita de transição, sem um setter público genérico de status. Nenhum comando de mudança de status existe nesta inicialização.

Este fluxo não é uma máquina de estados definitiva. Validar retrabalho, reabertura, cancelamento após início, testes reprovados e devolução sem manutenção antes de implementá-la. Os testes futuros devem cobrir a política provisória adotada sem apresentá-la como regra já homologada.
