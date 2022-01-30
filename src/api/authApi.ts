import { OperationResultType } from './profileApi';
import { LoginFormDataType } from './../redux/authReducer';
import axios from "axios";

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0',
  withCredentials: true,
  headers: {
    "API-KEY": "9d799735-d786-4c1b-bde9-09779c3bba07"
  },
});

export enum ResultCodesEnum {
  Success = 0,
  Error = 1,
  CapthaIsRequired = 10,
}

type LogautResponseType = {
  resultCode: number;
}

export const authAPI = {
  getAuthUserData: () => {
    return instance.get<OperationResultType<{ id: number; email: string; login: string; }>>('/auth/me').then(res => res.data);
  },

  login: (formData: LoginFormDataType) => {
    return instance.post<OperationResultType<{ userId: number }>>('/auth/login', formData).then(res => res.data);
  },

  logout: () => {
    return instance.post<LogautResponseType>('/auth/logout');
  },
}