import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {connect} from "react-redux";
import {compose} from "redux";
import {createFeedback} from "../../actions/feedbackActions";

class FeedbackForm extends React.Component {
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

  renderTextArea = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <textarea {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = formValues => {
    const { subject, message, isAnonymous } = formValues;
    this.props.createFeedback(subject, message, isAnonymous);
  };

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      >
        <Field name="subject" component={this.renderInput} label="Enter Subject" type="text"/>
        <Field name="message" component={this.renderTextArea} label="Enter Message"/>
        <Field name="isAnonymous" component={this.renderInput} label="Anonymous" type="checkbox"/>
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = formValues => {
  const errors = {};

  if (!formValues.subject) {
    errors.email = 'You must enter subject';
  }

  if (!formValues.message) {
    errors.password = 'You must enter message';
  }

  return errors;
};

export default compose(
  connect(null, { createFeedback }),
  reduxForm({
    form: 'feedbackForm',
    validate
  })
)(FeedbackForm);