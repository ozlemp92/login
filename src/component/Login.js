import React, { Component } from "react";
import { Button, FormGroup, FormControl } from "react-bootstrap";
import '../styles/Login.css';
import { Auth } from "aws-amplify";
export default class Login extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        email: "",
        password: "",
        user:null
      };
    }
    componentDidMount()
    {
        debugger;
        let user = JSON.parse(localStorage.getItem('user'));
        if(user != null)
        {
          debugger;
                    this.props.history.push(this.props.location);
        }
        else  this.props.history.push(this.props.location);
    }
    validateForm() {
      return this.state.email.length > 0 && this.state.password.length > 0;
    }
  
    handleChange = event => {
      this.setState({
        [event.target.id]: event.target.value
      });
    }
  
    handleSubmit = event => {
        debugger;
      event.preventDefault();
      try {
         Auth.signIn(this.state.email, this.state.password);
        this.props.userHasAuthenticated(true);
        let user = this.state.email+ this.state.password;
        localStorage.setItem('user', JSON.stringify(user));
        this.props.history.push("/otherPage");
      } catch (e) {
        alert(e.message);
      }
    }
  
    render() {
      return (
        <div className="Login">
          <form onSubmit={this.handleSubmit}>
            <FormGroup controlId="email" bsSize="large">
              <label>Email</label>
              <FormControl
                autoFocus
                type="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup controlId="password" bsSize="large">
              <label>Password</label>
              <FormControl
                value={this.state.password}
                onChange={this.handleChange}
                type="password"
              />
            </FormGroup>
            <Button
              block
              bsSize="large"
              disabled={!this.validateForm()}
              type="submit"
            >
              Login
            </Button>
          </form>
        </div>
      )
    }
  }