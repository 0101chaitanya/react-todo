import React, { Component } from "react";
import TodoState from "./components/todoState";
import InputForm from "./components/InputForm";
class App extends Component {
  constructor() {
    super();
    // this.tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    this.changeState = this.changeState.bind(this);
    this.state = {
      tasksArray: JSON.parse(localStorage.getItem("tasksArray")) || [],
    };
  }
  changeState(input) {
    this.setState({
      tasksArray: this.state.tasksArray.concat(input),
    });
  }

  render() {
    //const stateSet = JSON.parse(localStorage.getItem("tasks"));
    localStorage.clear();
    localStorage.setItem("tasksArray", JSON.stringify(this.state.tasksArray));
    console.log(JSON.parse(localStorage.getItem("tasksArray")));
    return (
      <div>
        <InputForm changeState={this.changeState} />
        <TodoState />;
      </div>
    );
  }
}

export default App;
