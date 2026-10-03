# Casos de uso

## UC-01 - Autenticar no ambiente academico

- Atores: Coordenacao academica, Analise territorial, Representacao de campo, Observacao e Gestao mock local.
- Vinculo: utilizar a numeracao ja aprovada no documento de requisitos da equipe.
- Pre-condicao: usuario acessa a tela inicial do prototipo.
- Fluxo principal: selecionar perfil, informar e-mail ficticio e senha ficticia valida, enviar formulario, receber sessao local e acessar a primeira tela permitida.
- Alternativos: perfil sem acesso a tela inicial selecionada e direcionado para a primeira tela permitida; usuario troca o perfil durante a sessao e a navegacao e atualizada.
- Excecoes: e-mail fora de `@example.invalid` ou senha curta impedem a sessao e exibem mensagem de validacao.

## UC-02 - Consultar a analise territorial

- Atores: todos os perfis autorizados.
- Vinculo: utilizar a numeracao ja aprovada no documento de requisitos da equipe.
- Pre-condicao: sessao local ativa e permissao de leitura correspondente.
- Fluxo principal: abrir o painel ou menu de analise, consultar mapa, territorios, municipios, pontos e representantes; usar a busca para localizar um municipio; consultar lacunas, duplicidades e indicadores.
- Alternativos: busca com menos de dois caracteres nao apresenta resultados; busca sem correspondencia mantem a tela atual sem selecao.
- Excecoes: perfil sem permissao nao visualiza a tela no menu nem consegue abri-la.

## UC-03 - Planejar e concluir visita

- Atores: Coordenacao academica e Representacao de campo.
- Vinculo: utilizar a numeracao ja aprovada no documento de requisitos da equipe.
- Pre-condicao: sessao com `visits:write` e pelo menos um representante ativo cadastrado na amostra.
- Fluxo principal: abrir planejamento, selecionar ponto e representante, informar data e objetivo, adicionar visita ao estado local e marcar a visita como concluida quando necessario.
- Alternativos: usuario apenas consulta a agenda com perfil de leitura; visita ja concluida nao oferece nova acao de conclusao.
- Excecoes: campos obrigatorios vazios, perfil sem escrita ou representante indisponivel impedem a inclusao; a alteracao se perde ao recarregar por ser propositalmente volatil.

## UC-04 - Comparar e sugerir rotas

- Atores: Coordenacao academica, Analise territorial e Representacao de campo.
- Vinculo: utilizar a numeracao ja aprovada no documento de requisitos da equipe.
- Pre-condicao: sessao com `routes:compare`.
- Fluxo principal: selecionar rota de referencia e rota comparada, visualizar diferencas de distancia, duracao e custo; opcionalmente gerar sugestao local e comparar seus resultados.
- Alternativos: usuario muda a rota comparada, descartando uma sugestao anteriormente gerada.
- Excecoes: perfil sem permissao nao pode alterar seletores nem gerar sugestao; ausencia de caminho na matriz local cancela a geracao sem consultar servico externo.

## UC-05 - Consultar matriz de acessos

- Atores: Coordenacao academica.
- Vinculo: utilizar a numeracao ja aprovada no documento de requisitos da equipe.
- Pre-condicao: sessao de coordenacao.
- Fluxo principal: abrir Acessos do Gestao e consultar as permissoes demonstrativas de cada perfil.
- Excecoes: outros perfis nao possuem acesso a esta tela.
