import { ResultCodesEnum } from './../api/authApi';
import { InferActionsType, RootStateType } from './reduxStore';
import { Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { usersAPI } from "../api/usersApi";
import { FollowUnfollowError } from "../utils/errors/errors";
import { PhotosType } from "./profilePageReducer";
import { OperationResultType } from '../api/indexApi';

const FOLLOW = 'social-network/users/FOLLOW';
const UNFOLLOW = 'social-network/users/UNFOLLOW';
const SET_USERS = 'social-network/users/SET_USERS';
const SET_CURRENT_PAGE = 'social-network/users/SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'social-network/users/SET_TOTAL_COUNT';
const TOGGLE_IS_FETCHING = 'social-network/users/TOGGLE_IS_FETCHING';
const TOGGLE_FOLLOWING_IN_PROGRESS = 'social-network/users/TOGGLE_FOLLOWING_IN_PROGRESS';

type ActionsType = InferActionsType<typeof actions>;

type ThunkActionType = ThunkAction<void, RootStateType, unknown, ActionsType>;

const actions = {
  follow: (userId: number) => ({ type: FOLLOW, userId }) as const,
  unfollow: (userId: number) => ({ type: UNFOLLOW, userId }) as const,
  setUsers: (users: Array<UserType>) => ({ type: SET_USERS, users }) as const,
  setCurrentPage: (page: number) => ({ type: SET_CURRENT_PAGE, page }) as const,
  setTotalCount: (totalCount: number) => ({ type: SET_TOTAL_COUNT, totalCount }) as const,
  toggleIsFetching: (isFetching: boolean) => ({ type: TOGGLE_IS_FETCHING, isFetching }) as const,
  toggleFollowingProgress: (inProgress: boolean, id: number) => ({ type: TOGGLE_FOLLOWING_IN_PROGRESS, inProgress, id }) as const,
}




const followUnfollow = async (
  dispatch: Dispatch<ActionsType>, apiMethod: (id: number) => Promise<OperationResultType>,
  actionCreator: (userId: number) => ActionsType,
  id: number
) => {
  try {
    dispatch(actions.toggleFollowingProgress(true, id));

    const response = await apiMethod(id);

    if (response.resultCode === ResultCodesEnum.Success) {
      dispatch(actionCreator(id))
    } else {
      throw new FollowUnfollowError(response.messages[0])
    } 
  } finally {
    dispatch(actions.toggleFollowingProgress(false, id));
  }
}

export const follow = (id: number): ThunkActionType => {
  return (dispatch: Dispatch<ActionsType>) => {
    followUnfollow(dispatch, usersAPI.getFollow, actions.follow, id);
  }
}

export const unfollow = (id: number): ThunkActionType => {
  return (dispatch: Dispatch<ActionsType>) => {
    followUnfollow(dispatch, usersAPI.getUnfollow, actions.unfollow, id);
  }
}


export const getUsersList = (pageSize: number, currentPage: number, searchValue = ''): ThunkActionType => {
  return async (dispatch: Dispatch<ActionsType>) => {
    try {
      dispatch(actions.toggleIsFetching(true));
      const response = await usersAPI.getUsersData(pageSize, currentPage, searchValue)

      dispatch(actions.setUsers(response.items));
      dispatch(actions.setTotalCount(response.totalCount));
      dispatch(actions.setCurrentPage(currentPage));
    } finally {
      dispatch(actions.toggleIsFetching(false));
    }
  }
}

export type UserType = {
  name: string
  id: number
  photos: PhotosType
  status: string | null
  followed: boolean
}

type InitialStateType = typeof initialState

const initialState = {
  items: [] as Array<UserType>,
  pageSize: 50,
  currentPage: 1,
  totalCount: null as null | number,
  isFetching: false,
  followingInProgress: [] as Array<number>, // массив пользовательских id
};

const usersPageReducer = (state = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {

    case FOLLOW:
      return {
        ...state,
        items: [...state.items.map((item: any) => {
          if (item.id === action.userId) {
            return {
              ...item,
              followed: true,
            }
          }
          return item;
        })],
      };

    case UNFOLLOW:
      return {
        ...state,
        items: [...state.items.map((item: any) => {
          if (item.id === action.userId) {
            return {
              ...item,
              followed: false,
            }
          }
          return item;
        })],
      };

    case SET_USERS:
      return {
        ...state,
        items: action.users,
      };

    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.page,
      };

    case SET_TOTAL_COUNT:
      return {
        ...state,
        totalCount: action.totalCount,
      };

    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      }

    case TOGGLE_FOLLOWING_IN_PROGRESS:
      return {
        ...state,
        followingInProgress: action.inProgress
          ? [...state.followingInProgress, action.id]
          : state.followingInProgress.filter(item => item !== action.id),
      }


    default:
      return state;
  }
}

export default usersPageReducer;