import { axiosInstance } from '../axios';
import { AxiosPromise } from 'axios';
import { RegisterAccount, ApiResult } from './types';

// "async" is optional
export default class RegisterService {
  public processRegistration(
    account: RegisterAccount
  ): AxiosPromise<ApiResult> {
    return axiosInstance.post('api/register', account);
  }
}
