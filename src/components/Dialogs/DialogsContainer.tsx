import { connect, ConnectedProps } from 'react-redux';
import { compose } from 'redux';
import { reset } from 'redux-form';
import { WithAuthRedirect } from '../../hoc/withAuthRedirect';
import { actions } from '../../redux/dialogsPageReducer';

import { RootStateType } from '../../redux/reduxStore';
import Dialogs from './Dialogs';

export type DialogsPropsType = ConnectedProps<typeof connector>;


const mapStateToProps = (state: RootStateType) => {
  return {
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages,
  }
}


const connector = connect(mapStateToProps, { sendMessage: actions.sendMessage, resetForm: reset });

export default compose(
  connector,
  WithAuthRedirect
)(Dialogs);


