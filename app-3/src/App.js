import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super()
    this.state = {text: ['spaghetti', 'ice cream', 'sushi', 'bologna', 'cheese'], storeValue: ''}
  }
  text(e) {
    this.setState({storeValue: e.target.value})
  }
  
  
  
  
  
  
  
  render() {
    return (
      <div className="App">
        <input onChange = {(e) => this.text(e)}/>
        <p>
          {this.state.text.filter((el, i, arr) => {
            return el.startsWith(this.state.storeValue)
          })}
        </p>
      </div>
    );
  }
}

export default App;
