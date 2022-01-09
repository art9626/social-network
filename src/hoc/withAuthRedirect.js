import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

export const WithAuthRedirect = (Component) => {
  
  const AuthRedirectComponent = (props) => {

    if (props.isAuth === 'notAuthorized' && !props.userId) {
      return <Navigate to='/login' />
    };

    return <Component {...props} />;
  }


  const mapStateToProps = (state) => {
    return {
      isAuth: state.auth.isAuth,
    }
  }


  return connect(mapStateToProps)(AuthRedirectComponent);;
}


