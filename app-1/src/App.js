import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super()
    this.state = {text: ''}
  }
  text(e) {
    console.log(e)
    this.setState({text: e.target.value}) 
  }
  
  render() {
    return (
      <div className="App" >
       <input onChange = {(e) => this.text(e)}/>
       <p>
         {this.state.text}
       </p>
      </div>
    );
  }
}

export default App;
