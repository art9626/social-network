import React from 'react';
import { sendMessageCreateAction, updateMessageTextCreateAction } from '../../redux/dialogsPageReducer';
import StoreContext from '../../StoreContext';
import Dialogs from './Dialogs';

const DialogsContainer = () => {

  return <StoreContext.Consumer> 
    {
      store => {
        const state = store.getState();

        const sendMessage = () => {
          store.dispatch(sendMessageCreateAction());
        }

        const updateNewMessageText = (text) => {
          store.dispatch(updateMessageTextCreateAction(text));
        }

        return (
          <Dialogs
            dialogs={state.dialogsPage.dialogs}
            messages={state.dialogsPage.messages}
            newMessageText={state.dialogsPage.newMessageText}
            sendMessage={sendMessage}
            updateNewMessageText={updateNewMessageText}
          />
        );
      }
    }
  </StoreContext.Consumer>;
}

export default DialogsContainer;