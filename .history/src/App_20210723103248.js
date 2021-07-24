import React, { Component } from "react";
import TodoState from "./components/todoState";
import InputForm from "./components/InputForm";
class App extends Component {
  constructor() {
    super();
    this.tasks = JSON.parse(localStorage.getItem("state")) || [];
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    this.setState({
      tasks: this.state.tasks.concat[this.state.task],
    });
    e.preventDefault();
    console.log(this.cache);
    localStorage.setItem("state", JSON.stringify(this.cache));

    //e.target.submit();
  }

  render() {
    console.log(this.tasks);
    return (
      <div>
        <InputForm handleChange={(e) => this.handleChange(e.this.state)} />
        <TodoState />;
      </div>
    );
  }
}

export default App;
