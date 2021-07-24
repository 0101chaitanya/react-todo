import React from "react";
import TodoItem from "./TodoItem";
import css from "../App.css";
class TodoState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: this.props.data,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }
  deleteTask(id) {
    console.log(this.state.todos);
    this.setState((prevState) => {
      const newTodos = prevState.todos.filter((todo) => {
        if (todo.id === id) {
          return false;
        }
        return todo;
      });
      console.log(this.state.newTodos);

      return {
        todos: newTodos,
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
  handleSubmit(e) {}

  handleEdit(e) {}
  handleDelete(e) {}
  render() {
    //console.log(this.state.todos);
    const todoItems = this.state.todos.map((item) => (
      <TodoItem
        key={item.id}
        item={item}
        deleteTask={this.deleteTask}
        handleChange={this.handleChange}
        handleEdit={this.handleEdit}
      />
    ));

    return <div className="todo-list">{todoItems}</div>;
  }
}

export default TodoState;
