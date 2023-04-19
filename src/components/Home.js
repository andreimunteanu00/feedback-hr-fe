import React from 'react';
import { connect } from 'react-redux';
import Dashboard from "./Dashboard";
import ResetPasswordForm from "./forms/ResetPasswordForm";

class Home extends React.Component {

  render() {
    return (
      <div>
        {!this.props.resetPassword ? <Dashboard/> : <ResetPasswordForm/>}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { isAuthenticated: state.auth.isAuthenticated, user: state.auth.user, resetPassword: state.auth.resetPassword };
};

export default connect(mapStateToProps)(Home);