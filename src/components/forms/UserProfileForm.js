import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {connect} from "react-redux";
import {compose} from "redux";
import {getCurrentUser} from "../../actions/userActions";

class UserProfile extends React.Component {
  componentDidMount() {
    this.props.getUser();
  }

  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  renderInput = ({ input, label, meta, type="text" }) => {
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} type={type} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = formValues => {
    const { subject, message, isAnonymous } = formValues;
    this.props.createFeedback(subject, message, isAnonymous);
  };

  render() {
    if (!this.props.user) {
      return <div>Loading...</div>
    }

    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      >
        <Field name="email" component={this.renderInput} label="Enter Subject" type="text"/>
      </form>
    );
  }
}

const validate = formValues => {
  const errors = {};

  if (!formValues.email) {
    errors.email = 'You must enter subject';
  }

  if (!formValues.message) {
    errors.password = 'You must enter message';
  }

  return errors;
};

const mapStateToProps = (state) => {
  return { user: state.auth.user };
};

export default compose(
  connect(mapStateToProps, { getUser: getCurrentUser }),
  reduxForm({
    form: 'userForm',
    validate,
    enableReinitialize: true
  })
)(UserProfile);