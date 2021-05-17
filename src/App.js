import './App.css';
import Header from './Header';
import Home from './Home';
import Footer from './Footer';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path='/'>
            <Header/>
            <Home/>
            <Footer/>
          </Route>
          <Route path='/login'>
            <Header/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default App;
