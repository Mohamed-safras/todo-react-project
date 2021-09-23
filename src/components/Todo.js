import React from "react";

const Todo = ({ text, todoList, setTodoList, Todo }) => {
  const removeTodo = () => {
    setTodoList(
      todoList.filter((todo) => {
        return todo.id !== Todo.id;
      })
    );
    return Todo;
  };

  const changeTodo = () => {
    setTodoList(
      todoList.map((todo) => {
        if (todo.id === Todo.id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  };

  return (
    <div className="TodoList-continer">
      <div className="left">
        <div className={`checked-item ${Todo.completed ? "completed" : ""}`}>
          <div
            onClick={changeTodo}
            className={`check-mark-todo ${
              Todo.completed ? "check-mark-active" : "check-mark-completed"
            }`}
          >
            {Todo.completed ? (
              <i
                style={{
                  fontSize: "12px",
                  color: "#fff",
                }}
                className="fa fa-check"
                aria-hidden="true"
              ></i>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="TodoList-item">{text}</div>
      </div>
      <div onClick={removeTodo} className="remove">
        <i className="fa fa-times" aria-hidden="true"></i>
      </div>
    </div>
  );
};

export default Todo;
