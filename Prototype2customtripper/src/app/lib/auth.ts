export const AUTH_TOKEN_KEY = "authToken";
export const AUTH_USER_KEY = "authUser";

export function getToken() {
  // Authentication is disabled for now. Always return a placeholder token.
  return "no-auth-token";
}

export function getUsername() {
  if (typeof window === "undefined") return "Guest";
  return localStorage.getItem(AUTH_USER_KEY) ?? "Guest";
}

export function setAuth(token: string, username: string) {
  // Keep username in storage so it can be displayed in the UI.
  if (typeof window === "undefined") return;
  localStorage.setItem(AUTH_USER_KEY, username);
}

export function clearAuth() {
  if (typeof window === "undefined") return;
  localStorage.removeItem(AUTH_USER_KEY);
}

export function isAuthenticated() {
  // Always treat the user as authenticated while auth is disabled.
  return true;
}

export function authHeaders() {
  // No auth headers required while auth is disabled.
  return {};
}
