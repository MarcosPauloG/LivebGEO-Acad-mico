# Decisões de escopo

## 1. Origem

As decisões abaixo consolidam somente o que já estava registrado no commit-base `9325e4c`, de 12/09/2026. A consolidação foi preparada por Marcos para facilitar a revisão da equipe; ela não cria autorização para usar sistemas ou dados empresariais.

## 2. Restrições e decisões documentadas no repositório-base

Os itens abaixo descrevem o estado e as políticas verificáveis no commit-base. Eles não comprovam aprovação da reunião, concordância de toda a equipe ou decisão do professor.

| ID | Registro do repositório | Consequência | Fonte |
|---|---|---|---|
| DEC-001 | O repositório deve permanecer privado e exclusivamente acadêmico. | Acesso limitado à equipe, professor e pessoas autorizadas; não publicar como produto oficial. | [README](../../../../README.md) |
| DEC-002 | Todo dado demonstrativo é sintético ou fictício. | Não usar clientes, imobiliárias, representantes, funcionários, contatos, documentos ou endereços reais. | [Dados sintéticos](../../../DADOS-SINTETICOS.md) |
| DEC-003 | O mapa é esquemático e não representa cobertura real. | Posições, polígonos, distâncias e códigos `SIM-*` não devem ser tratados como dados oficiais. | [README](../../../../README.md) |
| DEC-004 | A amostra atual possui seis territórios sintéticos. | Serve apenas para demonstrar o protótipo; a quantidade definitiva permanece pendente. | [README](../../../../README.md) |
| DEC-005 | O Gestão é representado por contrato e adaptador mock local. | Não conectar endpoint, conta, cookie, token ou código interno do Gestão. | [Arquitetura](../../../ARQUITETURA.md) |
| DEC-006 | Mapas, geocodificação e cálculo de rotas externos não são usados. | Rotas e métricas permanecem determinísticas e fictícias. | [Arquitetura](../../../ARQUITETURA.md) |
| DEC-007 | Não existe banco de dados ou persistência de negócio. | Sessão fica no armazenamento local; visitas criadas são descartadas ao recarregar. | [Arquitetura](../../../ARQUITETURA.md) |
| DEC-008 | O escopo inclui mapa, territórios, pontos, representantes, visitas, rotas, cobertura, expansão e permissões simuladas. | Mudanças devem permanecer dentro desse recorte. | [Escopo](../../../ESCOPO.md) |
| DEC-009 | CRM, contratos, financeiro, cobrança, atendimento, inbox, IA, outros módulos do Liveb OS e infraestrutura ficam fora. | Nenhum código, dado ou integração desses domínios deve entrar no repositório. | [Escopo](../../../ESCOPO.md) |
| DEC-010 | A política de contribuição determina branch e revisão por Pull Request para alterações relevantes. | A proteção técnica da `main` no GitHub deve ser verificada separadamente; não realizar commit direto nem force push. | [Guia de contribuição](../../../../CONTRIBUTING.md) |

## 3. Itens ainda não decididos

| ID | Decisão pendente | Participação sugerida | Evidência necessária |
|---|---|---|---|
| PEN-001 | Região ou recorte territorial da demonstração final | Equipe e orientador | Revisão do objetivo e das restrições de dados |
| PEN-002 | Quantidade final de territórios | Equipe | Casos de uso e legibilidade do protótipo |
| PEN-003 | Perfil do entrevistado principal e reserva, respondentes do questionário e uso de instrumentos distintos | Equipe e orientador | Critérios éticos, consentimento, disponibilidade, diversidade e método de pesquisa |
| PEN-004 | Funcionalidades prioritárias na apresentação | Equipe | Requisitos, roteiro de cinco minutos e resultados da validação |
| PEN-005 | Definição de duplicidade e região sem cobertura | Marcos e Bruna-Elisa | Evidências de elicitação e critérios de aceitação |
| PEN-006 | Métricas e limites da comparação de rotas | Marcos, Bruna-Elisa e Filipe | Cenários controlados e testes de compreensão |
| PEN-007 | Necessidade de implementação cliente-servidor adicional | Equipe e professor da disciplina correspondente | Enunciado específico da atividade, não apenas o plano de ensino |
| PEN-008 | Corpus documental autorizado para análise | Equipe e orientador | Inventário, classificação de acesso e autorização de uso |
| PEN-009 | Aprovação do fluxo de dez etapas e do contexto compartilhado entre telas | Equipe | Matriz de fluxo, requisitos, casos de uso e teste do protótipo |
| PEN-010 | Local de guarda e padrão de nomes e versões dos documentos | Equipe | Política acadêmica de armazenamento e acesso |
| PEN-011 | Identificação da disciplina e data oficial de entrega | Equipe e professor | Informação publicada no ambiente oficial da disciplina |
| PEN-012 | Título final e uso do termo “otimização” | Equipe e professor | Alinhamento com o algoritmo realmente demonstrado e seus limites |

## 4. Processo para nova decisão

1. Identificar a questão e registrar seu estado como pendente.
2. Reunir evidência acadêmica suficiente.
3. Avaliar impacto em requisitos, casos de uso, protótipo e segurança.
4. Propor a decisão em Pull Request.
5. Obter revisão de pelo menos outro integrante.
6. Atualizar `docs/ESCOPO.md` somente depois da aprovação.
