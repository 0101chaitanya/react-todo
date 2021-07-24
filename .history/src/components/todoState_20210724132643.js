import React from "react";
import TodoItem from "./TodoItem";
import css from "../App.css";
class TodoState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: this.props.tasksArray,
    };
    this.handleChange = this.handleChange.bind(this);
    //this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }
  deleteTask(e, id) {
    this.setState((prevState) => {
      const newTd = prevState.todos.filter((todo) => {
        return todo.id === id ? false : todo;
      });
      console.log(newTd);

      return {
        todos: newTd,
      };
    });
  }
  handleChange(id) {
    this.setState((prevState) => {
      const newTodos = prevState.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });
      return {
        todos: newTodos,
      };
    });
  }
  render() {
    localStorage.setItem("tasksArray", JSON.stringify(this.state.todos));

    const todoItems = this.state.todos.map((item) => (
      <TodoItem
        key={item.id}
        item={item}
        deleteTask={this.deleteTask}
        handleChange={this.handleChange}
      />
    ));

    return <div className="todo-list">{todoItems}</div>;
  }
}

export default TodoState;
