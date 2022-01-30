import { RootStateType } from './reduxStore';
// import { createSelector } from "reselect";

export const getUsers = (state: RootStateType) => state.usersPage.items;

// export const getUsers = (state: RootStateType) => state.usersPage.items.filter(item => true);

// export const getUsersSuperSelector = createSelector( getUsers, (users) => users.filter(item => true) )

export const getPageSize = (state: RootStateType) => state.usersPage.pageSize;

export const getTotalCount = (state: RootStateType) => state.usersPage.totalCount;

export const getCurrentPage = (state: RootStateType) => state.usersPage.currentPage;

export const getIsFetching = (state: RootStateType) => state.usersPage.isFetching;

export const getFollowingInProgress = (state: RootStateType) => state.usersPage.followingInProgress;