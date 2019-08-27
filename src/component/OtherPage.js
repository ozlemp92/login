import React, { Component } from "react";
import { Button, FormGroup, FormControl } from "react-bootstrap";
import '../styles/Login.css';
export default class Login extends Component {
    constructor(props) {
      super(props);
      this.state = {
      };
      this.handleLogOutSubmit = this.handleLogOutSubmit.bind(this);
    }
    componentDidMount()
    {
        debugger;
        let user = JSON.parse(localStorage.getItem('user'));
        if(user != null)
        {
            debugger;
            // const { from } = this.props.location.state || { from: { pathname: "/" } };
                    this.props.history.push(this.props.location);
        }
        else  this.props.history.push(this.props.location);
    }
    handleLogOutSubmit() {
      debugger;
    try {
    //  this.props.userHasAuthenticated(false);
      localStorage.removeItem('user');
      this.props.history.push("/login");
    } catch (e) {
      alert(e.message);
    }
  }
    render() {
      return (
        <div className="Login">    

              <label>otherpagee</label>  
              <label>sggsg</label>
              <Button onClick={this.handleLogOutSubmit}
              block
              bsSize="large"
              type="submit"
            >
              LoginOut
            </Button>
        </div>
      )
    }
  }