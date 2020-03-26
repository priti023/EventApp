import React from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

class  Registration1 extends React.Component  {
    render(){
  return (
    <div className="registrationpage">
    <Form className="registration card">
    <h4 className="login1">Registration1 Page</h4>
      <Form.Group controlId="formGroupEmail">
    <Form.Label>First Name</Form.Label>
    <Form.Control  placeholder="First Name" />
  </Form.Group>
  <Form.Group controlId="formGroupEmail">
    <Form.Label>Last Name</Form.Label>
    <Form.Control placeholder="Last Name" />
  </Form.Group>
  <Form.Group controlId="formGroupEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>
  <Form.Group controlId="formGroupEmail">
    <Form.Label>Phone Number</Form.Label>
    <Form.Control type="number" placeholder="Enter Phone Number" />
  </Form.Group>
  <Form.Group controlId="formGroupPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Button variant="primary" type="submit" className="submitbutton" onClick={this.getData}> Submit</Button>
</Form>

</div>
  );
}

componentWillMount() {
  this.getData()
}
async getData() {
 var response = axios.post('http://localhost:5000/api/register',
  {"email":"amit@gmail.com" , "password":"amit@123"},
  { headers: { 'Content-Type': 'application/json' } }
)
  console.log(await response)
}
}


export default Registration1;