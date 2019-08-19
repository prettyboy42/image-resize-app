import { AxiosRequestConfig } from 'axios';

export interface AccountEntity {
  username: string;
  email: string;
  password: string;
  langKey: string;
}

export interface RegisterAccount {
  login: string;
  email: string;
  password: string;
  confirmPassword?: string;
  langKey: string;
}

export interface ApiRequest {
  url: string;
  config?: AxiosRequestConfig;
  data: object;
}

export interface ApiResult {
  data: object;
}
