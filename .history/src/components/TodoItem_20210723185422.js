import React from "react";
import InputForm from "./InputForm";
class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.cache = this.props.item;
    this.state = {
      isEditing: props.isEditing || false,
      ...this.props.item,
    };
    this.editTask = this.editTask.bind(this);
  }

  handleSubmit(input, e) {
    this.setState({
      state: input,
    });
    e.target.submit();
  }
  handleNoSubmission(e, cache) {
    this.setState(this.cache);
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
          <button onClick={(e) => !this.state.isEditing}> Edit </button>

          <button onClick={this.props.deleteTask}> Delete </button>
        </div>
      );
    }
  }
}

export default TodoItem;
