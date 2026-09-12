# Como contribuir

## Fluxo de trabalho

1. Atualize sua cópia local a partir de `main`.
2. Crie uma branch pequena e relacionada a uma única atividade.
3. Faça alterações somente dentro do escopo acadêmico.
4. Execute as verificações disponíveis.
5. Abra um Pull Request descrevendo a mudança e a validação.
6. Aguarde ao menos uma revisão antes de integrar em `main`.

Não faça commits diretos nem force push em `main`.

## Nomes de branches

Formato recomendado: `tipo/responsavel-descricao-curta`.

Exemplos:

```text
docs/marcos-contexto-entrevista
docs/bruna-elisa-requisitos
docs/thallya-casos-de-uso
feat/filipe-navegacao-prototipo
```

Tipos sugeridos: `feat`, `fix`, `docs`, `test`, `refactor` e `chore`.

## Commits

Use mensagens objetivas, por exemplo:

```text
docs: registrar requisitos funcionais do mapa
feat: adicionar comparação simulada de rotas
test: validar fluxo de planejamento de visitas
```

## Checklist do Pull Request

- [ ] A alteração pertence ao escopo acadêmico.
- [ ] Não inclui dados reais de clientes, funcionários ou parceiros.
- [ ] Não contém tokens, senhas, chaves, cookies ou URLs privadas.
- [ ] Não inclui `.env`, logs, bancos, backups ou artefatos de produção.
- [ ] Integrações externas estão simuladas ou documentadas.
- [ ] Dados de demonstração são claramente fictícios.
- [ ] Testes e verificações aplicáveis foram executados.
- [ ] A documentação foi atualizada quando necessário.

As pastas individuais em `docs/equipe/` organizam entregáveis acadêmicos; o código permanece compartilhado em `src/`.
