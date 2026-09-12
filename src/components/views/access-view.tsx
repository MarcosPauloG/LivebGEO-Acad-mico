import { Check, DatabaseZap, LockKeyhole, ShieldCheck, X } from "lucide-react";
import { roleLabels, rolePermissions } from "@/lib/permissions";
import type { AcademicRole, AcademicSession, Permission } from "@/lib/types";
import { Panel, StatusBadge } from "../shared";

const rows: Array<{ permission: Permission; label: string }> = [
  { permission: "map:read", label: "Consultar mapa e municípios" },
  { permission: "points:read", label: "Consultar pontos de interesse" },
  { permission: "representatives:read", label: "Consultar representantes" },
  { permission: "visits:write", label: "Planejar e concluir visitas" },
  { permission: "routes:compare", label: "Comparar rotas" },
  { permission: "expansion:read", label: "Consultar expansão" },
  { permission: "access:read", label: "Consultar matriz de acesso" }
];

export function AccessView({ session }: { session: AcademicSession }) {
  const roles = Object.keys(roleLabels) as AcademicRole[];

  return (
    <div className="view-stack">
      <div className="integration-status panel">
        <span className="integration-icon"><DatabaseZap size={23} /></span>
        <div>
          <span className="eyebrow">CONTRATO DE INTEGRAÇÃO</span>
          <h2>Gestão simulado localmente</h2>
          <p>A interface retorna apenas perfis e permissões fictícios definidos neste repositório.</p>
        </div>
        <StatusBadge label="Sem conexão externa" tone="success" />
      </div>

      <Panel
        action={<StatusBadge label={`Sessão: ${roleLabels[session.role]}`} tone="info" />}
        eyebrow="CONTROLE DE ACESSO"
        title="Matriz de permissões demonstrativa"
      >
        <div className="data-table-wrap">
          <table className="data-table permission-table">
            <thead>
              <tr>
                <th>Capacidade</th>
                {roles.map((role) => <th key={role}>{roleLabels[role]}</th>)}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.permission}>
                  <td><strong>{row.label}</strong><small className="table-subline">{row.permission}</small></td>
                  {roles.map((role) => {
                    const allowed = rolePermissions[role].includes(row.permission);
                    return (
                      <td key={role}>
                        <span className={allowed ? "permission-yes" : "permission-no"}>
                          {allowed ? <Check size={17} /> : <X size={17} />}
                          {allowed ? "Permitido" : "Bloqueado"}
                        </span>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Panel>

      <div className="method-grid">
        <article><LockKeyhole size={20} /><div><strong>Autenticação</strong><p>Contrato TypeScript com adaptador mock; sem credenciais reais.</p></div></article>
        <article><ShieldCheck size={20} /><div><strong>Autorização</strong><p>Menu e operações derivados de permissões explícitas.</p></div></article>
        <article><DatabaseZap size={20} /><div><strong>Persistência</strong><p>Sessão no navegador e alterações voláteis apenas para demonstração.</p></div></article>
      </div>
    </div>
  );
}
