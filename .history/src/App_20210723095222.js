import React, { Component } from "react";
import TodoState from "./components/todoState";
import InputForm from "./components/InputForm";
class App extends Component {
  constructor() {
    super();
    this.state.tasks = JSON.parse(localStorage.getItem("state")) || [];
  }
  render() {
    console.log(this.state.tasks);
    return (
      <div>
        <InputForm />
        <TodoState tasks={this.state.tasks} />;
      </div>
    );
  }
}

export default App;
