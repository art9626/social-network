import React from 'react';
import DialogItem from './DialogItem/DialogsItem';
import Message from './Message/Message';
import classes from './Dialogs.module.css';
import { sendMessageCreateAction, updateMessageTextCreateAction } from '../../redux/dialogsPageReducer';

const Dialogs = ({ dialogsPage, dispatch }) => {

  const dialogsElements = dialogsPage.dialogs
    .map(item => <DialogItem key={item.id} name={item.name} id={item.id} />)

  const messagesElements = dialogsPage.messages
    .map(item => <Message key={item.id} text={item.message} status={item.status} />)

  const onSendMessage = () => {
    dispatch(sendMessageCreateAction());
  }

  const onChangeMessage = (e) => {
    dispatch(updateMessageTextCreateAction(e.target.value));
  }

  return (
    <div className={classes.dialogs}>
      <ul className={classes.list}>
        {dialogsElements}
      </ul>

      <div className={classes.messagesContainer}>
        {messagesElements}

        <textarea onChange={onChangeMessage} value={dialogsPage.newMessageText} />
        <button onClick={onSendMessage}>Send message</button>
      </div>
    </div>
  );
}

export default Dialogs;