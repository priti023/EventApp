import React from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link,useHistory,Redirect} from "react-router-dom";

class  Login1 extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
        password: '',
        isLogin: false,
    };
}

handleChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    })

    
}

// onSubmit = (e) => {
//    e.preventDefault();
//    const userdata = {
//     userName: this.state.userName,
//     password: this.state.password
//    }
//   console.log(userdata)
//   }
    render(){

      if(this.state.isLogin===true){
        return(<Redirect to="/dashbord" ></Redirect>);
      }
     
  return (
    <div className="login card">
    <Form>
      <h1 className="login1">LogIn1 Page</h1>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Please Enter Your emailId" className="textbox"  name='userName'
                        value={this.state.userName}
                        onChange={e => this.handleChange(e)}/>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Please Enter your Password"  name='password'
                        value={this.state.password}
                        onChange={e => this.handleChange(e)}/>
      </Form.Group>
      {/* <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group> */}
      <Button variant="primary" type="submit" className="submitbutton"  onClick={(e) => this.getData(e)}>Submit</Button>
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
   userName: this.state.userName,
   password: this.state.password
  }
 var response = await axios.post('https://powerful-inlet-21450.herokuapp.com/api/login',
 userdata,
  { headers: { 'Content-Type': 'application/json' } }
)

  if(response.data.status=='success'){
    console.log(response)
      this.setState({
        isLogin:true
    });  
    localStorage.setItem('userData',JSON.stringify(response.data.details)) ; 
    localStorage.setItem('authData', response.data.token); 
  }else if(response.data.status=='error'){
alert(response.data.msg)
console.log(response.data.msg);
  }else{
    console.log(Error);
    // console.log("not available");
    return <Redirect to='/header'></Redirect>
  }
}
  
}

export default Login1;