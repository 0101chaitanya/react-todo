import React, { Component } from "react";
import TodoState from "./components/todoState";
import InputForm from "./components/InputForm";
class App extends Component {
  constructor() {
    super();
    // this.tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    this.changeState = this.changeState.bind(this);
    this.state = {
      tasksArray: [],
    };
  }
  changeState(input) {
    this.setState({
      tasksArray: tasksArray.concat(this.state.input),
    });
  }

  render() {
    //const stateSet = JSON.parse(localStorage.getItem("tasks"));
    console.log(this.state.tasksArray);
    return (
      <div>
        <InputForm changeState={this.changeState} />
        <TodoState />;
      </div>
    );
  }
}

export default App;
