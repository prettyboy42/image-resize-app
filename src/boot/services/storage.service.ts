// import something here
import { TOKEN_KEY, REFRESH_TOKEN_KEY } from '../../constants';

/**
 * Manage the how Access Tokens are being stored and retreived from storage.
 *
 * Current implementation stores to localStorage. Local Storage should always be
 * accessed through this instace.
 **/
export function getToken() {
  const token =
    localStorage.getItem(TOKEN_KEY) || sessionStorage.getItem(TOKEN_KEY);
  return token;
}

export function saveToken(accessToken: string, rememberMe?: boolean): void {
  if (rememberMe) {
    localStorage.setItem(TOKEN_KEY, accessToken);
  } else {
    sessionStorage.setItem(TOKEN_KEY, accessToken);
  }
}

export function removeToken() {
  localStorage.removeItem(TOKEN_KEY);
  sessionStorage.removeItem(TOKEN_KEY);
}

export function getRefreshToken() {
  return localStorage.getItem(REFRESH_TOKEN_KEY);
}

export function saveRefreshToken(refreshToken: string) {
  localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);
}

export function removeRefreshToken() {
  localStorage.removeItem(REFRESH_TOKEN_KEY);
}
