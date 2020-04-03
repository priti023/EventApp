import React from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link,useHistory,Redirect} from "react-router-dom";

class  Registration1 extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email:'',
      phonenumber:'',
      password:'',
      isregistration: false
    };
}

handleChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    })
}
    render(){
      if(this.state.isregistration===true){
        return(<Redirect to="/dashbord" ></Redirect>);
      }

  return (
    <div className="registrationpage">
    <Form className="registration card">
    <h4 className="login1">Registration1 Page</h4>
      <Form.Group controlId="formGroupEmail">
    <Form.Label>First Name</Form.Label>
    <Form.Control type="text" placeholder="First Name"  name='firstName'
                        value={this.state.firstName}
                        onChange={e => this.handleChange(e)}/>
  </Form.Group>
  <Form.Group controlId="formGroupEmail">
    <Form.Label>Last Name</Form.Label>
    <Form.Control type="text" placeholder="Last Name"  name='lastName'
                        value={this.state.lastName}
                        onChange={e => this.handleChange(e)}/>
  </Form.Group>
  <Form.Group controlId="formGroupEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" name='email'
                        value={this.state.email}
                        onChange={e => this.handleChange(e)}/>
  </Form.Group>
  <Form.Group controlId="formGroupEmail">
    <Form.Label>Phone Number</Form.Label>
    <Form.Control type="number" placeholder="Enter Phone Number"  name='phonenumber'
                        value={this.state.phonenumber}
                        onChange={e => this.handleChange(e)}/>
  </Form.Group>
  <Form.Group controlId="formGroupPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password"  name='password'
                        value={this.state.password}
                        onChange={e => this.handleChange(e)}/>
  </Form.Group>
  <Button variant="primary" type="submit" className="submitbutton" onClick={(e) => this.getData(e)}> Submit</Button>
</Form>

</div>
  );
}

componentWillMount() {
  // this.getData()
}
async getData(e) {
  e.preventDefault();
  const userdata = {
    firstName: this.state.firstName,
    lastName: this.state.lastName,
    email:this.state.email,
    phonenumber:this.state.phonenumber,
    password:this.state.password
   
  }
 var response = await axios.post('https://powerful-inlet-21450.herokuapp.com/api/register',
 userdata,
  { headers: { 'Content-Type': 'application/json' } }
);
  console.log( response.data)
  if(response.data.status=='success'){
    console.log(response)
      this.setState({
        isregistration:true
    });     
  }else{
    alert(response.data.msg)
    console.log(Error);
  }
}
}


export default Registration1;