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
        debugger;
        if(!this.props.isAuthenticated)
        {
            debugger;
            this.props.history.push("/login")
        }
    }
    render() {
      return (
        <div className="Login">     
              <label>otherpagee</label>  
              <label>sggsg</label>
        </div>
      )
    }
  }