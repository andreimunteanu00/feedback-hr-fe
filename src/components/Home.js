import React from 'react';
import {connect} from 'react-redux';
import Dashboard from "./Dashboard";
import ResetPasswordForm from "./forms/ResetPasswordForm";
import LoginForm from "./forms/LoginForm";
import FeedbackForm from "./forms/FeedbackForm";

class Home extends React.Component {

  hasRole(obj, roleName) {
    return obj.roleSet.some(
      (role) => role.name.toLowerCase() === roleName.toLowerCase()
    );
  }

  render() {
    return (
      <div>
        {!this.props.resetPassword ? this.props.isAuthenticated ? this.hasRole(this.props.user, 'admin') ?
          <Dashboard/> : <FeedbackForm/> : <LoginForm/> : <ResetPasswordForm/>}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {isAuthenticated: state.auth.isAuthenticated, user: state.auth.user, resetPassword: state.auth.resetPassword};
};

export default connect(mapStateToProps)(Home);