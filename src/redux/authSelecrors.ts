import { RootStateType } from "./reduxStore";

export const getAuth = (state: RootStateType) => state.auth;

export const getIsAuth = (state: RootStateType) => state.auth.isAuth;

export const getCaptchaUrl = (state: RootStateType) => state.auth.captchaUrl;