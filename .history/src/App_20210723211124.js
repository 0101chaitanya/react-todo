import React, { Component } from "react";
import TodoState from "./components/todoState";
import InputForm from "./components/InputForm";
import uniqid from "uniqid";
import { format } from "date-fns";

class App extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    //this.handleNoSubmission = this.handleNoSubmission.bind(this);
    this.state = {
      tasksArray: JSON.parse(localStorage.getItem("tasksArray")) || [],
    };
    this.cache = {
      description: "",
      date: format(new Date(), "yyyy-MM-dd"),
      priority: "medium",
      id: new uniqid(),
      PriorityTags: ["medium"],
      dateTags: [],
      completed: false,
    };
  }
  handleSubmit(e, input) {
    this.setState((prevState) => ({
      tasksArray: prevState.tasksArray.concat(input),
    }));

    e.target.submit();
  }
  /* handleNoSubmission(e) {
    this.setState(this.cache);
    //e.target.reset();
  }
   */ render() {
    //localStorage.removeItem("tasksArray");
    localStorage.setItem("tasksArray", JSON.stringify(this.state.tasksArray));

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
