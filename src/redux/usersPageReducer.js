import { usersAPI } from "../api/usersApi";
import { FollowUnfollowError } from "../utils/errors/errors";

const FOLLOW = 'social-network/users/FOLLOW';
const UNFOLLOW = 'social-network/users/UNFOLLOW';
const SET_USERS = 'social-network/users/SET_USERS';
const SET_CURRENT_PAGE = 'social-network/users/SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'social-network/users/SET_TOTAL_COUNT';
const TOGGLE_IS_FETCHING = 'social-network/users/TOGGLE_IS_FETCHING';
const TOGGLE_FOLLOWING_IN_PROGRESS = 'social-network/users/TOGGLE_FOLLOWING_IN_PROGRESS';

const followAC = (id) => ({ type: FOLLOW, userId: id });
const unfollowAC = (id) => ({ type: UNFOLLOW, userId: id });
const setUsersAC = (users) => ({ type: SET_USERS, users });
const setCurrentPageAC = (page) => ({ type: SET_CURRENT_PAGE, page });
const setTotalCountAC = (totalCount) => ({ type: SET_TOTAL_COUNT, totalCount });
const toggleIsFetchingAC = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
const toggleFollowingProgressAC = (inProgress, id) => ({ type: TOGGLE_FOLLOWING_IN_PROGRESS, inProgress, id });


const followUnfollow = async (dispatch, apiMethod, actionCreator, id) => {
  try {
    dispatch(toggleFollowingProgressAC(true, id));
    const response = await apiMethod(id);
  
    if (response.resultCode === 0) {
      dispatch(actionCreator(id))
    } else {
      throw new FollowUnfollowError(response.messages[0])
    }
  } finally {
    dispatch(toggleFollowingProgressAC(false, id));
  }
}

export const follow = (id) => {
  return (dispatch) => {
    return followUnfollow(dispatch, usersAPI.getFollow, followAC, id);
  }
}

export const unfollow = (id) => {
  return (dispatch) => {
    return followUnfollow(dispatch, usersAPI.getUnfollow, unfollowAC, id);
  }
}


export const getUsersList = (pageSize, currentPage, searchValue = '') => {
  return async (dispatch) => {
    try {
      dispatch(toggleIsFetchingAC(true));
      const response = await usersAPI.getUsersData(pageSize, currentPage, searchValue)
  
      dispatch(setUsersAC(response.items));
      dispatch(setTotalCountAC(response.totalCount));
      dispatch(setCurrentPageAC(currentPage));
    } finally {
      dispatch(toggleIsFetchingAC(false));
    }
  }
}



const initialState = {
  items: [],
  pageSize: 50,
  currentPage: 1,
  totalCount: null,
  isFetching: false,
  followingInProgress: [],
};

const usersPageReducer = (state = initialState, action) => {
  switch (action.type) {

    case FOLLOW:
      return {
        ...state,
        items: [...state.items.map(item => {
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
        items: [...state.items.map(item => {
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