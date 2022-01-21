import React from "react";
import { connect } from "react-redux";
import { follow, getUsersList, unfollow } from "../../redux/usersPageReducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import { getCurrentPage, getFollowingInProgress, getIsFetching, getPageSize, getTotalCount, getUsers } from "../../redux/usersSelecrors";
import Pagination from "../common/Pagination/Pagination";
import Search from "./Search/Search";
import Error from "../common/Error/Error";

class UsersContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchValue: '',
    }
  }


  componentDidMount() {
    this.props.getUsersList(this.props.pageSize, this.props.currentPage);
  }

  onPageClick = (page) => {
    this.props.getUsersList(this.props.pageSize, page, this.state.searchValue);
  }

  onChangeSearch = (e) => {
    clearTimeout(this.searchInputTimerId);
    this.setState({ searchValue: e.target.value });
    this.searchInputTimerId = setTimeout(() => {
      this.props.getUsersList(this.props.pageSize, 1, this.state.searchValue);
    }, 300);
  }

  onClearSearch = async () => {
    // Функция setState асинхронная, если не дождаться ее выполнения, то getUsersList запустится
    // с неактуальным значением локального стейта, потому что тот еще не успеет обновиться
    await this.setState({ searchValue: '' });

    this.props.getUsersList(this.props.pageSize, this.props.currentPage, this.state.searchValue);
  }


  render() {
    return (
      <>
        {
          this.props.errorMessage && <Error errorMessage={this.props.errorMessage} />
        }


        <Search onChangeSearch={this.onChangeSearch} onClearSearch={this.onClearSearch} searchValue={this.state.searchValue} />
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