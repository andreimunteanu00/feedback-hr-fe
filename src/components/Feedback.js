import React from 'react';
import {connect} from "react-redux";
import {getFeedback} from "../actions/feedbackActions";

class Feedback extends React.Component {
  componentDidMount() {
    this.props.getFeedback(5);
    console.log(this.props.user);
  }

  render() {
    return (
      <div>Feedback works!</div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { feedback: state.feedbacks.feedback, p: ownProps };
};

export default connect(
  mapStateToProps,
  { getFeedback }
)(Feedback);