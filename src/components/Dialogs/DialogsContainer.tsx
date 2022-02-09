import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { compose } from 'redux';
import { reset } from 'redux-form';
import { WithAuthRedirect } from '../../hoc/withAuthRedirect';
import { actions } from '../../redux/dialogsPageReducer';
import { getDialogs, getMessages } from '../../redux/dialogsPageSelectors';

import { RootStateType } from '../../redux/reduxStore';
import Dialogs from './Dialogs';

export type DialogsPropsType = ConnectedProps<typeof connector>;


const mapStateToProps = (state: RootStateType) => {
  return {
    dialogs: getDialogs(state),
    messages: getMessages(state),
  }
}


const connector = connect(mapStateToProps, { sendMessage: actions.sendMessage, resetForm: reset });

// Обязательно типизируем возврощаемое значение функции compose, для того, что бы React.lazy в App.tsx понял, что это значение является функциональным компонентом
export default compose<React.FunctionComponent>(
  connector,
  WithAuthRedirect
)(Dialogs);


