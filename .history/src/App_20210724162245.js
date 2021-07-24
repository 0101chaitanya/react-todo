import React, { Component } from "react";
import TodoState from "./components/todoState";
import InputForm from "./components/InputForm";
import uniqid from "uniqid";
import { format } from "date-fns";
import css from "../App.css";
class App extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      tasksArray: JSON.parse(localStorage.getItem("tasksArray")) ?? [],
    };
  }
  handleSubmit(e, input, context) {
    input.id = uniqid();

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

    console.log(this.state.tasksArray);
    //e.target.reset();
    e.target.submit();
  }

  render() {
    //localStorage.removeItem("tasksArray");
    //localStorage.clear();
    localStorage.setItem("tasksArray", JSON.stringify(this.state.tasksArray));
    console.log(this.state.tasksArray);

    //console.log(JSON.parse(localStorage.getItem("tasksArray")));
    return (
      <div>
        <InputForm
          className="input-form"
          //item={this.cache}
          //handleNoSubmission={this.handleNoSubmission}
          handleSubmit={this.handleSubmit}
        />
        <TodoState tasksArray={this.state.tasksArray} />
      </div>
    );
  }
}

export default App;
