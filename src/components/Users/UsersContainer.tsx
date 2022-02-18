import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { actions, FilterType, follow, getUsersList, unfollow } from "../../redux/usersPageReducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import { getCurrentPage, getErrorMessages, getFilter, getFollowingInProgress, getIsFetching, getPageSize, getTotalCount, getUsers } from "../../redux/usersSelecrors";
import Pagination from "../common/Pagination/Pagination";
import Search from "./Search/Search";
import { RootStateType } from "../../redux/reduxStore";
import { getIsAuth } from "../../redux/authSelecrors";
import { compose } from "redux";
import { withSearchParams } from "../../hoc/withSearchParams";
import SearchWithFormik from "./Search/SearchWithFormik";

type PropsType = ConnectedProps<typeof connector>;


class UsersContainer extends React.Component<PropsType> {

  componentDidMount() {
    if (this.props.filter) {
      const { pageSize, currentPage, filter } = this.props;
      this.props.getUsersList(pageSize, currentPage, filter.term, filter.friend);
    }
  }

  componentDidUpdate(prevProps: PropsType) {
    if (this.props.filter) {
      if (prevProps.filter !== this.props.filter || prevProps.currentPage !== this.props.currentPage) {
        const { pageSize, currentPage, filter } = this.props;
        this.props.getUsersList(pageSize, currentPage, filter.term, filter.friend);
      }
    }
  }

  render() {
    return (
      <>
        <SearchWithFormik
        filter={this.props.filter as FilterType}
          setFilter={this.props.setFilter}
          setCurrentPage={this.props.setCurrentPage}
        />


        {
          this.props.isFetching
            ? <Preloader />
            : <>
              <Pagination
                totalCount={this.props.totalCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                setCurrentPage={this.props.setCurrentPage}
                portionSize={20}
                filter={this.props.filter as FilterType}
              />
              <Users
                users={this.props.users}
                followingInProgress={this.props.followingInProgress}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                isAuth={this.props.isAuth}
                errorMessage={this.props.errorMessages.onFollowUnfollowErrorMessage}
              />
            </>
        }
      </>
    )
  }
}




const mapStateToProps = (state: RootStateType) => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalCount: getTotalCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
    isAuth: getIsAuth(state),
    errorMessages: getErrorMessages(state),
    filter: getFilter(state),
  }
}


const connector = connect(mapStateToProps, {
  follow,
  unfollow,
  getUsersList,
  setFilter: actions.setFilter,
  setCurrentPage: actions.setCurrentPage,
})




export default compose<React.ComponentType>(
  connector,
  withSearchParams
)(UsersContainer)