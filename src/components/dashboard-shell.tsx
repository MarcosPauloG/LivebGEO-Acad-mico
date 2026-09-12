"use client";

import {
  BarChart3,
  Building2,
  CalendarDays,
  CircleGauge,
  DatabaseZap,
  GitCompareArrows,
  LogOut,
  Map,
  MapPin,
  Menu,
  RefreshCcw,
  Route,
  Search,
  ShieldAlert,
  Users,
  X
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { academicDatasetNotice, initialVisits, municipalities } from "@/data/academic";
import { canOpenView, hasPermission, roleLabels } from "@/lib/permissions";
import { clearAcademicSession, readAcademicSession, saveAcademicSession } from "@/lib/session";
import type { AcademicRole, AcademicSession, ViewId } from "@/lib/types";
import { Brand } from "./brand";
import { AccessView } from "./views/access-view";
import { CoverageView } from "./views/coverage-view";
import { ExpansionView } from "./views/expansion-view";
import { MapView } from "./views/map-view";
import { OverviewView } from "./views/overview-view";
import { PointsView } from "./views/points-view";
import { RepresentativesView } from "./views/representatives-view";
import { RoutesView } from "./views/routes-view";
import { TerritoriesView } from "./views/territories-view";
import { VisitsView } from "./views/visits-view";

const navItems: Array<{
  id: ViewId;
  label: string;
  icon: typeof CircleGauge;
  section: "analysis" | "planning" | "system";
}> = [
  { id: "overview", label: "Visão geral", icon: CircleGauge, section: "analysis" },
  { id: "map", label: "Mapa", icon: Map, section: "analysis" },
  { id: "territories", label: "Territórios", icon: MapPin, section: "analysis" },
  { id: "points", label: "Pontos de interesse", icon: Building2, section: "analysis" },
  { id: "representatives", label: "Representantes", icon: Users, section: "analysis" },
  { id: "visits", label: "Planejar visitas", icon: CalendarDays, section: "planning" },
  { id: "routes", label: "Comparar rotas", icon: Route, section: "planning" },
  { id: "coverage", label: "Cobertura e duplicidades", icon: GitCompareArrows, section: "planning" },
  { id: "expansion", label: "Indicadores", icon: BarChart3, section: "planning" },
  { id: "access", label: "Acessos do Gestão", icon: DatabaseZap, section: "system" }
];

const viewTitles: Record<ViewId, string> = {
  overview: "Visão geral",
  map: "Mapa e municípios",
  territories: "Territórios",
  points: "Imobiliárias e pontos de interesse",
  representatives: "Representantes e cobertura",
  visits: "Planejamento de visitas",
  routes: "Geração e comparação de rotas",
  coverage: "Duplicidades e regiões sem cobertura",
  expansion: "Indicadores de expansão",
  access: "Autenticação e permissões"
};

const sectionLabels = {
  analysis: "ANÁLISE TERRITORIAL",
  planning: "PLANEJAMENTO",
  system: "INTERFACE SIMULADA"
};

export function DashboardShell() {
  const router = useRouter();
  const [session, setSession] = useState<AcademicSession | null>(null);
  const [ready, setReady] = useState(false);
  const [view, setView] = useState<ViewId>("overview");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const [selectedMunicipalityId, setSelectedMunicipalityId] = useState<string | null>(null);
  const [visits, setVisits] = useState(initialVisits);

  useEffect(() => {
    const current = readAcademicSession();
    if (!current) {
      router.replace("/");
      return;
    }
    setSession(current);
    const firstAllowed = navItems.find((item) => canOpenView(current.role, item.id));
    if (firstAllowed) setView(firstAllowed.id);
    setReady(true);
  }, [router]);

  const visibleNav = useMemo(
    () => (session ? navItems.filter((item) => canOpenView(session.role, item.id)) : []),
    [session]
  );

  const searchResults = useMemo(() => {
    const term = query.trim().toLocaleLowerCase("pt-BR");
    if (term.length < 2) return [];
    return municipalities
      .filter(
        (municipality) =>
          municipality.name.toLocaleLowerCase("pt-BR").includes(term) ||
          municipality.code.toLocaleLowerCase("pt-BR").includes(term)
      )
      .slice(0, 5);
  }, [query]);

  function navigate(nextView: ViewId) {
    if (!session || !canOpenView(session.role, nextView)) return;
    setView(nextView);
    setSidebarOpen(false);
    setSearchOpen(false);
  }

  function selectSearchResult(id: string) {
    setSelectedMunicipalityId(id);
    setQuery(municipalities.find((item) => item.id === id)?.name ?? "");
    navigate("map");
  }

  function changeRole(role: AcademicRole) {
    if (!session) return;
    const updated: AcademicSession = {
      ...session,
      id: `academic-${role}`,
      displayName: roleLabels[role],
      role
    };
    saveAcademicSession(updated);
    setSession(updated);
    if (!canOpenView(role, view)) {
      const firstAllowed = navItems.find((item) => canOpenView(role, item.id));
      if (firstAllowed) setView(firstAllowed.id);
    }
  }

  function logout() {
    clearAcademicSession();
    router.push("/");
  }

  if (!ready || !session) {
    return (
      <main className="loading-screen">
        <Brand />
        <span className="loading-pulse">Carregando ambiente acadêmico…</span>
      </main>
    );
  }

  let lastSection: "analysis" | "planning" | "system" | null = null;

  return (
    <div className="app-shell">
      <aside className={sidebarOpen ? "sidebar sidebar--open" : "sidebar"}>
        <div className="sidebar-header">
          <Brand compact />
          <button aria-label="Fechar menu" className="mobile-only icon-button" onClick={() => setSidebarOpen(false)}>
            <X size={19} />
          </button>
        </div>

        <nav aria-label="Navegação principal" className="sidebar-nav">
          {visibleNav.map((item) => {
            const Icon = item.icon;
            const showSection = item.section !== lastSection;
            lastSection = item.section;
            return (
              <div className="nav-group-item" key={item.id}>
                {showSection ? <span className="nav-section-label">{sectionLabels[item.section]}</span> : null}
                <button
                  className={view === item.id ? "nav-button nav-button--active" : "nav-button"}
                  onClick={() => navigate(item.id)}
                >
                  <Icon size={18} />
                  <span>{item.label}</span>
                </button>
              </div>
            );
          })}
        </nav>

        <div className="sidebar-demo-card">
          <ShieldAlert size={19} />
          <span><strong>Dados sintéticos</strong><small>Sem conexão com produção</small></span>
        </div>

        <div className="sidebar-user">
          <span className="avatar">{session.displayName.slice(0, 2).toUpperCase()}</span>
          <span><strong>{session.displayName}</strong><small>{session.email}</small></span>
          <button aria-label="Sair" className="icon-button icon-button--dark" onClick={logout}><LogOut size={17} /></button>
        </div>
      </aside>

      {sidebarOpen ? <button aria-label="Fechar menu" className="sidebar-backdrop" onClick={() => setSidebarOpen(false)} /> : null}

      <main className="main-area">
        <header className="topbar">
          <div className="topbar-heading">
            <button aria-label="Abrir menu" className="mobile-menu" onClick={() => setSidebarOpen(true)}><Menu size={20} /></button>
            <div><span>PROJETO INTEGRADOR II-B</span><h1>{viewTitles[view]}</h1></div>
          </div>

          <div className="topbar-actions">
            <label className="global-search">
              <Search size={17} />
              <input
                onChange={(event) => {
                  setQuery(event.target.value);
                  setSearchOpen(true);
                }}
                onFocus={() => setSearchOpen(true)}
                placeholder="Buscar município sintético"
                value={query}
              />
              {query ? <button aria-label="Limpar busca" onClick={() => { setQuery(""); setSearchOpen(false); }} type="button"><X size={15} /></button> : null}
              {searchOpen && searchResults.length ? (
                <span className="global-search-results">
                  {searchResults.map((municipality) => (
                    <button key={municipality.id} onClick={() => selectSearchResult(municipality.id)} type="button">
                      <span><strong>{municipality.name}</strong><small>{municipality.code}</small></span>
                      <MapPin size={16} />
                    </button>
                  ))}
                </span>
              ) : null}
            </label>

            <label className="role-simulator">
              <span>Perfil</span>
              <select onChange={(event) => changeRole(event.target.value as AcademicRole)} value={session.role}>
                {(Object.keys(roleLabels) as AcademicRole[]).map((role) => (
                  <option key={role} value={role}>{roleLabels[role]}</option>
                ))}
              </select>
            </label>

            <button className="refresh-button" onClick={() => window.location.reload()} title="Restaurar dados voláteis">
              <RefreshCcw size={17} />
            </button>
          </div>
        </header>

        <div className="academic-banner">
          <span>AMBIENTE ACADÊMICO</span>
          <p>{academicDatasetNotice}</p>
        </div>

        <div className="content-area">
          {view === "overview" ? <OverviewView onNavigate={navigate} /> : null}
          {view === "map" ? (
            <MapView
              onSelectMunicipality={setSelectedMunicipalityId}
              selectedMunicipalityId={selectedMunicipalityId}
            />
          ) : null}
          {view === "territories" ? <TerritoriesView /> : null}
          {view === "points" ? <PointsView /> : null}
          {view === "representatives" ? <RepresentativesView /> : null}
          {view === "visits" ? (
            <VisitsView
              canWrite={hasPermission(session.role, "visits:write")}
              setVisits={setVisits}
              visits={visits}
            />
          ) : null}
          {view === "routes" ? <RoutesView canCompare={hasPermission(session.role, "routes:compare")} /> : null}
          {view === "coverage" ? <CoverageView /> : null}
          {view === "expansion" ? <ExpansionView /> : null}
          {view === "access" ? <AccessView session={session} /> : null}
        </div>
      </main>
    </div>
  );
}
