import React from 'react';
import { Button } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link, useHistory, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastr";

class MyProfile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            logout: false
        };
    }
    
    logout() {
        localStorage.setItem('authData', '');
        alert("LogOut Successfully");
        // this.ToastContainer.success("logout");
        this.setState({
            logout: true
        });
    }
    render() {
        if (this.state.logout === true) {
            return (<Redirect to="/" ></Redirect>);
        }
        return (
            <div>
                <h1>This is Myprofile Page</h1>
                <Button onClick={()=>this.logout()}>Logout</Button>
            </div>
        );
    }
  
}

export default MyProfile;