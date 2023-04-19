import React from 'react';
import { connect } from 'react-redux';
import {fetchFeedbacks} from "../actions/feedbackActions";
import './css/FeedbackList.css';
import {Pagination} from "semantic-ui-react";
import {Link} from "react-router-dom";

class EmployeeList extends React.Component {

  state = {
    activePage: 1,
    pageSize: 10,
    searchEmail: ''
  };

  componentDidMount() {
    this.props.fetchFeedbacks('');
  }

  handlePageChange = (event, { activePage }) => {
    this.setState({ activePage });
    this.props.fetchFeedbacks('', activePage - 1, this.state.pageSize);
  };

  handleEmailChange = (event) => {
    this.setState({ searchEmail: event.target.value });
  }

  handleSearch = () => {
    this.setState({ activePage: 1 });
    this.props.fetchFeedbacks(this.state.searchEmail, 0, this.state.pageSize);
  };

  renderFeedbacks() {
    return this.props.feedbacks.map((feedback, index) => {
      return (
        <tr key={index}>
          <td>{feedback.userEmail}</td>
          <td>{feedback.subject}</td>
          <td>{new Date(feedback.createdTimeStamp).toLocaleDateString()}</td>
          <td><Link to={`/feedback/${feedback.id}`} className="ui inverted button">View</Link></td>
        </tr>
      );
    });
  }

  render() {
    const { activePage } = this.state;
    const totalPages = Math.ceil(this.props.totalItems / this.props.pageSize);

    return (
      <div>
        <div className="ui input">
          <input type="text" placeholder="Search by email" value={this.state.searchEmail} onChange={this.handleEmailChange} />
          <button className="ui button" onClick={this.handleSearch}>Search</button>
        </div>
        <table className="ui selectable inverted table">
          <thead>
          <tr>
            <th>Email</th>
            <th>Subject</th>
            <th>Timestamp</th>
            <th></th>
          </tr>
          </thead>
          <tbody>
          {this.renderFeedbacks()}
          </tbody>
        </table>
        <Pagination
          activePage={activePage}
          totalPages={totalPages}
          onPageChange={this.handlePageChange}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  let list;
  if (state.feedbacks.feedbacks) {
    list = Object.values(state.feedbacks.feedbacks)
  }
  return {
    feedbacks: list ? list : [],
    totalItems: state.feedbacks.totalElements,
    pageSize: 10,
    activePage: 1
  };
};

export default connect(
  mapStateToProps,
  { fetchUsers }
)(EmployeeList);