import { getAuthUser } from "./authReducer";

type InitSuccessActionType = {
  type: typeof INIT_SUCCESS
}

type InitialStateType = {
  init: boolean
}



const INIT_SUCCESS = 'social-network/app/INIT_SUCCESS';


const initSuccessAC = (): InitSuccessActionType => ({ type: INIT_SUCCESS });


export const initApp = () => {
  return (dispatch: Function) => {
    dispatch(getAuthUser())
      .then(() => {
        dispatch(initSuccessAC())
      });
  }
}



const initialState: InitialStateType = {
  init: false,
}

const appReducer = (state = initialState, action: InitSuccessActionType): InitialStateType => {
  switch (action.type) {

    case INIT_SUCCESS:
      return {
        ...state,
        init: true,
      };


    default:
      return state;
  }
}




export default appReducer;