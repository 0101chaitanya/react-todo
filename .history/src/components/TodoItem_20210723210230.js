import React from "react";
import InputForm from "./InputForm";
class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    //this.cache = this.props.item;
    this.state = {
      isEditing: false,
      others: {
        ...this.props.item,
      },
    };
    this.editTask = this.editTask.bind(this);
  }
  editTask() {
    this.setState((prevState) => ({
      isEditing: !prevState.isEditing,
    }));
    console.log(this.state.isEditing);
  }
  handleSubmit(input, e) {
    this.setState((prevState) => ({
      others: input,
      isEditing: prevState.isEditing,
    }));
    e.target.submit();
  }
  handleNoSubmission(e) {
    this.setState(this.cache);
    e.target.reset();
  }

  render() {
    const completedStyle = {
      fontSize: "italic",
      color: "#cdcdcd",
      textDecoration: "line-through",
    };
    if (this.state.isEditing) {
      return (
        <div>
          <InputForm
            item={this.props.item}
            handleNoSubmission={this.handleNoSubmission}
            onSubmit={this.handleSubmit}
          />
        </div>
      );
    } else {
      return (
        <div className="todo-item">
          <input
            type="checkbox"
            checked={this.props.item.completed}
            onChange={(e) => {
              this.props.handleChange(this.props.item.id);
            }}
          />
          <div style={this.props.item.completed ? completedStyle : null}>
            <span>Note: {this.props.item.description}, </span>
            <span>Date: {this.props.item.date}, </span>
            <span>Priority: {this.props.item.priority}.</span>{" "}
          </div>
          <button onClick={this.editTask}> Edit </button>

          <button onClick={(e) => this.props.deleteTask(this.props.item.id)}>
            Delete
          </button>
        </div>
      );
    }
  }
}

export default TodoItem;
