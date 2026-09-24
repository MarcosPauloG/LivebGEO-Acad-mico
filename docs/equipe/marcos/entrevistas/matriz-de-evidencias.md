# Matriz de evidências

Esta matriz registra apenas evidências verificáveis no material acadêmico atual. Ela não substitui entrevistas e não representa a operação real da Liveb.

## Evidências disponíveis

| ID | Fonte acadêmica | Observação verificável | Uso na elicitação | Limitação |
|---|---|---|---|---|
| EVD-DOC-01 | [Recorte acadêmico](../../../ESCOPO.md) | O recorte inclui mapa, territórios, pontos, representantes, visitas, rotas, cobertura, expansão e permissões simuladas. | Delimita os temas que precisam ser compreendidos e validados. | Não comprova necessidade de usuário real. |
| EVD-ARQ-01 | [Arquitetura do protótipo](../../../ARQUITETURA.md) | O protótipo não possui banco nem conexão empresarial e usa dados e regras locais. | Gera a necessidade de transparência sobre limitações e persistência. | Não avalia uma arquitetura de produção. |
| EVD-DAD-01 | [Política de dados sintéticos](../../../DADOS-SINTETICOS.md) | Identidades, pontos, distâncias e indicadores devem ser fictícios. | Define restrições de privacidade e segurança para a pesquisa. | Dados sintéticos não reproduzem toda a complexidade de cenários reais. |
| EVD-PRO-01 | [Composição do painel](../../../../src/components/dashboard-shell.tsx) | Existem visões para mapa, territórios, pontos, representantes, visitas, rotas, cobertura, expansão e acesso. | Permite criar tarefas de teste e observar compreensão e navegação. | Funcionalidades demonstrativas não provam utilidade operacional. |
| EVD-PRO-02 | [Estado local de visitas](../../../../src/components/dashboard-shell.tsx) e [visão de visitas](../../../../src/components/views/visits-view.tsx) | Visitas criadas são voláteis e desaparecem ao recarregar. | Deve ser explicado ao participante e avaliado como limitação. | Não testa histórico ou persistência. |
| EVD-PRO-03 | [Visão de rotas](../../../../src/components/views/routes-view.tsx), [lógica de rota](../../../../src/lib/route-logistics.ts) e [testes da lógica](../../../../src/lib/route-logistics.test.ts) | A rota sugerida usa cálculo local determinístico com métricas fictícias e possui testes definidos. | Permite comparar compreensão entre ordem original e sugestão. | Não usa trânsito, vias ou geocodificação reais e não garante ótima global; a existência do arquivo não comprova a execução dos testes no ambiente de entrega. |
| EVD-SEG-01 | [Permissões locais](../../../../src/lib/permissions.ts) e [visão de acesso](../../../../src/components/views/access-view.tsx) | Há quatro perfis acadêmicos e uma matriz de permissões local. | Permite investigar se a separação de acesso é compreensível. | Não valida autenticação ou autorização empresarial. |
| EVD-TST-01 | [Testes das fixtures](../../../../src/data/academic.test.ts) | Há testes definidos para prefixos municipais sintéticos, domínio de e-mail reservado e referências internas. | Apoia a revisão do caráter sintético da amostra. | A existência do arquivo não substitui revisão humana nem comprova a execução dos testes no ambiente de entrega. |
| EVD-GOV-01 | [Guia de contribuição](../../../../CONTRIBUTING.md) e [workflow de qualidade](../../../../.github/workflows/quality.yml) | O fluxo documentado exige branch, Pull Request, revisão e verificações, e existe workflow para `push` na `main` e Pull Requests. | Sustenta rastreabilidade e revisão das alterações. | A proteção técnica da `main` e a execução no GitHub precisam ser verificadas separadamente. |
| EVD-PAU-01 | [Análise documental da pauta](../contexto/analise-documental.md) | A pauta registra escopo, fluxo, responsabilidades, integrações propostas e decisões ainda necessárias. | Separa direcionamento de reunião, evidência atual e pendências. | A fonte é externa ao repositório e não comprova aprovação nem execução das decisões propostas. |
| EVD-SUS-01 | [Sustentabilidade acadêmica](../contexto/sustentabilidade.md) | Existem indicadores sintéticos propostos para discutir distância, duração, duplicidades e compreensão. | Permite formular e testar uma hipótese de sustentabilidade. | Nenhum impacto real foi medido. |
| EVD-ENT-00 | [Sínteses sanitizadas](sinteses-sanitizadas.md) | Nenhuma entrevista foi registrada até esta versão. | Mantém necessidades humanas como hipóteses. | Não há evidência de usuário para confirmar prioridades. |
| EVD-QUE-00 | [Questionário](questionario.md) e [análise das respostas](analise-das-respostas.md) | Há uma proposta de instrumento estruturado, ainda não aprovada e sem respostas. | Define uma possível coleta comparável sem fabricar resultados. | Decisão metodológica, participantes, consentimento e aplicação continuam pendentes. |
| EVD-FLO-01 | [Fluxo proposto e validação](../elicitacao/fluxo-proposto-e-validacao.md) | As dez etapas da pauta foram comparadas com arquivos reais do protótipo. | Identifica cobertura parcial, mocks e falta de contexto compartilhado. | A matriz técnica não substitui aprovação da equipe nem teste de uso. |

