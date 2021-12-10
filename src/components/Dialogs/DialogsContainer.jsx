import { connect } from 'react-redux';
import { sendMessageCreateAction, updateMessageTextCreateAction } from '../../redux/dialogsPageReducer';
import Dialogs from './Dialogs';

const mapStateToProps = state => {
  return {
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages,
    newMessageText: state.dialogsPage.newMessageText,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => dispatch(sendMessageCreateAction()),
    updateNewMessageText: (text) => dispatch(updateMessageTextCreateAction(text)),
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;