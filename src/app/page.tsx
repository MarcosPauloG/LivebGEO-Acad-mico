import {
  GitCompareArrows,
  GraduationCap,
  MapPinned,
  Route,
  ShieldCheck
} from "lucide-react";
import { Brand } from "@/components/brand";
import { LoginForm } from "@/components/login-form";

export default function LoginPage() {
  return (
    <main className="login-page">
      <section className="login-hero">
        <Brand />
        <div className="login-hero-copy">
          <span className="hero-kicker"><GraduationCap size={17} /> PROJETO ACADÊMICO PRIVADO</span>
          <h2>Planejamento territorial sem misturar ambientes.</h2>
          <p>
            Uma base segura para estudar mapa, cobertura, visitas e rotas usando somente dados sintéticos e integrações simuladas.
          </p>
        </div>
        <div className="hero-feature-grid">
          <article><MapPinned size={20} /><span><strong>Territórios</strong><small>Amostra esquemática</small></span></article>
          <article><Route size={20} /><span><strong>Rotas</strong><small>Comparação local</small></span></article>
          <article><GitCompareArrows size={20} /><span><strong>Cobertura</strong><small>Lacunas e duplicidades</small></span></article>
          <article><ShieldCheck size={20} /><span><strong>Permissões</strong><small>Gestão simulado</small></span></article>
        </div>
        <p className="hero-disclaimer">
          Protótipo não operacional · não representa clientes, pessoas, localidades ou cobertura reais.
        </p>
      </section>

      <section className="login-panel">
        <LoginForm />
      </section>
    </main>
  );
}
