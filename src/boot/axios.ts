import axios, { AxiosRequestConfig, AxiosError } from 'axios';
import { VueConstructor } from 'vue';
import * as storageUtils from './services/storage.service';

const TIMEOUT = 1000000;
const onRequestSuccess = (config: AxiosRequestConfig) => {
  const token = storageUtils.getToken();
  if (token) {
    if (!config.headers) {
      config.headers = {};
    }
    config.headers.Authorization = `Bearer ${token}`;
  }
  config.timeout = TIMEOUT;
  config.url = `${config.url}`;
  return config;
};

// We create our own axios instance and set a custom base URL.
// Note that if we wouldn't set any config here we do not need
// a named export, as we could just `import axios from 'axios'`
const axiosInstance = axios.create({
  baseURL: process.env.VUE_APP_ROOT_API
});
const onResponseError = (err: AxiosError) => {
  const status = err.response && err.response.status;
  if (status === 403 || status === 401) {
    console.log('Unauthorized!');
  }
  return Promise.reject(err);
};
if (axiosInstance.interceptors) {
  axiosInstance.interceptors.request.use(onRequestSuccess);
  axiosInstance.interceptors.response.use(res => res, onResponseError);
}

export default async ({ Vue }: { Vue: VueConstructor }) => {
  Vue.prototype.$axios = axiosInstance;
};

// Here we define a named export
// that we can later use inside .js files:
export { axiosInstance };
