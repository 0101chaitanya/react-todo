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
          console.log(props.item.id);
          props.handleChange(props.item.id);
        }}
      />
      <p style={props.item.completed ? completedStyle : null}>
        {props.item.text}
      </p>
    </div>
  );
}

export default TodoItem;
