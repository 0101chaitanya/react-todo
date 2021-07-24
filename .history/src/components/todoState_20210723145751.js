import React from "react";
import TodoItem from "./TodoItem";
import css from "../App.css";
class TodoState extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: this.props.data,
    };
    this.handleChange = this.handleChange.bind(this);
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
    console.log(this.state.todos);
    const todoItems = this.state.todos.map((item) => (
      <TodoItem key={item.id} item={item} handleChange={this.handleChange} />
    ));

    return <div className="todo-list">{todoItems}</div>;
  }
}

export default TodoState;
