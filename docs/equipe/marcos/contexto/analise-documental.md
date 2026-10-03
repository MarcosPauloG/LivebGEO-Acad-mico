# Análise documental da pauta do projeto

**Documento analisado:** `PAUTA DA REUNIÃO — PROJETO INTEGRADOR LIVEB GEO.pdf`
**Data indicada no documento:** 06/09/2026
**Situação da fonte:** arquivo externo, não versionado neste repositório
**Finalidade desta análise:** identificar recorte, responsabilidades e pendências sem reproduzir dados empresariais ou transformar propostas em decisões confirmadas
**Data da análise:** 24/09/2026
**Revisão por outro integrante:** pendente

## 1. Inventário do corpus

| ID | Fonte | Tipo e origem | Acesso e guarda | Uso nesta análise |
|---|---|---|---|---|
| DOC-EXT-01 | Pauta do Projeto Integrador Liveb GEO, datada de 06/09/2026 | Documento de preparação de reunião fornecido à equipe acadêmica | Acadêmico interno; original fora do Git; contém identificadores e requer sanitização | Escopo proposto, responsabilidades, fluxo, cronograma e decisões pendentes |
| DOC-REP-01 | [README do projeto](../../../../README.md), [escopo](../../../ESCOPO.md), [arquitetura](../../../ARQUITETURA.md) e [equipe](../../../EQUIPE.md) | Documentação do repositório no commit-base `9325e4c` | Repositório acadêmico privado | Estado documentado após a pauta e limites de segurança |
| DOC-COD-01 | Código e testes em `src/` | Implementação acadêmica do repositório | Repositório acadêmico privado | Funcionalidades verificáveis e lacunas do fluxo |

O plano de ensino citado em [Problema e cenário](problema-e-cenario.md) é fonte complementar de disciplina e não prova requisitos específicos do Liveb GEO.

## 2. Critério de leitura

A pauta é um documento de planejamento de reunião. Expressões como “proposto”, “preliminar”, “deve ser definido” e “decisões obrigatórias” indicam intenção ou assunto a deliberar, não comprovação de que a decisão ocorreu.

Foram usadas seis classificações, isoladas ou combinadas quando um conflito exige mais de uma:

- **declarado na pauta, não verificado:** afirmação do documento externo sem comprovação independente;
- **confirmado no repositório:** possui correspondência verificável nos documentos ou no código acadêmico;
- **proposto:** orientação planejada que ainda requer decisão;
- **pendente:** falta decisão, execução ou evidência;
- **divergente:** fontes, números, termos ou implementação não coincidem;
- **adaptação acadêmica posterior:** o repositório substituiu uma proposta por alternativa sintética e isolada.

## 3. Síntese classificada

| Seção da pauta | Tema | Registro | Classificação nesta análise | Tratamento acadêmico seguro |
|---|---|---|---|---|
| 2 | Projeto e empresa parceira | Liveb GEO é associado à empresa parceira para fins acadêmicos. | Declarado na pauta, não verificado. | Não interpretar como produto oficial, representação jurídica ou sistema de produção. |
| 2 | Título | O título cliente/servidor e “otimização” aparece como preliminar. | Proposto e divergente. | Confirmar com o professor; o algoritmo atual produz sugestão local sem ótimo global garantido. |
| 3 e 5 | Recorte funcional | Territórios, municípios, pontos, representantes, cobertura, visitas, rotas, duplicidades, lacunas e expansão. | Confirmado no [recorte acadêmico](../../../ESCOPO.md). | Manter somente dados sintéticos e regras demonstrativas. |
| 3 e 5 | Gestão | É indicado na seção de estado prévio como fonte definida de identidade, permissões e outros dados. | Declarado na pauta, não verificado; adaptação acadêmica posterior. | Usar somente contrato e adaptador mock local, sem endpoint, conta, token ou código interno. |
| 5 | IBGE, mapas e rotas | São listados como integrações. | Proposto e pendente; não implementado nesta versão. | Manter códigos, mapa, posições, distâncias e rotas fictícios até nova decisão revisada. |
| 6 | Fluxo principal | Sequência de acesso, mapa, seleção territorial, pontos, representante, visitas, rotas, cobertura e expansão. | Proposto e divergente da implementação parcial. As telas existem, mas a seleção não é propagada de ponta a ponta. | Decidir se o fluxo contextual contínuo é requisito; depois alinhar requisitos, casos de uso e protótipo. |
| 7 e 8 | Responsabilidades | Contexto, levantamento, análise documental, entrevista, problema, objetivos, escopo e sustentabilidade são atribuídos à frente de Marcos, enquanto a confirmação das funções ainda aparece entre as decisões. | Confirmado no repositório; aprovação da reunião não verificada. | Usar [EQUIPE.md](../../../EQUIPE.md) para organização e manter revisão coletiva. |
| 4, 8 e 9 | Entrevista e questionário | Há previsão de entrevistado, reserva, questionário e análise de respostas. | Pendente. | Não declarar entrevista ou resposta antes de coleta consentida e sanitizada. |
| 8 | Região e territórios | A pauta registra amostra pendente e quantidades divergentes. | Divergente e pendente. | Os seis territórios atuais são somente fixture demonstrativa. |
| 8 | Funcionalidades operacionais | A pauta pede confirmação do que já funciona. | Pendente. | Usar código e testes do protótipo; não inferir capacidade do sistema empresarial. |
| 3 e 7 | Sustentabilidade | É mencionada uma justificativa inicial, sem método ou resultado no documento. | Proposto e pendente, sem evidência de impacto real. | Usar a [análise de sustentabilidade](sustentabilidade.md) apenas como hipótese mensurável no cenário sintético. |
| 9 | Cronograma | Há datas internas no documento. | Declarado na pauta, não verificado. | Confirmar datas oficiais; não tratar a agenda como prova de conclusão. |
| 4 | Relatório e apresentação | São listados como entregas futuras da equipe. | Pendente e compartilhado. | Consolidar somente resultados realmente produzidos e revisados. |

