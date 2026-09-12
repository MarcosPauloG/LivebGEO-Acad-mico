# Arquitetura do protótipo

## Limite de confiança

O repositório inteiro pertence ao ambiente acadêmico. Ele não importa código de `liveb-os`, não consulta banco empresarial e não conhece endpoints privados.

```text
Interface Next.js
├── dados sintéticos locais
├── regras puras de cobertura e rotas
└── GestaoIdentityGateway
    └── mockGestaoIdentityGateway
```

`GestaoIdentityGateway` é apenas um contrato didático. Uma integração real exigiria outro adaptador, análise de segurança e autorização específica; ela não deve ser implementada neste repositório.

## Pastas

- `src/app`: páginas e estilos;
- `src/components`: navegação, mapa e telas por funcionalidade;
- `src/data`: fixtures totalmente sintéticas;
- `src/lib`: tipos, permissões e cálculos puros;
- `docs/equipe`: entregáveis organizados por responsabilidade;
- `.github`: fluxo de revisão e validação automática.

## Persistência

Não existe banco. A sessão simulada fica em `localStorage`; visitas adicionadas existem apenas no estado React e são descartadas ao recarregar. Isso é intencional para esta fase de protótipo.

## Mapa e rotas

O mapa usa SVG com posições inventadas. As rotas são cenários estáticos e funções determinísticas locais. Não há geocodificação, coordenadas reais ou consumo de APIs externas.
