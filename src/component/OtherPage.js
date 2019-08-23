import React, { Component } from "react";
import '../styles/Login.css';
export default class Login extends Component {
    constructor(props) {
      super(props);
      this.state = {
      };
    }
    componentDidMount()
    {
        if(!this.props.isAuthenticated)
        {
            this.props.history.push("/login");
        }
    }
    render() {
      return (
        <div className="Login">     
              <label>Email</label>  
              <label>Password</label>
        </div>
      );
    }
  }