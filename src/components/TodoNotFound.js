import React from "react";

const TodoNotFound = ({ active }) => {
  return (
    <div className="not-found">
      {active === "all" ? (
        <h2>no items left</h2>
      ) : (
        <h2>no {active} items left</h2>
      )}
    </div>
  );
};

export default TodoNotFound;
