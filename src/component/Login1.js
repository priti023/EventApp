import React from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link,useHistory,Redirect} from "react-router-dom";

class  Login1 extends React.Component  {
  // state = { redirect: null };
    render(){
  return (
    <div className="login card">
    <Form>
      <h1 className="login1">LogIn1 Page</h1>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Please Enter Your emailId" className="textbox" />
        {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Please Enter your Password" />
      </Form.Group>
      <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit" className="submitbutton"  onClick={this.getData}>Submit</Button>
    </Form>
  </div>
  );
}
componentWillMount() {
  this.getData()
}
async getData() {
 var response = await axios.post('http://localhost:5000/api/login',
  {"userName":"amit@gmail.com" , "password":"amit@123"},
  { headers: { 'Content-Type': 'application/json' } }
)

  if(response.data.status=='success'){
      console.log("data");
      return(<Redirect to="dashbord" ></Redirect>);
  }else{
    console.log("not available");
    return <Redirect to='/header'></Redirect>
  }
}
  
}

export default Login1;