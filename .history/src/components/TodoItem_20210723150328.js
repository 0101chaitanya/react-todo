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
      <div style={props.item.completed ? completedStyle : null}>
        <span>{props.item.description}</span>
        <span>{props.item.date}</span>
        <span>{props.item.priority}</span>{" "}
      </div>
    </div>
  );
}

export default TodoItem;
