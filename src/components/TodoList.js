import React from "react";

const TodoList = ({ todoInput }) => {
  return (
    <div className="TodoList-continer">
      <div className="checked-item">
        <div className="check-mark"></div>
      </div>
      <div className="TodoList-item">{todoInput}</div>
    </div>
  );
};

export default TodoList;
