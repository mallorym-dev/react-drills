import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super()
    this.state = {text: ['spaghetti', 'ice cream' , 'sushi', 'bologna', 'cheese']}
  }

  
  
  
  
  
  
  render() {
    return (
      <div className="App">
       <p>
         {this.state.text.map(function(el, i, arr){
           console.log(el)
           return <p>{el}</p>
         })}
       </p>
      </div>
    );
  }
}

export default App;
