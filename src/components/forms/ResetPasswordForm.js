import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from "react-redux";
import {compose} from "redux";
import {resetPassword} from "../../actions/userActions";

class ResetPasswordForm extends React.Component {
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
    const { password } = formValues;
    this.props.resetPassword(password);
  };

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      >
        <Field name="password" component={this.renderInput} label="Enter New Password" type="password"/>
        <Field name="confirmPassword" component={this.renderInput} label="Confirm Password" type="password"/>
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = formValues => {
  const errors = {};

  if (!formValues.password) {
    errors.password = 'You must enter password';
  }

  if (!formValues.confirmPassword) {
    errors.confirmPassword = 'You must enter password';
  }

  if (formValues.password !== formValues.confirmPassword) {
    errors.confirmPassword = 'Password doesn\'t match';
  }

  return errors;
};

export default compose(
  connect(null, { resetPassword }),
  reduxForm({
    form: 'resetPasswordForm',
    validate
  })
)(ResetPasswordForm);