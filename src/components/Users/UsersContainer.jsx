import { connect } from "react-redux";
import { followAC, setUsersAC, unFollowAC } from "../../redux/usersPageReducer";
import Users from "./Users";

const mapStateToProps = state => {
  return {
    users: state.usersPage.items,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    follow: (id) => dispatch(followAC(id)),
    unFollow: (id) => dispatch(unFollowAC(id)),
    setUsers: (users) => dispatch(setUsersAC(users))
  }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;