import React, { Component } from "react";
import TodoState from "./components/todoState";
import InputForm from "./components/InputForm";
class App extends Component {
  constructor() {
    super();
    this.tasks = JSON.parse(localStorage.getItem("state")) || [];
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e, state) {
    this.setState({
      state: { tasks: this.state.tasks.concat[this.state.task] },
    });
    e.preventDefault();
    localStorage.setItem("state", JSON.stringify(state.tasks));

    //e.target.submit();
  }

  render() {
    console.log(this.tasks);
    return (
      <div>
        <InputForm handleSubmit={this.handleSubmit} />
        <TodoState />;
      </div>
    );
  }
}

export default App;
