import './App.css';
import React from 'react';
import Header from './Header';
import Home from './Home';
import Footer from './Footer';
import SignIn from './SignIn';
import Login from './Login';
import Jobs from './Jobs';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
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
          <Route path="/">
            <Header/>
            <Home/>
            <Footer/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default App;
