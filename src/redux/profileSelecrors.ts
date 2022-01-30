import { RootStateType } from "./reduxStore";

export const getUserProfile = (state: RootStateType) => state.profilePage.userProfile;

export const getUserStatus = (state: RootStateType) => state.profilePage.userStatus;

export const getPosts = (state: RootStateType) => state.profilePage.posts;

export const getInWaiting = (state: RootStateType) => state.profilePage.inWaiting;