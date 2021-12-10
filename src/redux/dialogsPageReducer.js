const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';

export const sendMessageCreateAction = () => ({ type: SEND_MESSAGE });
export const updateMessageTextCreateAction = (text) => ({ type: UPDATE_MESSAGE_TEXT, text });

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
  newMessageText: '',
}

const dialogsPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE: {
      const messageText = state.newMessageText;

      return {
        ...state, 

        messages: [
          ...state.messages,
          {
            id: state.messages.length + 1, 
            status: 'to',
            message: messageText,
          }
        ],

        newMessageText: '',
      };
    }
  

    case UPDATE_MESSAGE_TEXT: {
      return {...state, newMessageText: action.text};
    }
    

    default:
      return state;
  }
}

export default dialogsPageReducer;