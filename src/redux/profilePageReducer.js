import { stopSubmit } from "redux-form";
import { profileAPI } from "../api/profileApi";
import { ProfileDataSaveError, ProfilePhotoSaveError, ProfileStatusSaveError } from "../utils/errors/errors";

const ADD_POST = 'social-network/profile/ADD-POST';
const SET_USER_PROFILE = 'social-network/profile/SET_USER_PROFILE';
const SET_USER_STATUS = 'social-network/profile/SET_USER_STATUS';
const SET_PHOTO = 'social-network/profile/SET_PHOTO';
const TOGGLE_IN_WAITING = 'social-network/profile/TOGGLE_IN_WAITING';

export const addPostAC = (text) => ({ type: ADD_POST, text });
const setUserProfileAC = (userData) => ({ type: SET_USER_PROFILE, userData });
const setUserStatusAC = (text) => ({ type: SET_USER_STATUS, text });
const setPhotoAC = (photos) => ({ type: SET_PHOTO, photos });
const toggleInWaitingAC = (inWaiting) => ({ type: TOGGLE_IN_WAITING, inWaiting });


export const getProfile = (id) => {
  return async (dispatch) => {
    const response = await profileAPI.getProfileData(id)
    dispatch(setUserProfileAC(response));
  }
}

export const getStatus = (id) => {
  return async (dispatch) => {
    const response = await profileAPI.getStatus(id)
    dispatch(setUserStatusAC(response));
  }
}

export const setStatus = (text) => {
  return async (dispatch) => {
    try {
      const response = await profileAPI.setStatus(text)
      if (response.resultCode === 0) {
        dispatch(setUserStatusAC(text));
      } else {
        throw new ProfileStatusSaveError(response.messages[0]);
      }
    } catch (err) {
      throw err;
    }
  }
}

export const setPhoto = (photo) => {
  return async (dispatch) => {
    try {
      dispatch(toggleInWaitingAC(true));
      const response = await profileAPI.setProfilePhoto(photo);

      if (response.resultCode === 0) {
        dispatch(setPhotoAC(response.data.photos));
      } else {
        throw new ProfilePhotoSaveError(response.messages[0]);
      }
    } finally {
      dispatch(toggleInWaitingAC(false));
    }
  }
}

export const setProfileData = (data) => {
  return async (dispatch, getState) => {
    try {
      const id = getState().auth.id;
      const response = await profileAPI.setProfileData(data)
      if (response.resultCode === 0) {
        dispatch(getProfile(id));
      } else {
        if (response.messages[0].indexOf('->') > -1) {
          const errorFieldName = response.messages[0]
            .substring(response.messages[0].indexOf('->') + 2, response.messages[0].length - 1)
            .toLowerCase();

          dispatch(stopSubmit('profileDataForm', { 'contacts': { [errorFieldName]: response.messages[0] } }));
        } else {
          dispatch(stopSubmit('profileDataForm', { _error: response.messages[0] }));
        }

        // Прокидываем данную ошибку наверх, потому что в компоненте ProfileInfo реализовано отображение формы в зависимости от состояния editMode
        // Нам нужно понимать, успешно сохранились данные на сервере или нет
        // Если успех (resultCode === 0) => убираем форму
        // Если нет (resultCode !== 0) => нужно оставить форму и подсветить непровалидированные поля
        // Ошибке присваиваем свой класс, для того, что бы отличить ее от сетевых ошибок, которые не должны перехватится в ProfileInfo,
        // а должны обрабататься в App
        throw new ProfileDataSaveError(response.messages[0]);
      }
    } catch (err) {
      throw err;
    }
  };
}



const initialState = {
  posts: [
    { id: 1, message: 'Hi, how are you?', likesCount: 10 },
    { id: 2, message: 'Its my first post', likesCount: 15 },
    { id: 3, message: 'Da', likesCount: 120 },
    { id: 4, message: 'Ok, its cool', likesCount: 110 },
    { id: 5, message: ';)', likesCount: 40 },
  ],
  userProfile: null,
  userStatus: '',
  inWaiting: false,
}

const profilePageReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_POST: {
      return {
        ...state,
        posts: [
          ...state.posts,
          {
            id: state.posts.length + 1,
            message: action.text,
            likesCount: 0,
          }
        ],
      };
    }


    case SET_USER_PROFILE: {
      return { ...state, userProfile: action.userData };
    }

    case SET_USER_STATUS: {
      return { ...state, userStatus: action.text }
    }

    case SET_PHOTO: {
      return {
        ...state,
        userProfile: {
          ...state.userProfile,
          photos: action.photos,
        },
      }
    }

    case TOGGLE_IN_WAITING:
      return {
        ...state,
        inWaiting: action.inWaiting,
      }



    default:
      return state;
  }
}

export default profilePageReducer;