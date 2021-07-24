import React from "react";
import "./App.css";
import TodoItem from "./components/todoItem";
import todosData from "./todoExamples";

class App extends React.Component() {
  constructor() {
    super();
    this.state = {
      todo: todosData,
    };
  }
  render() {
    const todoItems = todosData.map((item) => (
      <TodoItem key={item.id} item={item} />
    ));

    return <div className="todo-list">{todoItems}</div>;
  }
}
export default App;
