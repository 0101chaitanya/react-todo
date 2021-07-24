import React from "react";

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
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
      return (
        <div className="todo-Edit">
          <input />
          Note: {this.props.item.description},
          <input />
          Date: {this.props.item.date},
          <input />
          Priority: {this.props.item.priority}.
          <button onClick={this.props.editTask}> Edit </button>
          <button onClick={this.props.deleteTask}> Delete </button>
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
