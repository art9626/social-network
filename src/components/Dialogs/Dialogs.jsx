import React from 'react';
import DialogItem from './DialogItem/DialogsItem';
import Message from './Message/Message';
import classes from './Dialogs.module.css';
import AddMessageForm from './AddMessageForm/AddMessageForm';

const Dialogs = ({ sendMessage, dialogs, messages, resetForm }) => {

  const dialogsElements = dialogs
    .map(item => <DialogItem key={item.id} name={item.name} id={item.id} />)
  const messagesElements = messages
    .map(item => <Message key={item.id} text={item.message} status={item.status} />)


  const addNewMessage = (values) => {
    sendMessage(values.newMessage)
    resetForm('dialogsAddMessageForm')
  }

  return (
    <div className={classes.dialogs}>
      <ul className={classes.list}>
        {dialogsElements}
      </ul>

      <div className={classes.messagesContainer}>
        {messagesElements}

        <AddMessageForm onSubmit={addNewMessage} />
      </div>
    </div>
  );
}

export default Dialogs;