import React, { Component } from "react";
import TodoState from "./components/todoState";
import InputForm from "./components/InputForm";
import uniqid from "uniqid";
import { format } from "date-fns";

class App extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      tasksArray: JSON.parse(localStorage.getItem("tasksArray")) ?? [],
    };
    this.cache = {
      description: "",
      date: format(new Date(), "yyyy-MM-dd"),
      priority: "medium",
      id: () => new uniqid(),
      PriorityTags: ["medium"],
      dateTags: [],
      completed: false,
    };
  }
  handleSubmit(e, input, context) {
    e.preventDefault();
    this.setState(
      (prevState) => ({
        tasksArray: prevState.tasksArray.concat(input),
      }),
      () => {
        localStorage.setItem(
          "tasksArray",
          JSON.stringify(this.state.tasksArray)
        );
      }
    );
    context.setState({
      state: this.cache,
    });

    console.log(this.state.tasksArray);
    //e.target.reset();
    e.target.submit();
  }

  render() {
    //localStorage.removeItem("tasksArray");
    //localStorage.clear();
    //localStorage.setItem("tasksArray", JSON.stringify(this.state.tasksArray));
    console.log(this.state.tasksArray);

    //console.log(JSON.parse(localStorage.getItem("tasksArray")));
    return (
      <div>
        <InputForm
          item={this.cache}
          //handleNoSubmission={this.handleNoSubmission}
          handleSubmit={this.handleSubmit}
        />
        <TodoState tasksArray={this.state.tasksArray} />;
      </div>
    );
  }
}

export default App;
