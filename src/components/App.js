import React from "react";
import {Route, Router, Routes} from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import history from "../history";
import LoginForm from "./forms/LoginForm";
import {connect} from "react-redux";
import FeedbackForm from "./forms/FeedbackForm";
import FeedbackList from "./FeedbackList";
import GenerateAccountForm from "./forms/GenerateAccountForm";
import Feedback from "./Feedback";

const App = () => {
  return (
    <Router location={history.location} navigator={history} history={history}>
      <Header/>
      <div className="ui container">
        <Routes>
          <Route path="/" exact element={<Home/>} history={history}/>
          <Route path="/login" exact element={<LoginForm/>} history={history}/>
          <Route path="/feedback" exact element={<FeedbackForm/>} history={history}/>
          <Route path="/feedback/:userEmail" exact element={<Feedback/>} history={history}/>
          <Route path="/feedback-list" exact element={<FeedbackList/>} history={history}/>
          <Route path="/generate-account" exact element={<GenerateAccountForm/>} history={history}/>
        </Routes>
      </div>
    </Router>
  );
}

export default connect()(App);