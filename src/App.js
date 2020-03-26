import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Dashbord from './component/Dashbord'
import Header1 from './component/Header1';
// import Login from './components/Login';
// import Registration from './components/Registration';
import Login from './component/Login1';
import Registration from './component/Registration1';
import Main from './components/Main';
import { Button } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      {/* <Header1></Header1> */}
      <div className="container">
        <>
          <Button variant="outline-primary"> <Link to="/">Home</Link></Button>
          <Button variant="outline-primary"> <Link to="/login1">Login</Link></Button>
          <Button variant="outline-primary"><Link to="/registration1">Registration</Link></Button>

        </>
        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/header">
            <Header />
          </Route>
          <Route exact path="/login1">
            <Login />
          </Route>
          <Route exact path="/registration1">
            <Registration />
          </Route>
          <Route exact path="/dashbord">
            <Dashbord />
          </Route>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
