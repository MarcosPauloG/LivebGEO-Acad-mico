# Entrega do Liveb GEO

A main reúne o protótipo executável, o relatório editável e em PDF, capturas de telas e evidências de verificação. O relatório usa A4, margens superior/esquerda de 3 cm e inferior/direita de 2 cm, corpo 12, espaçamento 1,5, sumário e paginação a partir da parte textual, considerando as folhas pré-textuais.

## Executar para apresentar

```bash
npm ci
npm run check
npm test
npm run build
npm start
```

Abra o endereço local informado pelo servidor. Use `aluno@example.invalid` e uma senha inventada de oito ou mais caracteres. Não use dados de acesso reais. Para a apresentação completa, selecione Coordenação acadêmica.

## Roteiro sugerido para o vídeo

1. Apresentar a equipe e o objetivo: planejamento territorial com dados fictícios.
2. Mostrar o login e explicar que o Gestão é uma interface simulada.
3. Abrir o mapa, selecionar uma área e consultar os territórios.
4. Abrir Pontos de interesse e usar Planejar visita em uma linha.
5. Mostrar o ponto selecionado, escolher prioridade, preencher a data e salvar. Exibir a confirmação e a agenda.
6. Gerar uma sugestão em Comparar rotas, mover uma parada e mostrar o recálculo.
7. Consultar cobertura, possíveis duplicidades e indicadores. Explicar que expansão é uma pontuação pré-definida.
8. Mostrar a matriz de acessos e trocar para Observação para demonstrar o bloqueio de escrita.
9. Encerrar com os limites: dados sintéticos, visitas voláteis, rotas locais e ausência de integração corporativa.

O vídeo de apresentação ainda deve ser gravado pela equipe. Não apresentar a entrevista antiga como gravação desta versão nem afirmar que o entrevistado aprovou novamente as alterações.

## Regras de domínio e demonstração

Administrador vê todas as informações do GEO; supervisor vê sua região e seus representantes; representante vê sua região; funcionários da Liveb acessam somente informações previamente autorizadas. Essas regras estão documentadas como requisitos. Os quatro perfis fictícios do código foram mantidos por decisão do responsável e não implementam isolamento regional de produção.

## Limites conhecidos

- Visitas adicionadas desaparecem ao recarregar, conforme aviso na tela.
- Roteirização usa uma matriz fixa de quatro municípios, não todas as visitas cadastradas.
- A pontuação de expansão é uma fixture, não um cálculo de potencial real.
- Sessão e permissões são simulações no navegador.
- O roteiro automatizado verifica a interface; não equivale a um novo estudo com participantes.

## Reversão

Cada atualização pode ser revertida com um novo commit de reversão, preservando o histórico. Antes de executar `git revert`, confirme o commit de entrega e a ausência de mudanças locais. Não é necessário apagar histórico, usar force push ou restaurar dados corporativos.
