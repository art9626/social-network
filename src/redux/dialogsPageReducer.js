const SEND_MESSAGE = 'SEND-MESSAGE';

export const sendMessageAC = (text) => ({ type: SEND_MESSAGE, text });

const initialState = {
  dialogs: [
    {id: 1, name: 'Aaaa'},
    {id: 2, name: 'Bbb'},
    {id: 3, name: 'Ccc'},
  ],
  messages: [
    {id: 1, message: 'Hey!', status: 'from'},
    {id: 2, message: 'How are you?', status: 'from'},
    {id: 3, message: 'Im ok)', status: 'to'},
  ],
}

const dialogsPageReducer = (state = initialState, action) => {

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