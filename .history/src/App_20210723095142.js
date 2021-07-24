import React, { Component } from "react";
import TodoState from "./components/todoState";
import InputForm from "./components/InputForm";
class App extends Component {
  constructor() {
    super();
    this.state.tasks = JSON.parse(localStorage.getItem("state")) || [];
  }
  render() {
    return (
      <div>
        <InputForm />
        <TodoState />;
      </div>
    );
  }
}

export default App;
