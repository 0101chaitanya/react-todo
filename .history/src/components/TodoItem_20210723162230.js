import React from "react";

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
    };
  }
  render() {
    const completedStyle = {
      fontSize: "italic",
      color: "#cdcdcd",
      textDecoration: "line-through",
    };
    let date = this.props.item.date.split("-");
    // console.log(new Date().getDate(), date[0]);
    if (this.props.item.date[0])
      if (this.state.isEditing) {
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
              <span>{this.props.item.description}</span>
              <span>{this.props.item.date}</span>
              <span>{this.props.item.priority}</span>{" "}
            </div>
            <button onClick={this.props.editTask}></button>
          </div>
        );
      }
  }
}

export default TodoItem;
