import { LoginFormDataType } from './../redux/authReducer';
import { instance, OperationResultType } from './indexApi';



export enum ResultCodesEnum {
  Success = 0,
  Error = 1,
  CapthaIsRequired = 10,
}

type LogautResponseType = {
  resultCode: number;
}

type AuthUserDataType = {
  id: number;
  email: string;
  login: string;
};

type LoginUserDataType = {
  userId: number
}

export const authAPI = {
  getAuthUserData: () => {
    return instance.get<OperationResultType<AuthUserDataType>>('/auth/me').then(res => res.data);
  },

  login: (formData: LoginFormDataType) => {
    return instance.post<OperationResultType<LoginUserDataType>>('/auth/login', formData).then(res => res.data);
  },

  logout: () => {
    return instance.post<LogautResponseType>('/auth/logout');
  },
}