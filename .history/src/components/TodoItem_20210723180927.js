import React from "react";
import InputForm from "./InputForm";
class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: props.isEditing || true,
      ...this.props.item,
    };
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
          <InputForm changeState={this.changeState} />
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
          <button onClick={this.props.editTask}> Edit </button>

          <button onClick={this.props.deleteTask}> Delete </button>
        </div>
      );
    }
  }
}

export default TodoItem;
