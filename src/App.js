import './App.css';
import React from 'react';
import Header from './Header';
import Home from './Home';
import Footer from './Footer';
import SignIn from './SignIn';
import Login from './Login';
import Jobs from './Jobs';
import FindJobs from './FindJobs';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Wave from './Wave';
import Createsp from './Createsp';
import Createep from './Createep';
import Signine from './Signine';
import Headerlogged from './Headerlogged';
import Profile from './Profile';
import { Component } from 'react';
import First from './First';
import PostJob from './PostJob';
import Edit from './Edit';
import Home2 from './Home2';

export class App extends Component{
  redirect(){
    if(localStorage.getItem('token')){
      return './findjobs'
    }
    else return './headerlogged'
  }
  render(){
    return (
      <Router>
        <div className="app">
          <Switch>
            <Route path="/edit">
              <Headerlogged></Headerlogged>
              <Edit></Edit>
            </Route>
            <Route path="/postJob">
              <Headerlogged></Headerlogged>
              <PostJob></PostJob>
            </Route>
            <Route path="/profile">
              <Headerlogged></Headerlogged>
              <Profile></Profile>
            </Route>
            <Route path="/headerlogged">
              <Headerlogged></Headerlogged>
              <Home></Home>
              <Footer></Footer>
            </Route>
            <Route path="/signine">
              <Header></Header>
              <Signine></Signine>
            </Route>
            <Route path="/createep">
              <Header></Header>
              <Createep></Createep>
            </Route>
            <Route path="/createsp">
              <Header></Header>
              <Createsp></Createsp>
            </Route>
            <Route path="/findjobsprofile">
              <Headerlogged></Headerlogged>
              <FindJobs></FindJobs>
            </Route>
            <Route path="/findjobs">
              <Header></Header>
              <FindJobs></FindJobs>
            </Route>
            <Route path="/wave">
              <Wave></Wave>
            </Route>
            <Route path="/sigin">
              <Header></Header>
              <SignIn></SignIn>
            </Route>
            <Route path="/login">
              <Header></Header>
              <Login></Login>
            </Route>
            <Route path="/jobs">
              <Header></Header>
              <Jobs></Jobs>
            </Route>
            <Route path="/2">
              <Headerlogged></Headerlogged>
              <Home2></Home2>
              <Footer></Footer>
            </Route>
            <Route path="/">
              <First></First>
            </Route>
          </Switch>
        </div>
      </Router>
    )
  }
}
export default App;
