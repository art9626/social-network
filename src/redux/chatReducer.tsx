import { ThunkAction } from "redux-thunk";
import { chatApi, MessageDataType } from "../api/chatApi";
import { InferActionsType, RootStateType } from "./reduxStore";




export type InitialStateType = typeof initialState;

type ActionsType = InferActionsType<typeof actions>;

type ThunkActionType = ThunkAction<Promise<void>, RootStateType, unknown, ActionsType>;


const SET_MESSAGES = 'social-network/auth/SET_MESSAGES'


const actions = {
  setMessages: (messages: MessageDataType[]) => ({ type: SET_MESSAGES, messages } as const)
}


chatApi.subscribe((messages: MessageDataType[]) => {
  console.log(messages);
})




const initialState = {
  messages: [] as MessageDataType[],
}


const chatReducer = (state = initialState, action: ActionsType): InitialStateType => {

  switch (action.type) {
   


    default:
      return state;
  }
}

export default chatReducer;