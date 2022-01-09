import { profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';

export const addPostAC = (text) => ({ type: ADD_POST, text });
export const setUserProfileAC = (userData) => ({ type: SET_USER_PROFILE, userData });
export const setUserStatusAC = (text) => ({ type: SET_USER_STATUS, text });

export const getProfile = (id) => {
  return (dispatch) => {
    profileAPI.getProfileData(id)
      .then(res => {
        dispatch(setUserProfileAC(res));
      });
  }
}

export const getStatus = (id) => {
  return (dispatch) => {
    profileAPI.getStatus(id)
      .then(res => dispatch(setUserStatusAC(res)));
  }
}

export const setStatus = (text) => {
  return (dispatch) => {
    profileAPI.setStatus(text)
      .then(res => {
        if (res.resultCode === 0) {
          dispatch(setUserStatusAC(text));
        }
      });
  }
}



const initialState = {
  posts: [
    {id: 1, message: 'Hi, how are you?', likesCount: 10},
    {id: 2, message: 'Its my first post', likesCount: 15},
    {id: 3, message: 'Da', likesCount: 120},
    {id: 4, message: 'Ok, its cool', likesCount: 110},
    {id: 5, message: ';)', likesCount: 40},
  ],
  userProfile: null,
  userStatus: '',
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
      return {...state, userProfile: action.userData};
    }

    case SET_USER_STATUS: {
      return {...state, userStatus: action.text}
    }
  
    default:
      return state;
  }
}

export default profilePageReducer;