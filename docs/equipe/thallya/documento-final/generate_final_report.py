from pathlib import Path

from pypdf import PdfReader, PdfWriter
from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import cm
from reportlab.platypus import Paragraph, SimpleDocTemplate, Spacer


ROOT = Path(__file__).resolve().parents[4]
REQUIREMENTS = ROOT / "output" / "pdf" / "especificacao-de-requisitos-liveb-geo-academico.pdf"
MODELING = Path(__file__).parent / "RELATORIO-CONSOLIDADO.pdf"
DIVIDER = ROOT / "tmp" / "pdfs" / "divisoria-modelagem.pdf"
OUTPUT = ROOT / "output" / "pdf" / "relatorio-final-liveb-geo-academico.pdf"


def build_divider():
    DIVIDER.parent.mkdir(parents=True, exist_ok=True)
    styles = getSampleStyleSheet()
    title = ParagraphStyle(
        "ModelingTitle",
        parent=styles["Title"],
        fontName="Helvetica-Bold",
        fontSize=28,
        leading=34,
        alignment=TA_CENTER,
        textColor=colors.HexColor("#123047"),
        spaceAfter=14,
    )
    subtitle = ParagraphStyle(
        "ModelingSubtitle",
        parent=styles["BodyText"],
        fontName="Helvetica",
        fontSize=12,
        leading=17,
        alignment=TA_CENTER,
        textColor=colors.HexColor("#45606F"),
    )
    doc = SimpleDocTemplate(
        str(DIVIDER),
        pagesize=A4,
        leftMargin=2 * cm,
        rightMargin=2 * cm,
        topMargin=2 * cm,
        bottomMargin=2 * cm,
    )
    doc.build(
        [
            Spacer(1, 8.2 * cm),
            Paragraph("MODELAGEM E DOCUMENTO", title),
            Paragraph(
                "Atores, casos de uso, diagrama e descricao dos fluxos principais, alternativos e de excecao.",
                subtitle,
            ),
            Spacer(1, 0.5 * cm),
            Paragraph(
                "Secao complementar a especificacao de requisitos anterior.", subtitle
            ),
        ]
    )


def build_final_report():
    if not REQUIREMENTS.exists():
        raise FileNotFoundError(f"PDF de requisitos nao encontrado: {REQUIREMENTS}")
    if not MODELING.exists():
        raise FileNotFoundError(f"PDF de modelagem nao encontrado: {MODELING}")

    build_divider()
    writer = PdfWriter()
    writer.append(PdfReader(str(REQUIREMENTS)))
    writer.append(PdfReader(str(DIVIDER)))

    modeling_reader = PdfReader(str(MODELING))
    for page in modeling_reader.pages[1:]:
        writer.add_page(page)

    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    with OUTPUT.open("wb") as stream:
        writer.write(stream)


if __name__ == "__main__":
    build_final_report()
    print(OUTPUT)
