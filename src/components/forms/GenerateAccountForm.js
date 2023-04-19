import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from "react-redux";
import {compose} from "redux";
import {createUser} from "../../actions/userActions";

class GenerateAccountForm extends React.Component {
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
    const { email } = formValues;
    this.props.createUser(email);
  };

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      >
        <Field name="email" component={this.renderInput} label="Enter Email" type="text"/>
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = formValues => {
  const errors = {};

  if (!formValues.email) {
    errors.email = 'You must enter email';
  }

  return errors;
};

export default compose(
  connect(null, { createUser }),
  reduxForm({
    form: 'generateAccountForm',
    validate
  })
)(GenerateAccountForm);