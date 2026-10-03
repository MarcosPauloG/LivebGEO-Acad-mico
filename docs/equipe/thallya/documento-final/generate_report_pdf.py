from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import cm
from reportlab.platypus import (
    PageBreak,
    Paragraph,
    KeepTogether,
    SimpleDocTemplate,
    Spacer,
    Table,
    TableStyle,
)


ROOT = Path(__file__).parent
OUTPUT = ROOT / "RELATORIO-CONSOLIDADO.pdf"


def paragraph(text, style):
    return Paragraph(text, style)


def build_pdf():
    doc = SimpleDocTemplate(
        str(OUTPUT),
        pagesize=A4,
        rightMargin=1.7 * cm,
        leftMargin=1.7 * cm,
        topMargin=1.6 * cm,
        bottomMargin=1.6 * cm,
        title="Relatorio Consolidado - Liveb GEO Academico",
        author="Equipe do Projeto Integrador II-B",
    )
    styles = getSampleStyleSheet()
    title = ParagraphStyle(
        "TitleAcademic",
        parent=styles["Title"],
        fontName="Helvetica-Bold",
        fontSize=23,
        leading=28,
        textColor=colors.HexColor("#123047"),
        alignment=TA_CENTER,
        spaceAfter=12,
    )
    subtitle = ParagraphStyle(
        "SubtitleAcademic",
        parent=styles["BodyText"],
        fontName="Helvetica",
        fontSize=11,
        leading=16,
        textColor=colors.HexColor("#45606f"),
        alignment=TA_CENTER,
    )
    heading = ParagraphStyle(
        "HeadingAcademic",
        parent=styles["Heading2"],
        fontName="Helvetica-Bold",
        fontSize=14,
        leading=18,
        textColor=colors.HexColor("#123047"),
        spaceBefore=12,
        spaceAfter=7,
    )
    body = ParagraphStyle(
        "BodyAcademic",
        parent=styles["BodyText"],
        fontName="Helvetica",
        fontSize=9.2,
        leading=13.2,
        alignment=TA_LEFT,
        textColor=colors.HexColor("#24333d"),
        spaceAfter=6,
    )
    small = ParagraphStyle(
        "SmallAcademic", parent=body, fontSize=8.2, leading=10.8, spaceAfter=0
    )

    story = [
        Spacer(1, 3.4 * cm),
        paragraph("Liveb GEO Academico", title),
        paragraph("Relatorio consolidado de requisitos e modelagem", subtitle),
        Spacer(1, 0.9 * cm),
        paragraph("Projeto Integrador II-B - Analise e Desenvolvimento de Sistemas", subtitle),
        Spacer(1, 6.0 * cm),
        paragraph("Documento academico. Dados, perfis, rotas e indicadores sao ficticios e locais.", subtitle),
        PageBreak(),
        paragraph("1. Apresentacao e recorte", heading),
        paragraph(
            "Este relatorio consolida requisitos e modelagem do prototipo Liveb GEO Academico. "
            "O sistema demonstra analise territorial, cobertura, planejamento de visitas, rotas e indicadores de expansao, "
            "sempre com dados sinteticos.",
            body,
        ),
        paragraph(
            "O escopo inclui mapa esquematico, territorios e municipios ficticios, pontos de interesse, representantes, "
            "planejamento de visitas, cenarios de rota, verificacao de duplicidades e lacunas, indicadores e interface mock de identidade. "
            "Ficam fora do escopo CRM, contratos, financeiro, atendimento, IA, modulos corporativos, banco de dados e integracoes reais.",
            body,
        ),
        paragraph("2. Referencia aos requisitos", heading),
        paragraph(
            "Os requisitos, regras de negocio e criterios de aceitacao ja elaborados pela equipe constituem a especificacao de referencia deste relatorio. "
            "Esta entrega nao os reproduz nem altera: a modelagem abaixo deve ser vinculada a numeracao e versao aprovadas naquele material.",
            body,
        ),
        paragraph("3. Atores", heading),
    ]
    story.extend(
        [
            PageBreak(),
        ]
    )
    actors = [
        ["Ator", "Papel"],
        ["Coordenacao academica", "Demonstra e revisa todos os modulos."],
        ["Analise territorial", "Consulta a amostra, cobertura, rotas e indicadores."],
        ["Representacao de campo", "Planeja e conclui visitas locais."],
        ["Observacao", "Acompanha dados permitidos sem alterar planejamento."],
        ["Gestao mock local", "Retorna sessao e permissoes ficticias por contrato local."],
    ]
    story.append(make_table(actors, [4.4 * cm, 11.7 * cm], small))
    story.extend(
        [
            paragraph("4. Diagrama de casos de uso", heading),
            diagram_table(small),
            paragraph(
                "A fonte editavel do diagrama esta em `docs/equipe/thallya/diagramas/diagrama-casos-de-uso.mmd`.",
                small,
            ),
            paragraph("5. Casos de uso e fluxos", heading),
        ]
    )
    use_cases = [
        ("UC-01 - Autenticar no ambiente academico", "Selecionar perfil, informar e-mail `@example.invalid` e senha ficticia valida, receber sessao local e acessar a primeira tela autorizada. E-mail invalido ou senha curta impedem a sessao; ao trocar perfil, a navegacao e atualizada."),
        ("UC-02 - Consultar analise territorial", "Consultar painel, mapa, territorios, municipios, pontos, representantes, cobertura e indicadores; pesquisar municipio por nome ou codigo. Busca curta ou sem resultado nao altera a selecao. Sem permissao, a tela nao fica disponivel."),
        ("UC-03 - Planejar e concluir visita", "Selecionar ponto, representante ativo, data e objetivo para adicionar visita local; depois, concluir a visita. Perfil de leitura nao altera dados; campos incompletos impedem a inclusao; recarregar a pagina descarta as alteracoes."),
        ("UC-04 - Comparar e sugerir rotas", "Selecionar cenarios, consultar diferencas de distancia, duracao e custo e gerar sugestao baseada na matriz local. Sem permissao, os controles ficam bloqueados; sem caminho na matriz, nao ha sugestao nem chamada externa."),
        ("UC-05 - Consultar matriz de acessos", "A Coordenacao academica consulta permissoes demonstrativas. Os demais perfis nao acessam esse modulo."),
    ]
    for case, description in use_cases:
        story.append(paragraph(case, ParagraphStyle("Case", parent=body, fontName="Helvetica-Bold", textColor=colors.HexColor("#123047"), spaceBefore=5)))
        story.append(paragraph(description, body))

    story.append(
        KeepTogether(
            [
                paragraph("6. Vinculacao com requisitos", heading),
                paragraph(
                    "Cada caso de uso deve ser associado aos identificadores do documento de requisitos ja aprovado. "
                    "A associacao deve ser preenchida na revisao final, mantendo a fonte de requisitos como referencia unica e evitando duplicacao de conteudo.",
                    body,
                ),
            paragraph("7. Conclusao", heading),
            paragraph(
                "O relatorio apresenta os atores, casos de uso, diagrama e fluxos da modelagem. "
                "Todo o material respeita o recorte academico: dados e calculos sinteticos, autenticacao simulada e ausencia de integracao real.",
                body,
            ),
            ]
        )
    )
    doc.build(story, onFirstPage=footer, onLaterPages=footer)


