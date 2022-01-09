import React from 'react';
import { connect } from 'react-redux';
import ProfileInfo from './ProfileInfo';
import { getProfile, getStatus, setStatus } from '../../../redux/profilePageReducer';
import { WithAuthRedirect } from '../../../hoc/withAuthRedirect';
import { WithURLData } from '../../../hoc/withUrlData';
import { compose } from 'redux';


class ProfileInfoContainer extends React.Component {

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
    return (
      <>
        <ProfileInfo {...this.props} userId={this.userId} myId={this.props.auth.id} />
      </>
    );
  }
}



const mapStateToProps = (state) => {
  return {
    userProfile: state.profilePage.userProfile,
    userStatus: state.profilePage.userStatus,
    auth: state.auth,
  }
};

export default compose(
  connect(mapStateToProps, { getProfile, getStatus, setStatus }),
  WithURLData,
  WithAuthRedirect
)(ProfileInfoContainer);