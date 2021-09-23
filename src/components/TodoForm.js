import React from "react";
import "../components/todo.css";

const TodoForm = ({ todoInput, setTodoInput, todoList, setTodoList }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    if (todoInput.trim() === "") {
      alert("Please enter value");
    } else {
      setTodoList([
        ...todoList,
        {
          id: new Date().getTime(),
          text: todoInput,
          completed: false,
        },
      ]);
      setTodoInput("");
    }
  };

  return (
    <div className="continer">
      <div className="new_todo">
        <div className="checked-item">
          <div className="check-mark"></div>
        </div>
        <form onSubmit={handleSubmit} autoComplete="off">
          <input
            type="text"
            className="new-todo-input"
            placeholder="Create a new todo..."
            value={todoInput}
            onChange={(e) => setTodoInput(e.target.value)}
          />
        </form>
      </div>
    </div>
  );
};

export default TodoForm;
