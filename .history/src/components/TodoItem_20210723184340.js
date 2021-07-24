import React from "react";
import InputForm from "./InputForm";
class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    const cache = this.props.item,
    this.state = {
      isEditing: props.isEditing || true,
      ...this.props.item,
    };
    this.editTask = this.editTask.bind(this);
  }
  editTask(id) {}
  handleNoSubmission(e, cache) {
    this.setState(cache);
    e.target.reset();
  }

  render() {
    console.log(this.state.description);
    const completedStyle = {
      fontSize: "italic",
      color: "#cdcdcd",
      textDecoration: "line-through",
    };
    if (this.state.isEditing) {
      console.log(this.props.item);
      return (
        <div>
          <InputForm
            item={this.props.item}
            handleNoSubmission={this.handleNoSubmission}
            onSubmit={(e) => {
              this.handleSubmit(e, this.props.item.id);
            }}
          />
        </div>
      );
    } else {
      return (
        <div className="todo-item">
          <input
            type="checkbox"
            checked={this.props.item.completed}
            onChange={() => {
              this.props.handleChange(this.props.item.id);
            }}
          />
          <div style={this.props.item.completed ? completedStyle : null}>
            <span>Note: {this.props.item.description}, </span>
            <span>Date: {this.props.item.date}, </span>
            <span>Priority: {this.props.item.priority}.</span>{" "}
          </div>
          <button onClick={(e) => this.props.editTask(e, this.props.item.id)}>
            {" "}
            Edit{" "}
          </button>

          <button onClick={this.props.deleteTask}> Delete </button>
        </div>
      );
    }
  }
}

export default TodoItem;
