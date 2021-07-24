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
      state: { tasks: state.tasks.concat[state.task] },
    });
    e.preventDefault();
    localStorage.setItem("state", JSON.stringify(state.tasks));

    //e.target.submit();
  }

  render() {
    const stateSet = JSON.parse(localStorage.getItem("state"));
    return (
      <div>
        <InputForm stateSet={stateSet} handleSubmit={this.handleSubmit} />
        <TodoState />;
      </div>
    );
  }
}

export default App;
