# Segurança e proteção de informações

Este repositório aceita somente código e dados apropriados para o projeto acadêmico. O fato de ser privado não autoriza o armazenamento de informações confidenciais.

## Conteúdo proibido

Nunca versionar:

- senhas, tokens, chaves de API ou certificados;
- cookies, sessões ou credenciais de banco de dados;
- URLs privadas, endereços internos ou detalhes de infraestrutura;
- arquivos `.env`;
- bancos, dumps, backups, logs ou arquivos de produção;
- dados reais de clientes, imobiliárias, representantes ou funcionários;
- código empresarial fora do escopo acadêmico;
- documentos internos sem autorização e sanitização prévias.

## Dados fictícios

Use nomes genéricos, identificadores sintéticos e endereços claramente fictícios. Para e-mails, use domínios reservados, como `example.invalid`.

A autenticação e as permissões do Gestão devem ser representadas por mocks ou contratos de interface. Não utilize contas reais nem reproduza respostas de produção.

## Configuração local

Valores locais devem permanecer em `.env.local`, ignorado pelo Git. O `.env.example` deve conter somente nomes e placeholders não sensíveis.

Se um segredo for enviado por engano, não o publique em issue: avise a coordenação, revogue a credencial e coordene a remoção do histórico.
