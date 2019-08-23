import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './component/Login';
import Routes from './component/Route';

class App extends Component{
  constructor(props) {
    super(props);
  
    this.state = {
      isAuthenticated: false
    };
    
  }
  
  userHasAuthenticated = authenticated => {
    this.setState({ isAuthenticated: authenticated });
  }
  

render()
{
  const childProps = {
    isAuthenticated: this.state.isAuthenticated,
    userHasAuthenticated: this.userHasAuthenticated
  };
  return (
    <div className="App">
      <header className="App-header">
        <Routes childProps={childProps} />     
      </header>
    </div>
  );
}
}
   

export default App;
