import React, { Component } from "react";
import TodoState from "./components/todoState";
import InputForm from "./components/InputForm";
class App extends Component {
  constructor() {
    super();
    this.tasks = JSON.parse(localStorage.getItem("state")) || [];
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    console.log(this.state.task);

    const { name, value } = e.target;
    this.setState({
      task: { [name]: value },
    });
    console.log(this.state.task);
  }

  render() {
    console.log(this.tasks);
    return (
      <div>
        <InputForm handleChange={this.handleChange} />
        <TodoState />;
      </div>
    );
  }
}

export default App;
