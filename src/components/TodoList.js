import React from "react";
import Todo from "./Todo";

const TodoList = ({ todoList, setTodoList, filterTodo, notify, setNotify }) => {
  return (
    <>
      {filterTodo.map((todo) => {
        return (
          <Todo
            key={todo.id}
            text={todo.text}
            todoList={todoList}
            setTodoList={setTodoList}
            Todo={todo}
            notify={notify}
            setNotify={setNotify}
          />
        );
      })}
    </>
  );
};

export default TodoList;
