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
            item={this.props.others.item}
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
            checked={this.props.others.item.completed}
            onChange={(e) => {
              this.props.others.handleChange(this.props.others.item.id);
            }}
          />
          <div style={this.props.others.item.completed ? completedStyle : null}>
            <span>Note: {this.props.others.item.description}, </span>
            <span>Date: {this.props.others.item.date}, </span>
            <span>Priority: {this.props.others.item.priority}.</span>{" "}
          </div>
          <button onClick={this.editTask}> Edit </button>

          <button
            onClick={(e) =>
              this.props.others.deleteTask(this.props.others.item.id)
            }
          >
            Delete
          </button>
        </div>
      );
    }
  }
}

export default TodoItem;
