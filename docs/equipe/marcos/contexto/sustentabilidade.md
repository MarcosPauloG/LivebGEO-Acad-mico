# Sustentabilidade acadêmica

**Status:** análise inicial, sujeita à revisão da equipe e do orientador
**Base:** protótipo e dados inteiramente sintéticos
**Resultado real medido:** nenhum

## 1. Objetivo

Avaliar como o Liveb GEO Acadêmico pode demonstrar decisões potencialmente mais sustentáveis em um cenário controlado, sem afirmar ganhos ambientais, econômicos ou sociais na operação real da empresa.

A pauta do projeto menciona sustentabilidade, mas não apresenta método, linha de base ou resultado mensurado. Por isso, este documento registra hipóteses e indicadores acadêmicos, não benefícios comprovados.

## 2. Dimensões consideradas

| Dimensão | Contribuição possível no protótipo | Evidência admissível | Limitação obrigatória |
|---|---|---|---|
| Ambiental | Comparar sequências de visita com menor distância e duração simuladas. | Diferença entre cenários fictícios calculada pelas regras locais. | Quilômetros sintéticos não demonstram combustível, energia ou emissões reais evitadas. |
| Econômica e operacional | Explorar redução de deslocamentos redundantes e melhor priorização de visitas fictícias. | Tempo, distância, número de paradas e duplicidades no cenário controlado. | Não converter resultados em economia financeira ou produtividade empresarial. |
| Social e ética | Tornar limites, permissões e origem fictícia dos dados compreensíveis. | Testes de compreensão, acessibilidade e execução de tarefas. | Não afirmar benefício para trabalhadores ou clientes sem pesquisa autorizada. |
| Técnica e governança | Manter regras reproduzíveis, dados locais e revisão por Pull Request. | Testes automatizados, matriz de evidências e histórico de revisão. | Não equivale a disponibilidade, segurança ou eficiência de uma arquitetura de produção. |

## 3. Indicadores propostos

| ID | Indicador sintético | Unidade | Fonte | Estado |
|---|---|---|---|---|
| SUS-01 | Diferença de distância entre duas sequências de rota | km fictícios | Cenários e cálculo local de rotas | Disponível para demonstração |
| SUS-02 | Diferença de duração entre duas sequências | minutos fictícios | Cenários e cálculo local de rotas | Disponível para demonstração |
| SUS-03 | Paradas repetidas ou pontos sinalizados como possível duplicidade | quantidade | Fixture acadêmica e regra local | Disponível para demonstração |
| SUS-04 | Compreensão de que a rota é sugestão e os dados são fictícios | percentual de participantes | Teste de uso futuro | Não coletado |
| SUS-05 | Execução correta de tarefas pelos perfis simulados | percentual de tarefas | Teste de uso futuro | Não coletado |

Nenhuma meta numérica de melhoria está confirmada. Limiares só podem ser definidos antes da coleta, com cenário, amostra e método registrados.

### Fórmulas acadêmicas

- `diferença de distância = distância da sequência-base - distância da sequência comparada`;
- `diferença de duração = duração da sequência-base - duração da sequência comparada`;
- `taxa de compreensão = participantes que identificam corretamente as limitações / participantes com resposta válida`;
- `taxa de conclusão = tarefas concluídas corretamente / tarefas válidas observadas`.

Resultados devem informar cenário, quantidade válida e unidade. Amostra ausente ou resposta não aplicável não pode ser convertida em zero.

## 4. Método de avaliação proposto

1. Fixar um único conjunto de municípios e paradas sintéticas.
2. Registrar a ordem inicial e a sugestão produzida pelo cálculo local.
3. Comparar distância, duração e quantidade de paradas usando a mesma base.
4. Verificar se participantes compreendem que as métricas são fictícias e não representam uma rota ótima garantida.
5. Registrar resultados agregados e pseudonimizados, quando houver consentimento.
6. Apresentar limitações junto de qualquer gráfico, tabela ou conclusão.

## 5. Efeitos negativos e compensações

- uma rota mais curta pode deixar uma região sem cobertura; distância não é o único critério;
- priorizar pontos com maior indicador pode reduzir atenção a áreas com poucos dados;
- aumentar granularidade analítica pode elevar risco de reidentificação, exigindo minimização;
- digitalizar o processo não elimina consumo de energia ou custo de manutenção do sistema;
- automatizar uma sugestão pode criar confiança excessiva se a heurística e suas limitações não forem explicadas.

## 6. Regras contra alegações enganosas

- usar “potencial”, “hipótese” ou “cenário sintético” enquanto não houver evidência apropriada;
- não calcular emissões, combustível, custos ou produtividade com parâmetros empresariais reais;
- não extrapolar diferenças do protótipo para frota, equipe, território ou operação da empresa;
- não apresentar uma rota simulada como recomendação operacional;
- manter ausências de dados como “não coletado” ou “não confirmado”, nunca como zero;
- revisar conclusões com a equipe e o orientador antes da entrega final.

## 7. Conclusão provisória

O protótipo permite discutir sustentabilidade por meio de comparações reproduzíveis e fictícias. Até que exista método aprovado e validação, a conclusão permitida é apenas que o sistema acadêmico oferece instrumentos para explorar o tema; nenhum impacto real foi demonstrado.
