import React from 'react';
import './App.css';
import Dashbord from './component/Dashbord'
import Login1 from './component/Login1';
import Registration1 from './component/Registration1';
import Main from './components/Main';
import { Button } from 'react-bootstrap';
import { Dropdown } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import CommercePoint from './component/Commerce-Point';
import Sales from './component/Sales-Purchase';
import Samudra from './component/Samudra-Shastra';
import Vastu from './component/Vastu-Shastra';
import PhysicalEducation from './component/Physical-Education';
import Events from './component/Events';
import MyProfile from './component/MyProfile';

function App() {
  return (
    <Router>
      <div className="container-fluid">
        <>
          <Button variant="outline-primary"> <Link to="/">Home</Link></Button>
          {
            localStorage.getItem('authData') ?
              (<div>
                <Button variant="outline-primary">
                  <select variant="outline-primary">
                    <option value="Education">Education</option>
                    <option value="1">Java</option>
                    <option value="2">Angular</option>
                    <option value="3">Html5</option>
                    <option value="4">Css3</option>
                    <option value="5">ReactJs</option>
                  </select>
                </Button>
                <Button variant="outline-primary"><Link to="/commerce">Commerce-Point</Link></Button>
                <Button variant="outline-primary"><Link to="/samudra">Samudra-Shastra</Link></Button>
                <Button variant="outline-primary"><Link to="/vastu">Vastu-Shastra</Link></Button>
                <Button variant="outline-primary"><Link to="/sales">Sale/Purchase</Link></Button>
                <Button variant="outline-primary"><Link to="/physical">Physical-Education</Link></Button>
                <Button variant="outline-primary">Part of life Routine</Button>
                <Button variant="outline-primary"><Link to="/events">Register Your Event</Link></Button>
                <Button variant="outline-primary"><Link to="/myprofile">My Profile</Link></Button>
              </div>) :
              (<div>
                <Button variant="outline-primary"> <Link to="/login1">Login</Link></Button>
                <Button variant="outline-primary"><Link to="/registration1">Registration</Link></Button>
              </div>)
          }

        </>
        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Switch>
          {/* <Route exact path="/header">
            <Header />
          </Route> */}
          <Route path="/login1">
            <Login1 />
          </Route>
          <Route path="/registration1">
            <Registration1 />
          </Route>
          <Route path="/dashbord">
            <Dashbord />
          </Route>
          <Route path="/commerce">
            <CommercePoint />
          </Route>
          <Route path="/sales">
            <Sales />
          </Route>
          <Route path="/samudra">
            <Samudra />
          </Route>
          <Route path="/physical">
            <PhysicalEducation />
          </Route>
          <Route path="/vastu">
            <Vastu />
          </Route>
          <Route path="/events">
            <Events />
          </Route>
          <Route path="/myprofile">
            <MyProfile />
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
