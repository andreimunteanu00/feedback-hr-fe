import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import './css/Dashboard.css';
import {Link} from "react-router-dom";


class Dashboard extends React.Component {

  render() {
    return (
      <div className="card-container">
        <Link to="/feedback-list" className="card feedback-card">
          <img src="https://via.placeholder.com/600x400" alt="FeedbackList"/>
          <div className="card-overlay">
            <h3>List of FeedbackList</h3>
            <p>View and manage employee feedback.</p>
          </div>
        </Link>
        <Link to="/generate-account" className="card account-card">
          <img src="https://via.placeholder.com/600x400" alt="Account"/>
          <div className="card-overlay">
            <h3>Generate Account</h3>
            <p>Create an account for employee.</p>
          </div>
        </Link>
        <div className="card users-card">
          <img src="https://via.placeholder.com/600x400" alt="Users"/>
          <div className="card-overlay">
            <h3>List of Employees</h3>
            <p>Manage and track employee accounts.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;