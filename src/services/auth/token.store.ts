let tokenCache: string | null = null;

const TOKEN_KEY = "auth_token";

/**
 * Guarda el token
 */
export const setToken = async (token: string): Promise<void> => {
  tokenCache = token;

  if (typeof window !== "undefined") {
    localStorage.setItem(TOKEN_KEY, token);
  }
};

/**
 * Recupera el token
 */
export const getToken = async (): Promise<string | null> => {
  if (tokenCache) return tokenCache;

  if (typeof window === "undefined") {
    return null;
  }

  const token = localStorage.getItem(TOKEN_KEY);
  tokenCache = token;

  return token;
};

/**
 * Borra el token
 */
export const clearToken = async (): Promise<void> => {
  tokenCache = null;

  if (typeof window !== "undefined") {
    localStorage.removeItem(TOKEN_KEY);
  }
};