def make_table(rows, widths, style):
    data = [[paragraph(str(cell), style) for cell in row] for row in rows]
    table = Table(data, colWidths=widths, repeatRows=1, hAlign="LEFT")
    table.setStyle(
        TableStyle(
            [
                ("BACKGROUND", (0, 0), (-1, 0), colors.HexColor("#123047")),
                ("TEXTCOLOR", (0, 0), (-1, 0), colors.white),
                ("FONTNAME", (0, 0), (-1, 0), "Helvetica-Bold"),
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("GRID", (0, 0), (-1, -1), 0.35, colors.HexColor("#B8C6CC")),
                ("ROWBACKGROUNDS", (0, 1), (-1, -1), [colors.white, colors.HexColor("#F2F6F7")]),
                ("LEFTPADDING", (0, 0), (-1, -1), 6),
                ("RIGHTPADDING", (0, 0), (-1, -1), 6),
                ("TOPPADDING", (0, 0), (-1, -1), 5),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 5),
            ]
        )
    )
    return table


def diagram_table(style):
    nodes = [
        ["Atores", "Casos de uso"],
        ["Coordenacao academica\nAnalise territorial\nRepresentacao de campo\nObservacao\nGestao mock local", "UC-01 Autenticar\nUC-02 Consultar analise territorial\nUC-03 Planejar e concluir visita\nUC-04 Comparar e sugerir rotas\nUC-05 Consultar matriz de acessos"],
    ]
    data = [[paragraph(cell.replace("\n", "<br/>"), style) for cell in row] for row in nodes]
    table = Table(data, colWidths=[7.8 * cm, 8.3 * cm], hAlign="LEFT")
    table.setStyle(
        TableStyle(
            [
                ("BACKGROUND", (0, 0), (-1, 0), colors.HexColor("#2E7D6D")),
                ("TEXTCOLOR", (0, 0), (-1, 0), colors.white),
                ("GRID", (0, 0), (-1, -1), 0.6, colors.HexColor("#7AA89D")),
                ("BACKGROUND", (0, 1), (-1, -1), colors.HexColor("#EEF7F4")),
                ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
                ("LEFTPADDING", (0, 0), (-1, -1), 10),
                ("RIGHTPADDING", (0, 0), (-1, -1), 10),
                ("TOPPADDING", (0, 0), (-1, -1), 8),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 8),
            ]
        )
    )
    return table


def footer(canvas, doc):
    canvas.saveState()
    canvas.setStrokeColor(colors.HexColor("#B8C6CC"))
    canvas.line(doc.leftMargin, 1.2 * cm, A4[0] - doc.rightMargin, 1.2 * cm)
    canvas.setFont("Helvetica", 8)
    canvas.setFillColor(colors.HexColor("#45606F"))
    canvas.drawString(doc.leftMargin, 0.78 * cm, "Liveb GEO Academico - documento de uso exclusivamente academico")
    canvas.drawRightString(A4[0] - doc.rightMargin, 0.78 * cm, f"Pagina {doc.page}")
    canvas.restoreState()


if __name__ == "__main__":
    build_pdf()
