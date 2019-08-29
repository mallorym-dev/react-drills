import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super()
    this.state = {
      title: 'My to-do list',
      toDoList: ['walk dog', 'clean room'],
      item: ''
    }
    this.handleChoreChange = this.handleChoreChange.bind(this)
    this.addChore = this.addChore.bind(this)
  }
  handleChoreChange(e) {
    this.setState({item: e.target.value})
  }

  addChore(item) {
    this.setState({toDoList: [...this.state.toDoList, this.state.item]})
  }
  
  render() {
    return (
      <div className="App">
       <div className = 'title'>{this.state.title}</div>
       <input type = 'text' name = 'item' value = {this.state.item} onChange = {(e) => this.handleChoreChange(e)}></input>
       <button onClick = {(item) => this.addChore(this.state.item)}>Add</button>
       <p>
         {this.state.toDoList.map((el, i, arr) => (<p>{el}</p>))}
       </p>
    
      </div>
    );
  }
}

export default App;
