import React, { Component } from "react";
import TodoState from "./components/todoState";
import InputForm from "./components/InputForm";
class App extends Component {
  constructor() {
    super();
    this.changeState = this.changeState.bind(this);
    this.handleNoSubmission = this.handleNoSubmission.bind(this);
    this.state = {
      tasksArray: JSON.parse(localStorage.getItem("tasksArray")) || [],
    };
    this.cache = {
      description: "",
      date: format(new Date(), "yyyy-MM-dd"),
      priority: "medium",
      id: uniqid(),
      PriorityTags: ["medium"],
      dateTags: [],
    };
  }
  handleSubmit(input, e) {
    this.setState({
      tasksArray: this.state.tasksArray.concat(input),
    });
    e.target.submit();
  }
  handleNoSubmission(e, cache) {
    this.setState(cache);
    e.target.reset();
  }
  render() {
    //localStorage.removeItem("tasksArray");
    localStorage.setItem("tasksArray", JSON.stringify(this.state.tasksArray));

    //console.log(JSON.parse(localStorage.getItem("tasksArray")));
    return (
      <div>
        <InputForm
          item={this.cache}
          handleNoSubmission={this.handleNoSubmission}
          handleSubmit={this.handleSubmit}
        />
        <TodoState data={this.state.tasksArray} />;
      </div>
    );
  }
}

export default App;
