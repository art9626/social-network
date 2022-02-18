import React from 'react';
import { connect } from 'react-redux';
import { InitialStateType, logoutUser } from '../../redux/authReducer';
import { RootStateType } from '../../redux/reduxStore';
import Header from './Header';

type StatePropsType = {
  userData: InitialStateType;
}
type DispatchPropsType = {
  logoutUser: () => void;
}
type PropsType = StatePropsType & DispatchPropsType;

// type PropsType = ConnectedProps<typeof connector>;


class HeaderContainer extends React.Component<PropsType>{
  render() {
    return (
      <Header {...this.props} logoutUser={this.props.logoutUser} />
    )
  }
}



const mapStateToProps = (state: RootStateType) => {
  return {  
    userData: state.auth,
  }
};

// const connector = connect(mapStateToProps, { logoutUser });

// export default connector(HeaderContainer);

export default connect<StatePropsType, DispatchPropsType, {}, RootStateType>(mapStateToProps, { logoutUser })(HeaderContainer);