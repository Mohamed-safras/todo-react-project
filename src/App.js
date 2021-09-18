import { useState } from "react";
import "./App.css";
import Todo from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todoInput, setTodoInput] = useState("");
  const [todoList, setTodoList] = useState([]);
  return (
    <div className="App">
      <Todo
        todoList={todoList}
        setTodoList={setTodoList}
        todoInput={todoInput}
        setTodoInput={setTodoInput}
      />
      {todoList.map((item) => {
        return <TodoList key={item.id} todoInput={item.text} />;
      })}
    </div>
  );
}

export default App;
