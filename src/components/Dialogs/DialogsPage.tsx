import React from 'react';
import DialogItem from './DialogItem/DialogsItem';
import Message from './Message/Message';
import classes from './Dialogs.module.css';
import AddMessageForm from './AddMessageForm/AddMessageForm';
import { useDispatch, useSelector } from 'react-redux';
import { getDialogs, getMessages } from '../../redux/dialogsPageSelectors';
import { reset } from 'redux-form';
import { actions } from '../../redux/dialogsPageReducer';

export type AddMessageFormDataType = {
  newMessage: string;
}

const DialogsPage: React.FC = React.memo(() => {
  const dialogs = useSelector(getDialogs);
  const messages = useSelector(getMessages);

  const dispatch = useDispatch();

  const resetForm = (form: string) => dispatch(reset(form));
  const sendMessage = (text: string) => dispatch(actions.sendMessage(text));

  const dialogsElements = dialogs
    .map(item => <DialogItem key={item.id} name={item.name} id={item.id} />)
  const messagesElements = messages
    .map(item => <Message key={item.id} text={item.message} status={item.status} />)


  const addNewMessage = (values: AddMessageFormDataType) => {
    sendMessage(values.newMessage);
    resetForm('dialogsAddMessageForm');
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
});

export default DialogsPage;