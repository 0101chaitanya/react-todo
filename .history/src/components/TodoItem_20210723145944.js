import React from "react";

function TodoItem(props) {
  const completedStyle = {
    fontSize: "italic",
    color: "#cdcdcd",
    textDecoration: "line-through",
  };
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={props.item.completed}
        onChange={() => {
          props.handleChange(props.item.id);
        }}
      />
      <p style={props.item.completed ? completedStyle : null}>
        {props.item.description} {props.item.date} {props.item.priority}
      </p>
    </div>
  );
}

export default TodoItem;
