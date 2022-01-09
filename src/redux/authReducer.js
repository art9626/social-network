import { authAPI } from "../api/api";

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA';

const setAuthUserDataAC = (data, isAuth) => ({ type: SET_AUTH_USER_DATA, data, isAuth });


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
  return (dispatch) => {
    authAPI.login(formData)
      .then(res => {
        if (res.resultCode === 0) {
          dispatch(getAuthUser());
        } 
      })
  }
}

export const logoutUser = () => {
  return (dispatch) => {
    authAPI.logout()
      .then(res => {
        if (res.data.resultCode === 0) {
          dispatch(setAuthUserDataAC({ id: null, login: null, email: null }, 'notAuthorized'));
        }
      })
  }
}

const initialState = {
  id: null,
  login: null,
  email: null,
  isAuth: 'notAuthorized',
}


const authReducer = (state = initialState, action) => {

  switch (action.type) {
    case SET_AUTH_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: action.isAuth,
      };


    default:
      return state;
  }
}

export default authReducer;