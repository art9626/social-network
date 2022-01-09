import React from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../../redux/authReducer';
import Header from './Header';

class HeaderContainer extends React.Component {
  render() {
    return (
      <Header {...this.props} logoutUser={this.props.logoutUser} />
    )
  }
}




const mapStateToProps = (state) => {
  return {
    userData: state.auth,
  }
}

export default connect(mapStateToProps, { logoutUser })(HeaderContainer)