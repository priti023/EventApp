import React from 'react';
import { Button,Form } from 'react-bootstrap';

function Registration() {
  return (
    <div className="registrationpage">
    <Form className="registration card">
    <h4 className="login1">Registration Page</h4>
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
  <Button variant="primary" type="submit" className="submitbutton">
    Submit
  </Button>
</Form>

</div>
  );
  abc();
}

var abc=function getData() {
  console.log("test");
  fetch('https://powerful-inlet-21450.herokuapp.com/api/login',
   {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({"userName":"amit@gmail.com" , "password":"amit@123"}),
})
  }

  console.log(abc);

export default Registration;