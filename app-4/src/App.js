import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super()
    this.state = {
      userName: '',
      password: ''
    }
    
  
  }
  handleUserNameChange(e) {
    this.setState({userName: e.target.value})
  }
  handlepasswordChange(e) {
    this.setState({password: e.target.value})
  }

  
  
  
  
  render() {
    return (
      <div className="App">
        <input type = 'text' onChange = {(e) => this.handleUserNameChange(e)}/>
        <input type = 'password' onChange = {(e) => this.handlepasswordChange (e)}/>
        <button onClick = {(e) => alert('Username: ' + this.state.userName + 'Password: ' + this.state.password)} >Login</button>
      </div>
    );
  }
}

export default App;
