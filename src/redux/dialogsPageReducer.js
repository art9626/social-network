const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';

export const sendMessageCreateAction = () => ({ type: SEND_MESSAGE });
export const updateMessageTextCreateAction = (text) => ({ type: UPDATE_MESSAGE_TEXT, text });

const dialogsPageReducer = (state, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      const newMessage = {
        id: state.messages.length + 1, 
        status: 'to',
        message: state.newMessageText,
      }
    
      state.newMessageText = '';
      state.messages.push(newMessage);

      return state;

    case UPDATE_MESSAGE_TEXT:
      state.newMessageText = action.text;
      return state;

    default:
      return state;
  }
}

export default dialogsPageReducer;