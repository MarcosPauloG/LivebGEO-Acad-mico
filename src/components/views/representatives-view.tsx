import { Mail, MapPinned, UserRoundCheck } from "lucide-react";
import { municipalities, representatives, territories } from "@/data/academic";
import { territoryById } from "@/lib/labels";
import { Panel, ProgressBar, StatusBadge } from "../shared";

export function RepresentativesView() {
  return (
    <div className="view-stack">
      <Panel
        action={<span className="scope-chip">Identidades fictícias</span>}
        eyebrow="ÁREAS DE COBERTURA"
        title="Representantes do mock"
      >
        <div className="representative-grid">
          {representatives.map((representative) => {
            const expectedMunicipalities = municipalities.filter((municipality) =>
              representative.territoryIds.includes(municipality.territoryId)
            );
            const coverage = expectedMunicipalities.length
              ? Math.round(
                  (representative.municipalityIds.length / expectedMunicipalities.length) * 100
                )
              : 0;
            return (
              <article className="representative-card" key={representative.id}>
                <header>
                  <span className="avatar-icon"><UserRoundCheck size={22} /></span>
                  <span>
                    <strong>{representative.name}</strong>
                    <small><Mail size={13} /> {representative.email}</small>
                  </span>
                  <StatusBadge
                    label={representative.status === "active" ? "Ativo no mock" : "Planejado"}
                    tone={representative.status === "active" ? "success" : "neutral"}
                  />
                </header>
                <div className="coverage-copy">
                  <span><MapPinned size={15} /> Cobertura atribuída</span>
                  <strong>{coverage}%</strong>
                </div>
                <ProgressBar value={coverage} />
                <div className="tag-list tag-list--territories">
                  {representative.territoryIds.map((id) => {
                    const territory = territoryById(id);
                    return (
                      <span key={id}>
                        <i style={{ background: territory?.color }} />
                        {territory?.code} · {territory?.name}
                      </span>
                    );
                  })}
                </div>
                <small className="card-footnote">
                  {representative.municipalityIds.length} de {expectedMunicipalities.length} municípios-modelo atribuídos
                </small>
              </article>
            );
          })}
        </div>
      </Panel>

      <div className="info-callout">
        <UserRoundCheck size={19} />
        <span>Metas e quantidades são apenas exemplos acadêmicos. Nenhum nome, e-mail ou vínculo corresponde a uma pessoa real.</span>
      </div>
    </div>
  );
}
