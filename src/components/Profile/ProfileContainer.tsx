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

type ProfileContainerPropsType = ConnectedProps<typeof connector> & OwnPropsType;
type OwnPropsType = {
  userId: number | null;
};



class ProfileContainer extends React.Component<ProfileContainerPropsType> {

  // @ts-ignore
  isOwner: boolean;

  getCurrentUserData() {
    let userId = this.props.userId;

    if (!userId) {
      const { isAuth, id } = this.props.auth;
      if (isAuth === 'authorized') {
        userId = id;
      } 
      this.isOwner = userId === id;
    }
    
    if (typeof userId === 'number') {
      this.props.getProfile(userId);
      this.props.getStatus(userId);
    }
  }

  componentDidMount() {
    this.getCurrentUserData();
  }

  componentDidUpdate(prevProps: ProfileContainerPropsType) {
    if (prevProps.userId !== this.props.userId) {
      this.getCurrentUserData();
    }
  }


  render() {
    return ( 
      <Profile {...this.props} isOwner={this.isOwner} />
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


// Обязательно типизируем возврощаемое значение функции compose, для того, что бы React.lazy в App.tsx понял, что это значение является функциональным компонентом
export default compose<React.ComponentType>(
  connector,
  WithURLData,  
  WithAuthRedirect,
)(ProfileContainer);