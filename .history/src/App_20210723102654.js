import React, { Component } from "react";
import TodoState from "./components/todoState";
import InputForm from "./components/InputForm";
class App extends Component {
  constructor() {
    super();
    this.tasks = JSON.parse(localStorage.getItem("state")) || [];
    this.handleChange = this.handleChange.bind(this);
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
        <InputForm handleChange={this.handleChange} />
        <TodoState />;
      </div>
    );
  }
}

export default App;
