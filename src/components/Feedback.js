import React from 'react';
import {connect} from "react-redux";
import {getFeedback} from "../actions/feedbackActions";
import {parseInt} from "lodash";
import { Card } from 'semantic-ui-react';

class Feedback extends React.Component {
  componentDidMount() {
    this.props.getFeedback(parseInt(window.location.href.split('/')[4]));
  }

  render() {
    if (this.props.feedback) {
      const names = this.props.feedback.user.userDetail.departmentList.map(obj => obj.name);
      const namesAsString = names.join(", ");
      return (
        <div style={{ height: '90vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <Card fluid>
            <Card.Content>
              <Card.Header>{this.props.feedback.subject}</Card.Header>
              <div className="ui grid">
                <div className="twelve wide column">
                  <Card.Meta>From: {this.props.feedback.user.userDetail.firstName} {this.props.feedback.user.userDetail.lastName}</Card.Meta>
                  <Card.Meta>Email: {this.props.feedback.user.email}</Card.Meta>
                  <Card.Meta>Created: {this.props.feedback.createdTimeStamp}</Card.Meta>
                  <Card.Meta>Department: {namesAsString}</Card.Meta>
                  <hr />
                  <Card.Description>{this.props.feedback.message}</Card.Description>
                </div>
              </div>
            </Card.Content>
          </Card>
        </div>
      );
    }
    return <div>Loading</div>;
  }
}

const mapStateToProps = (state) => {
  return { feedback: state.feedbacks.feedback };
};

export default connect(
  mapStateToProps,
  { getFeedback }
)(Feedback);