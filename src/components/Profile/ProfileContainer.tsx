import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { compose } from 'redux';
import { reset } from 'redux-form';
import { WithAuthRedirect } from '../../hoc/withAuthRedirect';
import { WithURLData } from '../../hoc/withUrlData';
import { getAuth } from '../../redux/authSelecrors';
import { actions, setProfileData, getProfile, getStatus, setPhoto, setStatus } from '../../redux/profilePageReducer';
import { getInWaiting, getPosts, getUserProfile, getUserStatus } from '../../redux/profileSelecrors';
import { RootStateType } from '../../redux/reduxStore';
import Profile from './Profile';

type StatePropsType = ConnectedProps<typeof connector>;

type OwnPropsType = {
  userId: number | null;
};

type PropsType = StatePropsType & OwnPropsType;

class ProfileContainer extends React.Component<PropsType> {

  // @ts-ignore
  userId: number | null;

  getCurrentUserData() {
    this.userId = this.props.userId;

    if (!this.userId) {
      const { isAuth, id } = this.props.auth;
      if (isAuth === 'authorized') {
        this.userId = id;
      } 
    }
    
    if (typeof this.userId === 'number') {
      this.props.getProfile(this.userId);
      this.props.getStatus(this.userId);
    }
  }

  componentDidMount() {
    this.getCurrentUserData();
  }

  componentDidUpdate(prevProps: PropsType) {
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

const mapStateToProps = (state: RootStateType) => {
  return {
    userProfile: getUserProfile(state),
    userStatus: getUserStatus(state),
    auth: getAuth(state),
    posts: getPosts(state),
    inWaiting: getInWaiting(state),
  }
};

const connector = connect(mapStateToProps, { getProfile, getStatus, setStatus, reset, addPost: actions.addPost, setPhoto, setProfileData });


export default compose(
  connector,
  WithAuthRedirect,
  WithURLData,  
)(ProfileContainer);