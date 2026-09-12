import { roleLabels, rolePermissions } from "./permissions";
import type {
  AcademicRole,
  AcademicSession,
  Permission
} from "./types";

export type AcademicCredentials = {
  email: string;
  password: string;
  requestedRole: AcademicRole;
};

export type IdentityResult = {
  session: AcademicSession;
  permissions: Permission[];
};

export interface GestaoIdentityGateway {
  authenticate(credentials: AcademicCredentials): Promise<IdentityResult>;
  permissionsFor(role: AcademicRole): Promise<Permission[]>;
}

function assertFictionalCredentials(credentials: AcademicCredentials) {
  if (!credentials.email.toLowerCase().endsWith("@example.invalid")) {
    throw new Error("Use somente um e-mail fictício terminado em @example.invalid.");
  }
  if (credentials.password.length < 8) {
    throw new Error("A senha fictícia precisa ter pelo menos oito caracteres.");
  }
}

export const mockGestaoIdentityGateway: GestaoIdentityGateway = {
  async authenticate(credentials) {
    assertFictionalCredentials(credentials);
    const role = credentials.requestedRole;

    return {
      session: {
        id: `academic-${role}`,
        displayName: roleLabels[role],
        email: credentials.email.toLowerCase(),
        role,
        source: "gestao-mock",
        expiresAt: new Date(Date.now() + 8 * 60 * 60 * 1000).toISOString()
      },
      permissions: [...rolePermissions[role]]
    };
  },
  async permissionsFor(role) {
    return [...rolePermissions[role]];
  }
};
