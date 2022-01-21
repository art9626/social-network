import { stopSubmit } from "redux-form";
import { authAPI } from "../api/authApi";
import { securityAPI } from "../api/securityApi";

const SET_AUTH_USER_DATA = 'social-network/auth/SET_AUTH_USER_DATA';
const SET_CAPTCHA_URL = 'social-network/auth/SET_CAPTCHA_URL';

const setAuthUserDataAC = (data, isAuth) => ({ type: SET_AUTH_USER_DATA, data, isAuth });
const setCaptchaUrlAC = (url) => ({ type: SET_CAPTCHA_URL, url });


export const getAuthUser = () => {
  return (dispatch) => {

    return authAPI.getAuthUserData()
      .then(res => {
        if (res.resultCode === 0) {
          dispatch(setAuthUserDataAC(res.data, 'authorized'));
        }
      })
  }
}

export const loginUser = (formData) => {
  return async (dispatch) => {
    const response = await authAPI.login(formData)
    if (response.resultCode === 0) {
      dispatch(getAuthUser());
    } else {
      if (response.resultCode === 10) {
        dispatch(setCaptchaUrl());
      }
      dispatch(stopSubmit('login', { _error: response.messages[0] }));
    }
  }
}

export const logoutUser = () => {
  return async (dispatch) => {
    const response = await authAPI.logout()
    if (response.data.resultCode === 0) {
      dispatch(setAuthUserDataAC({ id: null, login: null, email: null }, 'notAuthorized'));
    }
  }
}

const setCaptchaUrl = () => {
  return async (dispatch) => {
    const response = await securityAPI.getCaptchaUrl();
    dispatch(setCaptchaUrlAC(response.url));
  }
}

const initialState = {
  id: null,
  login: null,
  email: null,
  isAuth: 'notAuthorized',
  captchaUrl: null,
}


const authReducer = (state = initialState, action) => {

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

export default authReducer;