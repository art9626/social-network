import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { reset } from 'redux-form';
import { WithAuthRedirect } from '../../hoc/withAuthRedirect';
import { WithURLData } from '../../hoc/withUrlData';
import { getAuth } from '../../redux/authSelecrors';
import { addPostAC, setProfileData, getProfile, getStatus, setPhoto, setStatus } from '../../redux/profilePageReducer';
import { getInWaiting, getPosts, getUserProfile, getUserStatus } from '../../redux/profileSelecrors';
import Profile from './Profile';


class ProfileContainer extends React.Component {

  getCurrentUserData() {
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

  componentDidMount() {
    this.getCurrentUserData();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.userId !== this.props.userId) {
      this.getCurrentUserData();
    }
  }


  render() {
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
    inWaiting: getInWaiting(state),
  }
};

export default compose(
  connect(mapStateToProps, { getProfile, getStatus, setStatus, reset, addPostAC, setPhoto, setProfileData }),
  WithAuthRedirect,
  WithURLData,  
)(ProfileContainer);