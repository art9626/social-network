const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS'


export const followAC = (id) => ({ type: FOLLOW, userId: id });
export const unFollowAC = (id) => ({ type: UNFOLLOW, userId: id });
export const setUsersAC = (users) => ({ type: SET_USERS, users });

const initialState = {
  items: [],
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
        items: [...state.items, ...action.users],
      };


    default:
      return state;
  }
}

export default usersPageReducer;