import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super()
    this.state = {image: 'https://assetsnffrgf-a.akamaihd.net/assets/m/502013285/univ/art/502013285_univ_lsr_xl.jpg'}
  }
  
  
  render() {
    return (
      <div className="App">
        <img src = {this.state.image} />
      </div>
    );
  }
}

export default App;
