import { createSelector } from "reselect";

export const getUsers = (state) => state.usersPage.items;

// export const getUsers = (state) => state.usersPage.items.filter(item => true);

// export const getUsersSuperSelector = createSelector( getUsers, (users) => users.filter(item => true) )

export const getPageSize = (state) => state.usersPage.pageSize;

export const getTotalCount = (state) => state.usersPage.totalCount;

export const getCurrentPage = (state) => state.usersPage.currentPage;

export const getIsFetching = (state) => state.usersPage.isFetching;

export const getFollowingInProgress = (state) => state.usersPage.followingInProgress;