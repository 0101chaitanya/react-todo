import React from "react";
import TodoItem from "./TodoItem";
import css from "../App.css";
class TodoState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: this.props.tasksArray || [],
    };
    this.handleChange = this.handleChange.bind(this);
    //this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.callSubmit = this.callSubmit.bind(this);
  }
  callSubmit(e, id, sentState) {
    this.setState(
      (prevState) => {
        const newTd = prevState.todos.map((todo) => {
          if (todo.id === id) {
            todo = sentState;
            return todo;
          } else {
            return todo;
          }
        });
        console.log(newTd);

        return {
          todos: newTd,
        };
      },
      (e) =>
        localStorage.setItem("tasksArray", JSON.stringify(this.state.todos))
    );
  }

  deleteTask(e, id) {
    this.setState(
      (prevState) => {
        const newTd = prevState.todos.filter((todo) => {
          return todo.id === id ? false : todo;
        });
        console.log(newTd);

        return {
          todos: newTd,
        };
      },
      (e) =>
        localStorage.setItem("tasksArray", JSON.stringify(this.state.todos))
    );
  }
  handleChange(id) {
    this.setState(
      (prevState) => {
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
      },
      (e) =>
        localStorage.setItem("tasksArray", JSON.stringify(this.state.todos))
    );
  }
  render() {
    const todoItems = this.state.todos.map((item) => (
      <TodoItem
        key={item.id}
        item={item}
        callSubmit={this.callSubmit}
        deleteTask={this.deleteTask}
        handleChange={this.handleChange}
      />
    ));

    const low = this.state.todos.filter((item) => {
      return item.priority === "low";
    });
    const medium = this.state.todos.filter((item) => {
      return item.priority === "medium";
    });
    const high = this.state.todos.filter((item) => {
      return item.priority === "high";
    });
    console.log(low, medium, high);
    return (
      <div>
        <div className="todo-list">{todoItems}</div>
      </div>
    );
  }
}

export default TodoState;
