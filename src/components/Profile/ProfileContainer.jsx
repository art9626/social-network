import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { reset } from 'redux-form';
import { WithAuthRedirect } from '../../hoc/withAuthRedirect';
import { WithURLData } from '../../hoc/withUrlData';
import { getAuth } from '../../redux/authSelecrors';
import { addPostAC, getProfile, getStatus, setStatus } from '../../redux/profilePageReducer';
import { getPosts, getUserProfile, getUserStatus } from '../../redux/profileSelecrors';
import Profile from './Profile';


class ProfileContainer extends React.Component {

  componentDidMount() {

    this.userId = this.props.userId;

    if (!this.userId) {
      const { isAuth, id } = this.props.auth;
      if (isAuth === 'authorized') {
        this.userId = id;
      } 
    }
    this.props.getProfile(this.userId);
    this.props.getStatus(this.userId);
  }


  render() {

    window.props.push(this.props.posts);

    console.log('ProfileContainer');

    return ( 
      <Profile {...this.props} userId={this.userId} myId={this.props.auth.id} />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    userProfile: getUserProfile(state),
    userStatus: getUserStatus(state),
    auth: getAuth(state),
    posts: getPosts(state),
  }
};

export default compose(
  connect(mapStateToProps, { getProfile, getStatus, setStatus, reset, addPostAC }),
  WithURLData,
  WithAuthRedirect
)(ProfileContainer);