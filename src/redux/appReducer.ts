import { InferActionsType, RootStateType } from './reduxStore';
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { getAuthUser } from "./authReducer";


type InitialStateType = typeof initialState

type ActionsType = InferActionsType<typeof actions>;

type ThunkActionType = ThunkAction<void, RootStateType, unknown, ActionsType>


const INIT_SUCCESS = 'social-network/app/INIT_SUCCESS';

const actions = {
  initSuccess: () => ({ type: INIT_SUCCESS }) as const,
}




export const initAppThunk = (): ThunkActionType => {
  return (dispatch: ThunkDispatch<RootStateType, unknown, ActionsType>) => {
    dispatch(getAuthUser())
      .then(() => {
        dispatch(actions.initSuccess())
      });
  }
}



const initialState = {
  init: false,
}

const appReducer = (state = initialState, action: ActionsType): InitialStateType => {
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