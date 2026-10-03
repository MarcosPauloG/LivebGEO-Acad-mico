# Hipóteses e pendências

## 1. Hipóteses de pesquisa

Todas as hipóteses estão **não confirmadas** até que sejam avaliadas com entrevistas, tarefas de uso ou revisão do orientador.

Os limiares abaixo são provisórios e devem ser aprovados antes da coleta para evitar ajuste posterior aos resultados.

| ID | Hipótese | Método de validação | Critério inicial |
|---|---|---|---|
| H-01 | Uma visão cartográfica ajuda a localizar lacunas mais rapidamente do que uma lista isolada. | Comparar a mesma tarefa no mapa e em uma tabela equivalente. | Taxa de acerto no mapa maior ou igual à tabela e tempo mediano menor, sem aumento de erros. |
| H-02 | A distinção visual entre área coberta, região sem cobertura e possível ponto duplicado é compreensível com uma explicação inicial de até dois minutos. | Teste de identificação com participantes. | Pelo menos 80% identificam corretamente os três casos e explicam a diferença. |
| H-03 | Comparar ordem original e sugestão de rota ajuda a discutir eficiência de visitas. | Teste de tarefa seguido de entrevista. | Pelo menos 80% identificam a diferença e reconhecem que a sugestão não é uma rota ótima garantida. |
| H-04 | Quatro perfis simulados são suficientes para demonstrar controle de acesso. | Revisão da matriz e testes por perfil. | Todos os cenários previstos respeitam a matriz e pelo menos 80% compreendem os nomes dos perfis. |
| H-05 | Indicadores sintéticos simples são suficientes para uma discussão inicial de expansão. | Revisão com orientador e entrevista. | Pelo menos 80% justificam uma comparação usando apenas os indicadores exibidos, sem inferir dados reais. |
| H-06 | A sinalização de dados fictícios reduz o risco de o protótipo ser interpretado como sistema oficial. | Pergunta de compreensão ao final do teste. | Pelo menos 80% reconhecem sem ajuda o caráter acadêmico e citam ao menos uma limitação. |
| H-07 | Métricas sintéticas de rota permitem discutir sustentabilidade sem serem interpretadas como impacto real. | Tarefa comparativa seguida de perguntas sobre contribuição possível e limitações. | Pelo menos 80% citam uma contribuição possível e duas limitações sem extrapolar o cenário fictício. |

## 2. Pendências compartilhadas já registradas

- [ ] definir a região usada como amostra;
- [ ] definir a quantidade final de territórios;
- [ ] confirmar participantes das entrevistas;
- [ ] confirmar funcionalidades prioritárias;
- [ ] definir o formato final de armazenamento e versionamento dos documentos;
- [ ] confirmar datas e critérios definitivos da disciplina.

## 3. Pendências específicas da elicitação

- [ ] definir operacionalmente o que significa "região sem cobertura" no cenário acadêmico;
- [ ] definir quais tipos de duplicidade serão avaliados;
- [ ] decidir se as paradas representam municípios, pontos de interesse ou ambos;
- [ ] validar as métricas usadas na comparação de rotas;
- [ ] validar os indicadores de expansão e sua interpretação;
- [ ] validar os indicadores e limites da análise de sustentabilidade;
- [ ] revisar a matriz de permissões com a equipe;
- [ ] definir amostra e protocolo dos testes de uso;
- [ ] realizar entrevistas antes de publicar conclusões sobre necessidades humanas;
- [ ] confirmar se alguma disciplina exige implementação cliente-servidor com sockets; o plano de ensino, isoladamente, não vincula essa exigência ao Liveb GEO.

## 4. Riscos de pesquisa

| Risco | Efeito | Tratamento |
|---|---|---|
| Apresentar hipótese como fato | Requisitos sem evidência | Exibir status e fonte em cada item |
| Entrevistar somente pessoas próximas ao projeto | Viés de confirmação | Variar perfis e aplicar tarefas iguais |
| Registrar detalhes identificáveis | Risco de privacidade | Usar códigos e sínteses sanitizadas |
| Confundir demonstração com operação real | Risco acadêmico e de propriedade intelectual | Reforçar avisos e limites em documentos e telas |
| Alterar o escopo sem revisão | Inconsistência entre documentos e protótipo | Usar Pull Request e registrar decisão |

## 5. Regra de atualização

Ao confirmar ou rejeitar uma hipótese, registrar a evidência correspondente na matriz, atualizar a necessidade afetada e abrir Pull Request. Uma hipótese não desaparece sem histórico: ela muda de status e recebe justificativa.
