import { connect } from 'react-redux';
import { compose } from 'redux';
import { reset } from 'redux-form';
import { WithAuthRedirect } from '../../hoc/withAuthRedirect';
import { sendMessageAC } from '../../redux/dialogsPageReducer';
import Dialogs from './Dialogs';


const mapStateToProps = state => {
  return {
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: (text) => dispatch(sendMessageAC(text)),
    resetForm: (formName) => dispatch(reset(formName)),
  }
}

// const AuthRedirectComponent= WithAuthRedirect(Dialogs);
// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);
// export default DialogsContainer;

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  WithAuthRedirect
)(Dialogs);

