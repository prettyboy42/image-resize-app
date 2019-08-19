import { AxiosRequestConfig, AxiosPromise } from 'axios';
import { axiosInstance } from '../axios';
import { ApiRequest, ApiResult } from './types';
import * as storageUtils from './storage.service';

export default class ApiService {
  public init(baseURL: string) {
    axiosInstance.defaults.baseURL = baseURL;
  }

  public setHeader() {
    axiosInstance.defaults.headers.common[
      'Authorization'
    ] = `Bearer ${storageUtils.getToken()}`;
  }

  public removeHeader() {
    axiosInstance.defaults.headers.common = {};
  }

  public get(resource: ApiRequest): AxiosPromise<ApiResult> {
    return axiosInstance.get(resource.url, resource.config);
  }

  public post(resource: ApiRequest): AxiosPromise<ApiResult> {
    return axiosInstance.post(resource.url, resource.data, resource.config);
  }

  public put(resource: ApiRequest): AxiosPromise<ApiResult> {
    return axiosInstance.put(resource.url, resource.data, resource.config);
  }

  public delete(resource: ApiRequest): AxiosPromise<ApiResult> {
    return axiosInstance.delete(resource.url, resource.config);
  }

  /**
   * Perform a custom Axios request.
   *
   * data is an object containing the following properties:
   *  - method
   *  - url
   *  - data ... request payload
   *  - auth (optional)
   *    - username
   *    - password
   **/
  public customRequest(data: AxiosRequestConfig): AxiosPromise<ApiResult> {
    return axiosInstance(data);
  }
}
