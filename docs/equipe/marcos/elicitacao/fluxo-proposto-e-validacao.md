# Fluxo proposto e validação

**Origem:** sequência de dez etapas registrada na pauta externa do projeto
**Status geral:** proposta parcialmente representada; aprovação coletiva e validação humana pendentes

## 1. Matriz entre pauta e protótipo

| Etapa | Fluxo proposto | Evidência atual | Estado | Lacuna ou decisão necessária |
|---:|---|---|---|---|
| 1 | Acessar o Liveb GEO | [Formulário de acesso](../../../../src/components/login-form.tsx) | Simulado | Acesso é local e acadêmico. |
| 2 | Consultar autenticação e permissões no Gestão | [Contrato do Gestão](../../../../src/lib/gestao-contract.ts), [sessão](../../../../src/lib/session.ts) e [permissões](../../../../src/lib/permissions.ts) | Substituído por mock | Integração empresarial permanece fora do escopo. |
| 3 | Visualizar mapa e territórios | [Mapa](../../../../src/components/views/map-view.tsx) e [territórios](../../../../src/components/views/territories-view.tsx) | Demonstrado | Validar compreensão e acessibilidade. |
| 4 | Selecionar município ou região | [Painel](../../../../src/components/dashboard-shell.tsx) e mapa | Parcial | A seleção atual fica concentrada no mapa e não alimenta todas as etapas seguintes. |
| 5 | Visualizar pontos e cobertura | [Pontos](../../../../src/components/views/points-view.tsx) e [cobertura](../../../../src/components/views/coverage-view.tsx) | Demonstrado em visões separadas | Decidir se devem receber o município selecionado. |
| 6 | Consultar representante responsável | [Representantes](../../../../src/components/views/representatives-view.tsx) | Demonstrado em visão separada | Não há encadeamento garantido com a seleção anterior. |
| 7 | Selecionar pontos para visita | [Visitas](../../../../src/components/views/visits-view.tsx) | Parcial e volátil | A seleção é própria da tela e some ao recarregar. |
| 8 | Gerar e comparar rota | [Rotas](../../../../src/components/views/routes-view.tsx) e [lógica local](../../../../src/lib/route-logistics.ts) | Simulado | Cenários e cálculo não derivam integralmente das visitas planejadas nem garantem ótimo global. |
| 9 | Registrar ou acompanhar cobertura | [Visitas](../../../../src/components/views/visits-view.tsx) e [cobertura](../../../../src/components/views/coverage-view.tsx) | Parcial | Não há persistência nem atualização empresarial de cobertura. |
| 10 | Visualizar indicadores de expansão | [Expansão](../../../../src/components/views/expansion-view.tsx) | Demonstrado | Indicadores são fictícios e precisam de teste de compreensão. |

## 2. Decisões acadêmicas atuais

- integrações do Gestão, IBGE, mapas e rotas são substituídas por contratos, fixtures e regras locais;
- nenhum dado trafega para sistema empresarial;
- visitas novas permanecem somente no estado da interface;
- rotas são sugestões determinísticas em cenário fictício;
- telas existentes não comprovam um fluxo ponta a ponta validado.

## 3. Critérios para considerar o fluxo alinhado

1. A equipe aprova quais etapas precisam compartilhar contexto.
2. Bruna-Elisa relaciona cada etapa a requisitos e critérios de aceitação.
3. Thallya relaciona as etapas aos atores, casos de uso e exceções.
4. Filipe ajusta ou documenta a navegação do protótipo.
5. Marcos relaciona resultados de entrevista e questionário às etapas afetadas.
6. Testes automatizados verificam regras determinísticas e permissões.
7. Testes de uso verificam compreensão sem dados reais.
8. Divergências restantes aparecem como limitações, não como funções concluídas.

## 4. Pendências

- [ ] decidir se município, ponto e representante serão propagados por todo o fluxo;
- [ ] decidir se a rota deve partir das visitas planejadas;
- [ ] definir o significado acadêmico de “acompanhar cobertura” sem persistência;
- [ ] confirmar se o título deve usar “otimização” ou apenas “geração e comparação” de rotas;
- [ ] obter aprovação da equipe e do orientador antes de declarar o fluxo validado.
