import { usersAPI } from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_FOLLOWING_IN_PROGRESS = 'TOGGLE_FOLLOWING_IN_PROGRESS';

export const followAC = (id) => ({ type: FOLLOW, userId: id });
export const unfollowAC = (id) => ({ type: UNFOLLOW, userId: id });
export const setUsersAC = (users) => ({ type: SET_USERS, users });
export const setCurrentPageAC = (page) => ({ type: SET_CURRENT_PAGE, page });
export const setTotalCountAC = (totalCount) => ({ type: SET_TOTAL_COUNT, totalCount });
export const toggleIsFetchingAC = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
export const toggleFollowingProgressAC = (inProgress, id) => ({ type: TOGGLE_FOLLOWING_IN_PROGRESS, inProgress, id });


export const follow = (id) => {
  return (dispatch) => {
    dispatch(toggleFollowingProgressAC(true, id));
    usersAPI.getFollow(id)
      .then(res => {
        if (res.resultCode === 0) {
          dispatch(followAC(id))
        }
        dispatch(toggleFollowingProgressAC(false, id));
      })
  }
}

export const unfollow = (id) => {
  return (dispatch) => {
    dispatch(toggleFollowingProgressAC(true, id));
    usersAPI.getUnfollow(id)
      .then(res => {
        if (res.resultCode === 0) {
          dispatch(unfollowAC(id))
        }
        dispatch(toggleFollowingProgressAC(false, id));
      })
  }
}


export const getUsersList = (pageSize, currentPage) => {
  return (dispatch) => {
    dispatch(toggleIsFetchingAC(true));
    usersAPI.getUsersData(pageSize, currentPage)
      .then(res => {
        dispatch(setUsersAC(res.items));
        dispatch(setTotalCountAC(res.totalCount));
        dispatch(toggleIsFetchingAC(false));
        dispatch(setCurrentPageAC(currentPage));
      });
  }
}



const initialState = {
  items: [],
  pageSize: 50,
  currentPage: 1,
  totalCount: null,
  isFetching: false,
  followingInProgress: [],

  fake: 10,
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