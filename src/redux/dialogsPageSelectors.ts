import { RootStateType } from './reduxStore';

export const getDialogs = (state: RootStateType) => state.dialogsPage.dialogs;

export const getMessages = (state: RootStateType) => state.dialogsPage.messages;