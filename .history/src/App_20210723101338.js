import React, { Component } from "react";
import TodoState from "./components/todoState";
import InputForm from "./components/InputForm";
class App extends Component {
  constructor() {
    super();
    this.tasks = JSON.parse(localStorage.getItem("state")) || [];
  }
  render() {
    console.log(this.tasks);
    return (
      <div>
        <InputForm />
        <TodoState tasks={this.tasks} />;
      </div>
    );
  }
}

export default App;
