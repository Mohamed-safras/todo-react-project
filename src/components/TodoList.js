import React from "react";
import Todo from "./Todo";

const TodoList = ({ todoList, setTodoList, filterTodo }) => {
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
          />
        );
      })}
    </>
  );
};

export default TodoList;
