import React from "react";
import { connect } from "react-redux";
import { follow, getUsersList, unfollow } from "../../redux/usersPageReducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import { getCurrentPage, getFollowingInProgress, getIsFetching, getPageSize, getTotalCount, getUsers } from "../../redux/usersSelecrors";
import Pagination from "../common/Pagination/Pagination";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsersList(this.props.pageSize, this.props.currentPage);
  }

  onPageClick = (page) => {
    this.props.getUsersList(this.props.pageSize, page);
  }


  render() {
    // console.log('render users');
    return (
      <>
        <Pagination totalCount={this.props.totalCount} pageSize={this.props.pageSize} currentPage={this.props.currentPage} onPageClick={this.onPageClick} portionSize={20} />

        {
          this.props.isFetching
            ? <Preloader />
            : <Users
              users={this.props.users}
              followingInProgress={this.props.followingInProgress}
              follow={this.props.follow}
              unfollow={this.props.unfollow}
              isAuth={this.props.isAuth}
            />
        }

      </>
    )
  }
}




const mapStateToProps = state => {
  // console.log('map Users');
  return {
    users: getUsers(state),
    // users: getUsersSuperSelector(state),
    pageSize: getPageSize(state),
    totalCount: getTotalCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
    isAuth: state.auth.isAuth,
  }
}




export default connect(mapStateToProps, {
  follow,
  unfollow,
  getUsersList
})(UsersContainer);