## Rastreabilidade inicial

| Necessidade proposta | Evidência atual | Evidência ainda necessária |
|---|---|---|
| N-F01 - compreender a distribuição territorial | EVD-DOC-01 e EVD-PRO-01 | Entrevista e teste de localização no mapa |
| N-F02 - consultar pontos de interesse fictícios | EVD-DOC-01 e EVD-PRO-01 | Entrevista sobre critérios de prioridade e teste de consulta |
| N-F03 - visualizar representantes e cobertura | EVD-DOC-01 e EVD-PRO-01 | Definição validada de cobertura e teste de interpretação |
| N-F04 - identificar regiões sem cobertura e possíveis duplicidades | EVD-DOC-01 e EVD-PRO-01 | Definição das regras e teste de identificação |
| N-F05 - planejar visitas demonstrativas | EVD-DOC-01, EVD-PRO-01 e EVD-PRO-02 | Entrevistas sobre critérios e teste da tarefa |
| N-F06 - comparar ordem de rota e sugestão local | EVD-DOC-01 e EVD-PRO-03 | Validação das métricas relevantes e teste de compreensão |
| N-F07 - consultar indicadores de expansão | EVD-DOC-01 e EVD-PRO-01 | Validação dos indicadores e de sua forma de apresentação |
| N-F08 - demonstrar diferenças de acesso | EVD-SEG-01 | Revisão dos perfis e teste por tarefa |
| N-F09 - informar claramente quando o conteúdo é fictício, ausente ou não confirmado | EVD-DAD-01 e EVD-PRO-01 | Teste de compreensão das sinalizações |
| N-NF01 - isolar o protótipo de sistemas e bancos empresariais | EVD-ARQ-01 e EVD-DAD-01 | Revisão de segurança antes de cada entrega |
| N-NF02 - usar somente dados sintéticos identificáveis como demonstração | EVD-DAD-01 e EVD-TST-01 | Executar os testes e revisar novas fixtures antes de cada entrega |
| N-NF03 - explicar limitações, fontes e regras de cálculo | EVD-ARQ-01, EVD-DAD-01, EVD-PRO-03 e EVD-SUS-01 | Auditoria de textos e teste de compreensão |
| N-NF04 - produzir resultados determinísticos nos cenários de teste | EVD-PRO-03 | Executar os testes e documentar cenários adicionais |
| N-NF05 - manter navegação e textos compreensíveis para os quatro perfis | EVD-PRO-01 e EVD-SEG-01 | Testes de tarefa e acessibilidade com participantes |
| N-NF06 - tratar ausência de informação como dado ausente, não como zero | Sem evidência técnica específica nesta versão | Definir representação, critério de aceitação e teste automatizado |
| N-NF07 - revisar mudanças por Pull Request e preservar rastreabilidade | EVD-GOV-01 | Confirmar proteção da `main` e registrar revisão no Pull Request |

## Como atualizar

Quando houver entrevistas, criar novas evidências `EVD-ENT-01`, `EVD-ENT-02` e assim por diante. A matriz deve apontar para a síntese sanitizada correspondente, nunca para material bruto ou identificável.
