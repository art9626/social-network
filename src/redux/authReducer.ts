import { InferActionsType, RootStateType } from './reduxStore';
import { FormAction, stopSubmit } from "redux-form";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { authAPI, ResultCodesEnum } from "../api/authApi";
import { securityAPI } from "../api/securityApi";


type AuthUserDataType = {
  email: string | null;
  id: number | null;
  login: string | null;
}

export type LoginFormDataType = {
  email: string;
  password: string;
  rememberMe: boolean;
  captcha: string;
}

export type FieldsNamesType = keyof LoginFormDataType;


export type IsAuthType = 'notAuthorized' | 'authorized';

export type InitialStateType = typeof initialState;


type ThunkActionType = ThunkAction<Promise<void>, RootStateType, unknown, ActionsType>;




const SET_AUTH_USER_DATA = 'social-network/auth/SET_AUTH_USER_DATA';
const SET_CAPTCHA_URL = 'social-network/auth/SET_CAPTCHA_URL';

const actions = {
  setAuthUserData: (data: AuthUserDataType, isAuth: IsAuthType) => ({ type: SET_AUTH_USER_DATA, data, isAuth }) as const,
  setCaptchaUrl: (url: string) => ({ type: SET_CAPTCHA_URL, url }) as const,
}


type ActionsType = InferActionsType<typeof actions>;



export const getAuthUser = (): ThunkActionType => {
  return async (dispatch: ThunkDispatch<RootStateType, unknown, ActionsType>) => {

    const response = await authAPI.getAuthUserData()
    if (response.resultCode === ResultCodesEnum.Success) {
      dispatch(actions.setAuthUserData(response.data, 'authorized'));
    }
  }
}

export const loginUserThunk = (formData: LoginFormDataType): ThunkActionType => {
  return async (dispatch: ThunkDispatch<RootStateType, unknown, ActionsType | FormAction>) => { // FormAction тип экшена, который возвращаее stopSubmit
    const response = await authAPI.login(formData)
    if (response.resultCode === ResultCodesEnum.Success) {
      dispatch(getAuthUser());
    } else {
      if (response.resultCode === ResultCodesEnum.CapthaIsRequired) {
        dispatch(setCaptchaUrl());
      }
      dispatch(stopSubmit('login', { _error: response.messages[0] }));
    }
  }
}

export const logoutUserThunk = (): ThunkActionType => {
  return async (dispatch: ThunkDispatch<RootStateType, unknown, ActionsType>) => {
    const response = await authAPI.logout()
    if (response.data.resultCode === ResultCodesEnum.Success) {
      dispatch(actions.setAuthUserData({ id: null, login: null, email: null }, 'notAuthorized'));
    }
  }
}

const setCaptchaUrl = (): ThunkActionType => {
  return async (dispatch: ThunkDispatch<RootStateType, unknown, ActionsType>) => {
    const response = await securityAPI.getCaptchaUrl();
    dispatch(actions.setCaptchaUrl(response.url));
  }
}

const initialState = {
  id: null as number | null,
  login: null as string | null,
  email: null as string | null,
  isAuth: 'notAuthorized' as IsAuthType,
  captchaUrl: null as string | null,
}


const authReducer = (state = initialState, action: ActionsType): InitialStateType => {

  switch (action.type) {
    case SET_AUTH_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: action.isAuth,
      };

    case SET_CAPTCHA_URL:
      return {
        ...state,
        captchaUrl: action.url,
      };


    default:
      return state;
  }
}


// Использование MappedType и ConditionalType

// type MyType<T> = T extends 'string' ? LikeType : DislikeType;

// type LikeType = {
//   myType: string;
// }

// type DislikeType = {
//   myType: number;
// }

// const a: MyType<'string'> = {
//   myType: 'fdsfd',
// }

// const b: MyType<'number'> = {
//   myType: 1,
// }

// const obj = {
//   a: {name: 'Art'},
//   c: {age: 29},
// }

// const obj1 = {
//   name: 'Art',
//   age: 29,
// }

// type SomeType<T> = T extends {[key: string]: infer U} ? U : never;

// const MyName: SomeType<typeof obj> = {name: 'dsf'};
// const MyName1: SomeType<typeof obj1> = 'sdffs';

export default authReducer;