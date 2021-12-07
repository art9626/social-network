import React from 'react';
import DialogItem from './DialogItem/DialogsItem';
import Message from './Message/Message';
import classes from './Dialogs.module.css';

const Dialogs = ({ updateNewMessageText, sendMessage, newMessageText, dialogs, messages }) => {
  const dialogsElements = dialogs
    .map(item => <DialogItem key={item.id} name={item.name} id={item.id} />)
  const messagesElements = messages
    .map(item => <Message key={item.id} text={item.message} status={item.status} />)

  const onSendMessage = () => {
    sendMessage();
  }

  const onChangeMessage = (e) => {
    updateNewMessageText(e.target.value);
  }

  return (
    <div className={classes.dialogs}>
      <ul className={classes.list}>
        {dialogsElements}
      </ul>

      <div className={classes.messagesContainer}>
        {messagesElements}

        <textarea onChange={onChangeMessage} value={newMessageText} />
        <button onClick={onSendMessage}>Send message</button>
      </div>
    </div>
  );
}

export default Dialogs;