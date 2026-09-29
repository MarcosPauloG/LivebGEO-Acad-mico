# Casos de uso

> _Abaixo estão listados os Casos de Uso (UC) do sistema e suas respectivas exceções ou fluxos alternativos (FA):_

**UC1 - ACESSAR SISTEMA**

- FA1 - E-mail fora do padrão exigido

- FA2 - Senha com menos de 8 caracteres

**UC2 - CONSULTAR MAPA**

- FA1 - Município/Território não encontrado

- FA2 - Falha ao carregar mapa

**UC3 - VISUALIZAR TERRITÓRIOS**

- FA1 - Filtro de território vazio

**UC4 - PLANEJAR VISITAS LOCAIS**

- FA1 - Ponto de interesse não selecionado

- FA2 - Data/Horário conflitante

**UC5 - REGISTRAR VISITAS**

- FA1 - Campos obrigatórios em branco

- FA2 - Perda de conexão durante o registro

**UC6 - GERAR ROTA**

- FA1 - Ponto inacessível / Rota impossível

- FA2 - Timeout no cálculo da rota

**UC7 - COMPARAR ROTAS**

- FA1 - Apenas 1 rota foi gerada

- FA2 - Limite excedido

**UC8 - VISUALIZAR PONTOS DE INTERESSE**

- FA1 - Filtro sem correspondência

**UC9 - ANALISAR INDICADORES**

- FA1 - Dados insuficientes para cálculo

**UC10 - CONSULTAR REPRESENTANTE**

- FA1 - Representante inativo ou sem território

**UC11 - REVISAR LACUNAS**

- FA1 - Inexistência de duplicatas

**UC12 - DEMONSTRAR MATRIZ DE PERMISSÃO**

- FA1 - Perfil sem os privilégios necessários

---

**PENDÊNCIAS:**

- [ ] Relacionamento com Requisitos
