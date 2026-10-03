# Verificação do protótipo

Data: 03/10/2026. Ambiente: versão compilada local, Chromium, janelas de 1440 × 1000 e 390 × 844 pixels.

## Resultados

- Verificação de tipos: aprovada.
- Testes unitários: 14 testes em 7 arquivos aprovados.
- Build de produção: aprovado.
- Auditoria após atualização do Next.js para 16.3.8: zero vulnerabilidades conhecidas no conjunto instalado na data da execução.
- Roteiro de interface: 12 verificações aprovadas, sem erro JavaScript.

| ID | Verificação |
|---|---|
| UI01 | Login fictício e abertura da visão geral |
| UI02 | Seleção territorial por teclado no mapa |
| UI03 | Ponto propagado à visita, prioridade e confirmação visual |
| UI04 | Bloqueio de agendamento duplicado |
| UI05 | Conclusão de visita no estado local |
| UI06 | Sugestão de 80 km e reordenação com recálculo para 118 km |
| UI07 | Cobertura, duplicidades e explicação dos indicadores |
| UI08 | Observação sem escrita e sem matriz de acessos |
| UI09 | Permissões fictícias de representação preservadas |
| UI10 | Recarregamento restaura fixtures e exige seleção de ponto |
| UI11 | Navegação móvel a 390 px sem transbordamento horizontal |
| UI12 | Ausência de erros JavaScript no roteiro |

Os prints estão em `../prototipo/telas` e no anexo do relatório. As verificações são técnicas e automatizadas; não representam nova entrevista, aprovação do participante ou certificação integral de acessibilidade.

## Reproduzir o roteiro

Depois de `npm ci` e `npm run build`, instale o navegador com `npx playwright install chromium`. Em um terminal, execute `npm run start -- --hostname 127.0.0.1 --port 3018`. Em outro, execute `npm run test:ui`. O roteiro usa somente o endereço local e atualiza as capturas e `ui-results.json` com os resultados da execução.
