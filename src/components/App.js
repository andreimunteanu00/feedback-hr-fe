import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import LoginForm from "./forms/LoginForm";
import {connect} from "react-redux";
import FeedbackForm from "./forms/FeedbackForm";
import FeedbackList from "./FeedbackList";
import GenerateAccountForm from "./forms/GenerateAccountForm";
import Feedback from "./Feedback";
import UserProfileForm from "./forms/UserProfileForm";

const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <div className="ui container">
        <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/login" exact element={<LoginForm/>}/>
          <Route path="/feedback" exact element={<FeedbackForm/>}/>
          <Route path="/feedback/:id" exact element={<Feedback/>}/>
          <Route path="/feedback-list" exact element={<FeedbackList/>}/>
          <Route path="/generate-account" exact element={<GenerateAccountForm/>}/>
          <Route path="/profile" exact element={<UserProfileForm/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default connect()(App);