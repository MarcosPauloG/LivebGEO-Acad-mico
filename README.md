# Liveb GEO Acadêmico

Protótipo acadêmico desenvolvido para o Projeto Integrador II-B do curso de ADS da PUC Goiás.

## Entrega acadêmica

- [Relatório em PDF](docs/entrega/relatorio-liveb-geo.pdf)
- [Relatório editável em Word](docs/entrega/relatorio-liveb-geo.docx)
- [Aprovação da versão corrigida e do vídeo](docs/entrega/aprovacao.md)
- [Roteiro de apresentação e vídeo](docs/ENTREGA.md)
- [Verificações de interface](docs/equipe/filipe/testes/verificacao.md)
- [Capturas das telas](docs/equipe/filipe/prototipo/telas)

A entrevista e sua transcrição são de 01/10/2026. As regras dos usuários reais estão especificadas no relatório; os perfis fictícios de demonstração foram preservados. Áudio, vídeo e transcrição integral não são versionados.

Este repositório é exclusivamente acadêmico. Ele não representa o ambiente de produção da Liveb, não contém o Liveb OS completo e não deve receber dados reais, credenciais ou configurações internas da empresa.

## Escopo

O protótipo contempla:

- mapa esquemático, territórios e municípios;
- imobiliárias e pontos de interesse fictícios;
- representantes fictícios e áreas de cobertura;
- planejamento de visitas;
- geração e comparação simulada de rotas;
- duplicidades e regiões sem cobertura;
- indicadores acadêmicos de expansão;
- interface simulada de autenticação e permissões com o Gestão.

O recorte territorial definitivo ainda deverá ser validado pela equipe. As alternativas de 10, 11 ou 14 territórios não devem ser tratadas como decisão final enquanto isso não ocorrer. A amostra atual usa seis territórios inteiramente sintéticos.

## Fora do escopo

Não fazem parte deste repositório: CRM completo, propostas e contratos, financeiro e cobrança, atendimento, inbox, inteligência artificial, demais módulos do Liveb OS, código interno do Gestão e infraestrutura de produção.

## Dados e integrações

Todos os usuários, representantes, imobiliárias, visitas e indicadores são fictícios ou sintéticos. Os códigos `SIM-*` não são códigos IBGE. O mapa é esquemático e não representa a cobertura real da empresa.

O Gestão é representado por uma interface TypeScript e um adaptador mock local. Não existe conexão com endpoint, banco, conta ou credencial empresarial. Serviços de mapa, geocodificação e cálculo de rotas também são simulados.

## Execução local

Requer Node.js 22 ou superior.

```bash
npm ci
npm run dev
```

Abra `http://localhost:3000`. Na tela de entrada, use um e-mail terminado em `@example.invalid` e qualquer senha fictícia com ao menos oito caracteres. Nunca use uma senha real.

Verificações:

```bash
npm run check
npm test
npm run build
```

## Colaboração

Cada alteração deve ser feita em uma branch própria e enviada por Pull Request. Consulte [CONTRIBUTING.md](CONTRIBUTING.md), [SECURITY.md](SECURITY.md) e [docs/EQUIPE.md](docs/EQUIPE.md).

## Uso e confidencialidade

Este repositório destina-se à apresentação e avaliação acadêmica. A visibilidade é administrada pelo proprietário; a disponibilidade para consulta não concede licença de uso da marca ou do código.

A identidade visual da Liveb é utilizada apenas no contexto acadêmico autorizado. O projeto não é open source, não deve ser redistribuído nem apresentado como produto oficial ou ambiente operacional da empresa.
