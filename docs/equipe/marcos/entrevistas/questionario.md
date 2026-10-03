# Questionário estruturado

**Status:** instrumento proposto, ainda não aprovado para aplicação
**Respostas recebidas nesta versão:** nenhuma
**Relação com a entrevista:** proposto como instrumento complementar ao [roteiro qualitativo](roteiro.md); a decisão de usar instrumentos distintos permanece pendente

## 1. Objetivo

Coletar respostas comparáveis sobre compreensão, utilidade percebida e limites do protótipo usando exclusivamente telas e dados fictícios. O questionário não deve solicitar informações sobre a operação real da empresa.

## 2. Pré-requisitos de aplicação

- definir participantes, finalidade, responsável acadêmico e canal de retirada do consentimento;
- informar quem terá acesso às respostas, o prazo de retenção e a data-limite para retirada;
- apresentar o aviso de dados fictícios e a política de minimização do roteiro;
- obter consentimento antes de exibir qualquer pergunta;
- aplicar a mesma versão e o mesmo cenário sintético a todos os participantes;
- não coletar nome, e-mail, empresa, cargo, localização ou identificador de dispositivo;
- não usar formulário externo sem revisão de acesso, retenção e exportação de dados.

Antes da coleta, adotar um dos modelos aprovados com o orientador:

- **retirada possível até a agregação:** entregar ao participante um código aleatório de resposta, sem tabela de identidade, e aceitar pedido de exclusão por esse código até a data informada;
- **resposta anônima após o envio:** informar claramente que, depois de removidos os elementos que permitiriam localizar uma resposta, a retirada individual não será tecnicamente possível.

Se não houver consentimento, nenhuma resposta deve ser registrada. Formulários brutos, códigos individuais e identificadores não entram no Git; somente resultados agregados e sanitizados podem ser versionados.

## 3. Escala

Para Q01 a Q13, usar:

1. discordo totalmente;
2. discordo parcialmente;
3. neutro;
4. concordo parcialmente;
5. concordo totalmente;
6. não consegui avaliar;
7. não se aplica.

## 4. Perguntas fechadas

| ID | Afirmação | Necessidade ou hipótese relacionada |
|---|---|---|
| Q01 | Consigo localizar um território e seus municípios no mapa. | N-F01, H-01 |
| Q02 | A diferença entre área coberta e região sem cobertura está clara. | N-F03, N-F04, H-02 |
| Q03 | A sinalização de uma possível duplicidade é compreensível. | N-F04, H-02 |
| Q04 | Consigo consultar os dados fictícios de um ponto de interesse. | N-F02 |
| Q05 | Consigo identificar o representante fictício e sua cobertura. | N-F03 |
| Q06 | O fluxo demonstrativo de planejamento de visita é compreensível. | N-F05 |
| Q07 | Consigo comparar a ordem-base e a sugestão de rota. | N-F06, H-03 |
| Q08 | Está claro que a sugestão de rota não garante a solução ótima. | N-F06, H-03 |
| Q09 | Os indicadores sintéticos de expansão são compreensíveis. | N-F07, H-05 |
| Q10 | As diferenças entre os quatro perfis simulados estão claras. | N-F08, H-04 |
| Q11 | Está claro que o protótipo e todos os seus dados são acadêmicos e fictícios. | N-F09, H-06 |
| Q12 | As métricas sintéticas ajudam a discutir uma contribuição potencial de sustentabilidade. | H-07 |
| Q13 | Está claro que nenhuma métrica apresentada comprova impacto real na empresa. | H-07 |

## 5. Perguntas abertas

Responder somente sobre o protótipo e o cenário fictício.

- Q14. Qual foi a tarefa mais difícil de compreender? Por quê?
- Q15. Qual informação ou aviso deveria ficar mais claro?
- Q16. Que melhoria faria mais diferença para executar o fluxo demonstrativo?
- Q17. Que limitação do protótipo precisa ser reforçada na apresentação?

## 6. Plano de análise

- contar apenas respostas válidas; excluir “não consegui avaliar” e “não se aplica” da mediana e apresentá-las separadamente;
- apresentar distribuição por alternativa e mediana, nunca média isolada;
- não criar recortes por perfil quando a amostra pequena puder reidentificar alguém;
- para menos de cinco respostas válidas, evitar percentuais e apresentar contagens agregadas com ressalva;
- com menos de cinco respostas válidas em uma hipótese, não comparar com limiar percentual: classificá-la como inconclusiva;
- sanitizar respostas abertas antes de qualquer registro no repositório;
- relacionar cada achado a uma necessidade, hipótese ou pendência;
- registrar divergências e resultados inconclusivos.

Os resultados devem ser incluídos somente em [Análise das respostas](analise-das-respostas.md), nunca neste instrumento.
