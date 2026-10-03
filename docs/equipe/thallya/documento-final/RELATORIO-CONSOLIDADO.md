# Relatorio Consolidado - Liveb GEO Academico

## 1. Apresentacao e recorte

Este relatorio consolida requisitos e modelagem do prototipo Liveb GEO Academico, desenvolvido para o Projeto Integrador II-B. O sistema representa, exclusivamente com dados sinteticos, uma demonstracao de analise territorial, cobertura, visitas, rotas e indicadores de expansao.

O escopo inclui mapa esquematico, territorios e municipios ficticios, pontos de interesse, representantes, planejamento de visitas, rotas simuladas, verificacao de duplicidades e lacunas, indicadores e uma interface mock de identidade. Ficam excluidos CRM, propostas, contratos, financeiro, atendimento, IA, demais modulos da empresa, infraestrutura, banco de dados e integracoes reais.

## 2. Referencia aos requisitos

Os requisitos, regras de negocio e criterios de aceitacao ja elaborados pela equipe constituem a especificacao de referencia deste relatorio. Esta entrega nao os reproduz nem altera: a modelagem abaixo deve ser vinculada a numeracao e versao aprovadas naquele material.

## 3. Atores

| Ator | Papel no sistema |
|---|---|
| Coordenacao academica | Demonstra e revisa todos os modulos do prototipo. |
| Analise territorial | Consulta a amostra, cobertura, rotas e indicadores. |
| Representacao de campo | Planeja e conclui visitas locais, alem de consultar dados de campo. |
| Observacao | Acompanha dados permitidos sem realizar operacoes de planejamento. |
| Gestao mock local | Retorna sessao e permissoes ficticias por contrato local. |

## 4. Casos de uso e fluxos

### UC-01 - Autenticar no ambiente academico

O usuario escolhe um perfil, informa e-mail com dominio `example.invalid` e senha ficticia valida. O Gestao mock devolve uma sessao local e o sistema abre a primeira tela autorizada. E-mail invalido ou senha curta impedem a autenticacao. Quando o perfil e trocado, a navegacao e recalculada conforme as novas permissoes.

### UC-02 - Consultar a analise territorial

O usuario autorizado consulta painel, mapa, territorios, municipios, pontos, representantes, cobertura e indicadores. Pode pesquisar municipios por nome ou codigo. Buscas curtas ou sem resultado nao alteram a selecao. Tela ou recurso sem permissao permanece indisponivel.

### UC-03 - Planejar e concluir visita

Com permissao de escrita, o usuario informa ponto, representante ativo, data e objetivo para criar uma visita. Depois pode marca-la como concluida. Perfis de leitura so consultam a agenda; dados incompletos ou ausencia de permissao bloqueiam a operacao. As alteracoes existem apenas durante a sessao atual.

### UC-04 - Comparar e sugerir rotas

O usuario autorizado escolhe uma rota de referencia e uma rota comparada para avaliar distancia, duracao e custo. Tambem pode gerar uma sugestao usando matriz local. A ausencia de caminho impede a sugestao sem recorrer a qualquer API externa. A troca do cenario comparado descarta sugestoes geradas anteriormente.

### UC-05 - Consultar matriz de acessos

A Coordenacao academica consulta a matriz demonstrativa de permissoes. Os demais perfis nao acessam este modulo.

## 5. Diagrama de casos de uso

O diagrama editavel em Mermaid relaciona os cinco casos de uso aos quatro perfis academicos e ao Gestao mock local. A fonte esta em `../diagramas/diagrama-casos-de-uso.mmd`.

## 6. Vinculacao com requisitos

Cada caso de uso deve ser associado aos identificadores do documento de requisitos ja aprovado. A associacao deve ser preenchida na revisao final, mantendo a fonte de requisitos como referencia unica e evitando duplicacao de conteudo.

## 7. Conclusao

O conjunto documentado apresenta os atores, casos de uso, diagrama e fluxos da modelagem. O material preserva o limite academico do prototipo: os dados e calculos sao sinteticos, a autenticacao e simulada e nao ha integracao com sistemas ou dados reais da empresa.