## 4. Conflitos e adaptações identificados

| ID | Conflito ou adaptação | Estado atual | Evidência adicional necessária |
|---|---|---|---|
| CAD-01 | Integrações reais propostas versus mocks locais | O repositório adota deliberadamente simulação e isolamento. | Decisão formal da equipe mantendo a substituição acadêmica. |
| CAD-02 | Quantidade divergente na pauta versus seis fixtures atuais | Nenhuma quantidade final está aprovada; seis é amostra técnica. | Definição da região e critério de tamanho da amostra. |
| CAD-03 | “Otimização” no título versus sugestão heurística local | O protótipo não garante ótimo global. | Título revisado ou requisito e validação algorítmica adicionais. |
| CAD-04 | Fluxo de dez etapas versus telas desacopladas | Cobertura funcional parcial, sem contexto compartilhado integral. | Decisão de requisito e matriz aprovada entre etapas e telas. |
| CAD-05 | Itens descritos como prontos versus decisões ainda solicitadas | A pauta não é ata e não comprova aprovação ou conclusão. | Ata, registro de decisão ou Pull Request revisado. |

## 5. Resultado para a frente de Marcos

Esta análise sustenta os seguintes entregáveis atuais:

- descrição segura do problema e dos objetivos;
- delimitação do escopo acadêmico;
- roteiro de entrevista e questionário exploratório;
- matriz de evidências e necessidades propostas;
- registro explícito de decisões e pendências;
- análise de sustentabilidade sem alegações de impacto real.

Ela não confirma processo atual, usuários reais, entrevistados, ganhos de rota, economia, redução de emissões, datas oficiais ou conclusão das atividades previstas na pauta.

Também não confirma que o fluxo principal esteja implementado de forma encadeada. Na versão analisada, mapa, representantes, visitas, rotas, cobertura e expansão são visões demonstrativas, mas não compartilham integralmente a mesma seleção de município, ponto e representante.

## 6. Pendências extraídas

- [ ] confirmar o título e a exigência cliente/servidor com o professor;
- [ ] definir região e quantidade final de territórios;
- [ ] definir participantes e instrumento privado de consentimento;
- [ ] confirmar se entrevista e questionário serão instrumentos distintos e quem responderá a cada um;
- [ ] definir o corpus documental autorizado e quem guarda cada fonte externa;
- [ ] confirmar quais funcionalidades acadêmicas serão apresentadas;
- [ ] aprovar formalmente o fluxo compartilhado por requisitos, casos de uso e protótipo;
- [ ] decidir se o protótipo deve propagar município, ponto e representante por todo o fluxo;
- [ ] confirmar armazenamento, padrão de versões, disciplina e datas oficiais;
- [ ] registrar evidência antes de concluir qualquer hipótese de sustentabilidade.
- [ ] confirmar a grafia acadêmica preferida dos integrantes nos documentos finais.

## 7. Limites de propriedade intelectual e segurança

O PDF não deve ser copiado para o repositório sem decisão da equipe. Esta síntese não inclui dados, segredos, configurações, infraestrutura ou outros ativos empresariais restritos. O código e a identidade visual presentes vêm do repositório acadêmico-base; sua procedência e a autorização externa não foram verificadas por esta análise e devem ser confirmadas antes de qualquer distribuição. O sistema empresarial citado na pauta é tratado apenas como referência conceitual.
