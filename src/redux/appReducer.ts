import { InferActionsType, RootStateType } from './reduxStore';
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { getAuthUser } from "./authReducer";
import { AnyAction } from 'redux';

type InitSuccessActionType = {
  type: typeof INIT_SUCCESS
}

type InitialStateType = typeof initialState

type ActionsType = InferActionsType<typeof actions>;

type ThunkActionType = ThunkAction<void, RootStateType, unknown, ActionsType>


const INIT_SUCCESS = 'social-network/app/INIT_SUCCESS';

const actions = {
  initSuccess: () => ({ type: INIT_SUCCESS }) as const,
}




export const initApp = (): ThunkActionType => {
  return (dispatch: ThunkDispatch<RootStateType, unknown, AnyAction>) => {
    dispatch(getAuthUser())
      .then(() => {
        dispatch(actions.initSuccess())
      });
  }
}



const initialState = {
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