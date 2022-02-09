import { ResultCodesEnum } from './../api/authApi';
import { InferActionsType, RootStateType } from './reduxStore';
import { FormAction, stopSubmit } from "redux-form";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { profileAPI } from "../api/profileApi";
import { ProfileDataSaveError, ProfilePhotoSaveError, ProfileStatusSaveError } from "../utils/errors/errors";


type InitialStateType = typeof initialState

export type PostType = {
  id: number;
  message: string;
  likesCount: number;
}

export type UserProfileType = {
  userId: number;
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  fullName: string;
  contacts: ContactsType;
  photos: PhotosType;
  aboutMe: string;
}

export type ContactsType = {
  github: string;
  vk: string;
  facebook: string;
  instagram: string;
  twitter: string;
  website: string;
  youtube: string;
  mainLink: string;
}

export type PhotosType = {
  small: string | null;
  large: string | null;
}

type ActionsType = InferActionsType<typeof actions>;

type ThunkActionType = ThunkAction<Promise<void>, RootStateType, unknown, ActionsType>


const ADD_POST = 'social-network/profile/ADD-POST';
const SET_USER_PROFILE = 'social-network/profile/SET_USER_PROFILE';
const SET_USER_STATUS = 'social-network/profile/SET_USER_STATUS';
const SET_PHOTO = 'social-network/profile/SET_PHOTO';
const TOGGLE_IN_WAITING = 'social-network/profile/TOGGLE_IN_WAITING';

export const actions = {
  addPost: (text: string) => ({ type: ADD_POST, text }) as const,
  setUserProfile: (userData: UserProfileType) => ({ type: SET_USER_PROFILE, userData }) as const,
  setUserStatus: (text: string) => ({ type: SET_USER_STATUS, text }) as const,
  setPhoto: (photos: PhotosType) => ({ type: SET_PHOTO, photos }) as const,
  toggleInWaiting: (inWaiting: boolean) => ({ type: TOGGLE_IN_WAITING, inWaiting }) as const,
}



export const getProfile = (id: number | null): ThunkActionType => {
  return async (dispatch: ThunkDispatch<RootStateType, unknown, ActionsType>) => {
    const response = await profileAPI.getProfileData(id)

    dispatch(actions.setUserProfile(response));
  }
}

export const getStatus = (id: number): ThunkActionType => {
  return async (dispatch: ThunkDispatch<RootStateType, unknown, ActionsType>) => {
    const response = await profileAPI.getStatus(id)
    dispatch(actions.setUserStatus(response));
  }
}

export const setStatus = (text: string): ThunkActionType => {
  return async (dispatch: ThunkDispatch<RootStateType, unknown, ActionsType>) => {
    try {
      const response = await profileAPI.setStatus(text)
      if (response.resultCode === ResultCodesEnum.Success) {
        dispatch(actions.setUserStatus(text));
      } else {
        throw new ProfileStatusSaveError(response.messages[0]);
      }
    } catch (err) {
      throw err;
    }
  }
}

export const setPhoto = (photo: File): ThunkActionType => {
  return async (dispatch: ThunkDispatch<RootStateType, unknown, ActionsType>) => {
    try {
      dispatch(actions.toggleInWaiting(true));
      const response = await profileAPI.setProfilePhoto(photo);

      if (response.resultCode === ResultCodesEnum.Success) {
        dispatch(actions.setPhoto(response.data.photos));
      } else {
        throw new ProfilePhotoSaveError(response.messages[0]);
      }
    } finally {
      dispatch(actions.toggleInWaiting(false));
    }
  }
}


export const setProfileData = (data: UserProfileType): ThunkActionType => {
  return async (dispatch: ThunkDispatch<RootStateType, unknown, ActionsType | FormAction>, getState: () => RootStateType) => {  // FormAction тип экшена, который возвращаее stopSubmit
    try {
      const id = getState().auth.id;
      const response = await profileAPI.setProfileData(data)
      if (response.resultCode === ResultCodesEnum.Success) {
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
        // Если успех (resultCode === ResultCodesEnum.Success) => убираем форму
        // Если нет (resultCode !== ResultCodesEnum.Success) => нужно оставить форму и подсветить непровалидированные поля
        // Далее в ProfileInfo прокидываем эту ошибку дальше, что бы она обработалась в App
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
  ] as Array<PostType>,
  userProfile: null as UserProfileType | null,
  userStatus: '',
  inWaiting: false,
}


const profilePageReducer = (state = initialState, action: ActionsType): InitialStateType => {

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
          ...state.userProfile as UserProfileType,
          photos: action.photos,
        }, /// !!! as UserProfileType
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