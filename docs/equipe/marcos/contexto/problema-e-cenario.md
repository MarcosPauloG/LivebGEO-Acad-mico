# Problema e cenário acadêmico

**Responsável:** Marcos
**Status:** versão inicial para revisão da equipe
**Natureza:** cenário acadêmico e demonstrativo

## 1. Declaração de contexto

O Liveb GEO Acadêmico é um protótipo privado para estudar como informações geográficas podem apoiar o planejamento de atividades de campo. O projeto usa territórios, municípios, pontos de interesse, representantes, visitas, rotas e indicadores inteiramente fictícios ou sintéticos.

Este texto não descreve a operação real da Liveb e não deve ser interpretado como diagnóstico, especificação de produção ou confirmação de processos internos da empresa.

## 2. Problema acadêmico

Em um cenário fictício com atuação territorial, informações sobre áreas de cobertura, pontos de interesse, responsáveis e visitas podem ficar dispersas em diferentes representações. Nesse cenário hipotético, isso pode dificultar observar, em uma única visão:

- quais municípios pertencem a cada território;
- onde existem pontos de interesse;
- quais áreas possuem ou não cobertura simulada;
- onde podem existir duplicidades;
- quais visitas devem ser priorizadas;
- como duas sequências de rota se comparam;
- quais territórios apresentam indicadores que justificam análise de expansão.

O problema de pesquisa não é provar que essas dificuldades existem na Liveb. O problema é avaliar se um protótipo geográfico, construído com dados fictícios, consegue representar essas decisões de forma compreensível e segura.

## 3. Questão norteadora

Como um protótipo acadêmico de visualização territorial pode apoiar a análise de cobertura, o planejamento de visitas e a comparação de rotas sem utilizar dados pessoais, informações empresariais confidenciais ou integrações de produção?

## 4. Objetivo geral

Demonstrar, por meio de um protótipo navegável e isolado, como dados geográficos sintéticos e regras transparentes podem organizar a análise territorial e apoiar decisões de planejamento de campo.

## 5. Objetivos específicos

1. Representar territórios e municípios em um mapa esquemático.
2. Exibir pontos de interesse e imobiliárias fictícias.
3. Relacionar representantes fictícios às respectivas áreas de cobertura.
4. Permitir o planejamento demonstrativo de visitas.
5. Gerar e comparar sequências de rota com métricas simuladas.
6. Destacar duplicidades e regiões sem cobertura.
7. Apresentar indicadores sintéticos para análise de expansão.
8. Demonstrar autenticação e permissões por meio de um contrato local do Gestão, sem integração real.
9. Avaliar, em cenários sintéticos, possíveis contribuições de sustentabilidade sem extrapolar resultados para a operação real.

## 6. Perfis representados no protótipo

Os perfis abaixo são papéis didáticos existentes no protótipo, e não cargos ou pessoas reais:

- **Coordenação acadêmica:** consulta todas as visões e demonstra a matriz de permissões.
- **Análise territorial:** analisa mapa, cobertura, rotas e indicadores, sem administrar acessos.
- **Representação de campo:** consulta áreas e pontos e registra visitas apenas no estado local da demonstração.
- **Observação:** acompanha as informações em modo predominantemente de leitura.

## 7. Delimitação

### Incluído

- mapa esquemático, territórios e municípios sintéticos;
- pontos de interesse fictícios;
- representantes e cobertura demonstrativos;
- planejamento volátil de visitas;
- comparação determinística de rotas;
- duplicidades, lacunas e indicadores acadêmicos;
- interface simulada de identidade e permissões.

### Excluído

- CRM, propostas, contratos, financeiro, cobrança, atendimento e inbox;
- inteligência artificial;
- demais módulos do Liveb OS;
- código interno completo do Gestão;
- banco, infraestrutura, endpoints e configurações de produção;
- dados pessoais, comerciais ou operacionais reais.

## 8. Enquadramento cliente-servidor

Segundo o plano de ensino **Desenvolvimento de Software Cliente-Servidor** (Pontifícia Universidade Católica de Goiás, Pró-Reitoria de Graduação, CEAD, seções 03 a 05; documento sem autoria individual e sem data de edição visíveis), a disciplina aborda redes, TCP/IP, interação cliente-servidor e implementação com sockets Java. Essa é uma fonte acadêmica externa ao repositório: pode fundamentar a discussão técnica, mas não estabelece requisitos específicos para o Liveb GEO.

Na versão atual, o projeto é um protótipo Next.js com dados locais e um adaptador mock. Ele não implementa comunicação com servidor empresarial, sockets Java, banco remoto ou autenticação real. Caso outra atividade exija uma aplicação cliente-servidor executável, essa exigência deverá ser confirmada separadamente antes de alterar a arquitetura acadêmica.

## 9. Critérios de sucesso desta etapa

- a equipe compreende o problema sem depender de informação confidencial;
- fatos, hipóteses e decisões aparecem claramente separados;
- os fluxos principais podem ser demonstrados com dados sintéticos;
- participantes de validação conseguem executar tarefas previamente definidas;
- nenhuma conclusão sobre usuários reais é apresentada antes das entrevistas;
- alegações de sustentabilidade usam métricas sintéticas e explicitam suas limitações;
- qualquer mudança de escopo passa por Pull Request e revisão da equipe.

## 10. Fontes do repositório

- [README do projeto](../../../../README.md);
- [Recorte acadêmico](../../../ESCOPO.md);
- [Arquitetura do protótipo](../../../ARQUITETURA.md);
- [Política de dados sintéticos](../../../DADOS-SINTETICOS.md);
- [Análise documental da pauta](analise-documental.md);
- [Sustentabilidade acadêmica](sustentabilidade.md);
- protótipo acadêmico existente neste repositório.

O plano de ensino citado na seção 8 não está versionado neste repositório e sua referência bibliográfica ainda está incompleta. Se for usado no trabalho final, autoria institucional, ano ou indicação de ausência de data e localização devem ser confirmados e registrados nas referências ou nos anexos.
