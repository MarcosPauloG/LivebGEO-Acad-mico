# Roteiro de entrevistas

**Status:** roteiro-base preparado; aplicação condicionada aos pré-requisitos da seção 3
**Entrevistas realizadas nesta versão:** nenhuma

## 1. Objetivo

Investigar como participantes compreendem cobertura territorial, pontos de interesse, planejamento de visitas, comparação de rotas e permissões. As entrevistas devem validar ou rejeitar hipóteses do projeto, sem buscar informações confidenciais sobre a operação da empresa.

## 2. Participantes possíveis

Os participantes ainda não foram confirmados. Para preservar o caráter acadêmico, podem ser convidados usuários de teste que representem genericamente os seguintes pontos de vista:

- coordenação ou planejamento;
- análise territorial;
- atividade de campo;
- observação ou consulta.

O papel genérico deve ser suficiente para a análise. Nome, contato, empresa, cargo específico e qualquer identificador pessoal não devem ser registrados no repositório. Modalidade, duração e papel genérico só devem ser mantidos quando necessários, pois a combinação desses dados pode reidentificar alguém em uma amostra pequena.

## 3. Abertura e consentimento

Texto sugerido:

> Esta conversa faz parte de um projeto acadêmico sobre um protótipo geográfico. A participação é voluntária. Não cite clientes, pessoas, sistemas, métricas, territórios, processos ou exemplos reais da empresa. Não informe nomes, contatos, identificadores diretos, outros dados pessoais desnecessários nem detalhes confidenciais. As respostas autorizadas serão resumidas, minimizadas e pseudonimizadas por um código. Você pode deixar de responder qualquer pergunta ou encerrar a conversa a qualquer momento. Autoriza a criação de uma síntese pseudonimizada para fins acadêmicos?

Se a resposta for "não", encerrar a coleta e não criar síntese. O código reduz a exposição, mas não garante anonimato. Nenhuma tabela que relacione código e identidade pode ser armazenada no Git.

Antes da primeira coleta, a equipe e o orientador devem definir, fora do Git, quem guarda a comprovação do consentimento, em qual local protegido, por quanto tempo e como atender a retirada do consentimento. O repositório recebe apenas a confirmação `sim`, sem formulário, assinatura ou identidade.

O texto de abertura é apenas um núcleo e não está pronto para aplicação isolada. Antes da entrevista, o instrumento privado de consentimento deve informar ao participante: responsável acadêmico e contato; finalidade da coleta; quem terá acesso à síntese; prazo de retenção; e canal para retirada do consentimento. Não iniciar a coleta enquanto esses campos não estiverem definidos.

Registrar somente quando necessário:

- código pseudônimo, como `ENT-01`;
- papel genérico representado, somente se necessário;
- mês e ano, somente se necessário;
- confirmação de consentimento: sim;
- faixa aproximada de duração, somente se necessária;
- modalidade, somente se necessária.

Nesta fase, não gravar áudio ou vídeo. Qualquer proposta futura de gravação exige novo protocolo aprovado com o orientador, incluindo finalidade, acesso, armazenamento protegido, retenção, descarte e retirada do consentimento; o arquivo bruto nunca deve entrar no Git.

Se o participante começar a revelar conteúdo real, o entrevistador deve interromper e redirecionar a conversa para o protótipo e seus dados fictícios. A revelação incidental não deve ser transcrita nem sintetizada e deve ser eliminada das anotações de trabalho.

## 4. Perguntas

### Contexto e entendimento

Responda somente sobre o protótipo e os dados fictícios apresentados.

1. Quando você pensa em planejamento territorial, quais informações precisa visualizar primeiro?
2. O que torna fácil ou difícil compreender a divisão de uma região em territórios?
3. Como você perceberia que um município ou uma área está sem cobertura?

### Pontos, cobertura e duplicidades

Responda somente sobre o protótipo e os dados fictícios apresentados.

4. Que informação ajuda a decidir se um ponto de interesse merece uma visita?
5. Como uma possível duplicidade deveria ser apresentada para chamar atenção sem confundir?
6. Que dados mínimos são necessários para entender a cobertura de um representante?
7. Em que situações dois pontos parecidos deveriam ou não ser tratados como duplicados?

### Visitas e rotas

Responda somente sobre o protótipo e os dados fictícios apresentados.

8. Quais informações você consideraria ao planejar uma sequência de visitas?
9. O que precisa ser comparado entre uma rota manual e uma rota sugerida?
10. Distância, duração e quantidade de paradas são suficientes para a comparação? O que falta?
11. Como o protótipo deveria explicar que uma rota é apenas uma sugestão simulada e não uma rota ótima garantida?

### Expansão e decisão

Responda somente sobre o protótipo e os dados fictícios apresentados.

12. Quais indicadores ajudam a avaliar se um território merece análise de expansão?
13. Como dados ausentes ou ainda não confirmados deveriam aparecer na tela?
14. Que evidência faria você confiar mais em um indicador ou alerta do protótipo?

### Acesso e segurança

Responda somente sobre o protótipo e os dados fictícios apresentados.

15. Que informações cada perfil deveria poder consultar ou alterar?
16. Existe alguma informação que não deveria aparecer nem mesmo em uma demonstração acadêmica?
17. A indicação de que todos os dados são fictícios está clara? Onde ela deveria ser reforçada?

### Encerramento

Responda somente sobre o protótipo e os dados fictícios apresentados.

18. Qual tarefa do protótipo parece mais útil ou mais difícil de entender?
19. O que você mudaria primeiro na navegação ou na apresentação das informações?
20. Há alguma pergunta importante que não foi feita?

## 5. Tarefas opcionais de validação

Após as perguntas, o participante pode executar tarefas com os dados fictícios:

Durante as tarefas, comentar somente o protótipo e os dados fictícios apresentados.

1. localizar um território e identificar seus municípios;
2. encontrar uma região marcada como sem cobertura;
3. identificar um possível conflito ou duplicidade;
4. planejar uma visita fictícia;
5. gerar uma sugestão de rota e compará-la com a ordem original;
6. verificar o que muda ao selecionar outro perfil simulado.

Registrar somente a faixa de tempo necessária, conclusão, dúvida observada e comentário sanitizado. Nesta fase, não capturar tela, voz, imagem ou identidade.

## 6. Tratamento posterior

1. Descartar a coleta quando não houver consentimento para a síntese.
2. Usar o código `ENT-XX` sem manter no Git uma tabela que o ligue à identidade.
3. Parafrasear os achados; evitar transcrição literal desnecessária.
4. Remover nomes, locais precisos, contatos e referências empresariais.
5. Separar observação, interpretação e hipótese do pesquisador.
6. Relacionar cada achado a uma necessidade ou pendência.
7. Solicitar revisão de outro integrante antes do Pull Request.
