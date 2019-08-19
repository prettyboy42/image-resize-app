export interface RootState {
  drawerState: boolean;
  version: string;
  dismissSecs: number;
  dismissCountDown: number;
  alertType: string;
  alertMessage: object;
  logon: boolean;
  userIdentity: object | null;
  authenticated: boolean;
  ribbonOnProfiles: string;
  activeProfiles: string;
  currentLanguage: string;
  languages: object | null;
}
