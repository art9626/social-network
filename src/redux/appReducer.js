import { getAuthUser } from "./authReducer";

const INIT_SUCCESS = 'INIT_SUCCESS';


const initSuccessAC = () => ({ type: INIT_SUCCESS });

export const initApp = () => {
  return (dispatch) => {
    dispatch(getAuthUser())
      .then(() => {
        dispatch(initSuccessAC())
      });
  }
}



const initialState = {
  init: false,
}

const appReducer = (state = initialState, action) => {
  switch (action.type) {

    // case 'FAKE': 
    //   return {
    //     ...state,
    //   }

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