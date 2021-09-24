import React from "react";
import "../components/todo.css";
import Notification from "./Notification";
import { Notify } from "../components/notifyFunc";
const TodoForm = ({
  todoInput,
  setTodoInput,
  todoList,
  setTodoList,
  notify,
  setNotify,
}) => {
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
      Notify(setNotify, "new Todo added");
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
      {notify.isNotify === true && (
        <Notification
          msg={notify.msg}
          type={notify.type}
          setNotify={setNotify}
          notify={notify}
        />
      )}
    </div>
  );
};

export default TodoForm;
