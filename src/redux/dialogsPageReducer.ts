import { InferActionsType } from "./reduxStore";

type InitialStateType = typeof initialState

type DialogType = {
  id: number
  name: string
}

type MessageType = {
  id: number
  message: string
  status: string
}

type ActionsType = InferActionsType<typeof actions>;


const SEND_MESSAGE = 'social-network/dialogs-page/SEND-MESSAGE';

export const actions = {
  sendMessage: (text: string) => ({ type: SEND_MESSAGE, text }) as const,
}


const initialState = {
  dialogs: [
    {id: 1, name: 'Aaaa'},
    {id: 2, name: 'Bbb'},
    {id: 3, name: 'Ccc'},
  ] as Array<DialogType>,
  messages: [
    {id: 1, message: 'Hey!', status: 'from'},
    {id: 2, message: 'How are you?', status: 'from'},
    {id: 3, message: 'Im ok)', status: 'to'},
  ] as Array<MessageType>,
}

const dialogsPageReducer = (state = initialState, action: ActionsType): InitialStateType => {

  switch (action.type) {
    case SEND_MESSAGE: {
      return {
        ...state, 
        messages: [
          ...state.messages,
          {
            id: state.messages.length + 1, 
            status: 'to',
            message: action.text,
          }
        ],
      };
    }

    default:
      return state;
  }
}

export default dialogsPageReducer;