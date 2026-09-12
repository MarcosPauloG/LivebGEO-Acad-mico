"use client";

import { ArrowRight, Eye, EyeOff, LockKeyhole, Mail } from "lucide-react";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { mockGestaoIdentityGateway } from "@/lib/gestao-contract";
import { roleLabels } from "@/lib/permissions";
import { saveAcademicSession } from "@/lib/session";
import type { AcademicRole } from "@/lib/types";

const roleDescriptions: Record<AcademicRole, string> = {
  coordination: "Todos os módulos e a matriz de permissões",
  analysis: "Análise, planejamento, rotas e indicadores",
  representation: "Mapa, pontos, visitas, rotas e cobertura",
  observation: "Consulta sem operações de planejamento"
};

export function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("aluno@example.invalid");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<AcademicRole>("coordination");
  const [showPassword, setShowPassword] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setError(null);

    try {
      const result = await mockGestaoIdentityGateway.authenticate({
        email,
        password,
        requestedRole: role
      });
      saveAcademicSession(result.session);
      router.push("/dashboard");
    } catch (submissionError) {
      setError(
        submissionError instanceof Error
          ? submissionError.message
          : "Não foi possível iniciar a sessão simulada."
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form className="login-form" onSubmit={submit}>
      <div className="form-heading">
        <span className="eyebrow">INTERFACE GESTÃO · MOCK LOCAL</span>
        <h1>Acessar o protótipo</h1>
        <p>Use apenas dados fictícios. Nenhuma informação é enviada à empresa.</p>
      </div>

      <label>
        <span>E-mail fictício</span>
        <span className="input-shell">
          <Mail size={18} />
          <input
            autoComplete="off"
            onChange={(event) => setEmail(event.target.value)}
            placeholder="usuario@example.invalid"
            type="email"
            value={email}
          />
        </span>
      </label>

      <label>
        <span>Senha fictícia</span>
        <span className="input-shell">
          <LockKeyhole size={18} />
          <input
            autoComplete="new-password"
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Use 8 ou mais caracteres fictícios"
            type={showPassword ? "text" : "password"}
            value={password}
          />
          <button
            aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
            className="input-action"
            onClick={() => setShowPassword((current) => !current)}
            type="button"
          >
            {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
          </button>
        </span>
      </label>

      <fieldset className="role-picker">
        <legend>Perfil simulado</legend>
        {(Object.keys(roleLabels) as AcademicRole[]).map((option) => (
          <label
            className={role === option ? "role-option role-option--active" : "role-option"}
            key={option}
          >
            <input
              checked={role === option}
              name="role"
              onChange={() => setRole(option)}
              type="radio"
              value={option}
            />
            <span>
              <strong>{roleLabels[option]}</strong>
              <small>{roleDescriptions[option]}</small>
            </span>
          </label>
        ))}
      </fieldset>

      {error ? <p className="form-error">{error}</p> : null}

      <button className="primary-button login-submit" disabled={submitting}>
        {submitting ? "Abrindo ambiente..." : "Entrar no modo acadêmico"}
        <ArrowRight size={18} />
      </button>

      <p className="security-note">
        Simulação local: sem banco, endpoint privado, MFA, token ou conta real.
      </p>
    </form>
  );
}
