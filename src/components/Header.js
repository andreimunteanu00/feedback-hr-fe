import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { checkLogin, login, logout } from '../actions/authActions';
import jwt_decode from 'jwt-decode';
import { Menu } from 'semantic-ui-react';

class Header extends React.Component {
  componentDidMount() {
    const token = localStorage.getItem('token');
    if (token) {
      this.props.checkLogin(jwt_decode(token));
    }
  }

  renderMemberLinks() {
    return (
      <Menu.Menu position="right">
        <Menu.Item as={Link} to="/feedback">
          Feedback
        </Menu.Item>
        <Menu.Item as={Link} to="/profile">
          Profile
        </Menu.Item>
        <Menu.Item onClick={() => this.props.logout()}>Logout</Menu.Item>
      </Menu.Menu>
    );
  }

  renderAdminLinks() {
    return (
      <Menu.Menu position="right">
        <Menu.Item as={Link} to="/">
          Dashboard
        </Menu.Item>
        <Menu.Item onClick={() => this.props.logout()}>Logout</Menu.Item>
      </Menu.Menu>
    );
  }

  renderGuestLinks() {
    return (
      <Menu.Menu position="right">
        <Menu.Item as={Link} to="/">
          Home
        </Menu.Item>
      </Menu.Menu>
    );
  }

  hasRole(obj, roleName) {
    return obj.roleSet.some(
      (role) => role.name.toLowerCase() === roleName.toLowerCase()
    );
  }

  render() {
    return (
      <Menu inverted>
        <Menu.Item header>HR App</Menu.Item>
        {this.props.isAuthenticated &&
        this.hasRole(this.props.user, 'admin')
          ? this.renderAdminLinks()
          : this.props.isAuthenticated &&
          this.hasRole(this.props.user, 'employee')
            ? this.renderMemberLinks()
            : this.renderGuestLinks()}
      </Menu>
    );
  }
}

const mapStateToProps = (state) => {
  return { isAuthenticated: state.auth.isAuthenticated, user: state.auth.user };
};

export default connect(mapStateToProps, { login, checkLogin, logout })(Header);