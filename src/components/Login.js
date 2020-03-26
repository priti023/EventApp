import React from 'react';
import { Form, Button } from 'react-bootstrap';

function Login() {
  return (
    <div className="login card">
      <Form>
        <h1 className="login1">LogIn Page</h1>
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
        <Button variant="primary" type="submit" className="submitbutton">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Login;