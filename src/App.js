import { useEffect, useState } from "react";
import "./App.css";
import FilterTodo from "./components/FilterTodo";
import Notification from "./components/Notification";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoNotFound from "./components/TodoNotFound";

const App = () => {
  const [todoInput, setTodoInput] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [active, setActive] = useState("all");
  const [filterTodo, setFilterTodo] = useState([]);
  const [notify, setNotify] = useState({ isNotify: false, msg: "", type: "" });

  const getLocalTodoList = () => {
    if (localStorage.getItem("todoList") === null) {
      localStorage.setItem("todoList", JSON.stringify([]));
    } else {
      let local = JSON.parse(localStorage.getItem("todoList"));
      setTodoList(local);
    }
  };

  useEffect(() => {
    getLocalTodoList();
  }, []);

  useEffect(() => {
    const filterHandler = () => {
      switch (active) {
        case "active":
          setFilterTodo(todoList.filter((item) => item.completed === false));
          break;
        case "completed":
          setFilterTodo(todoList.filter((item) => item.completed === true));
          break;
        default:
          setFilterTodo(todoList);
          break;
      }
    };

    filterHandler();

    const saveLoaclStorage = () => {
      localStorage.setItem("todoList", JSON.stringify(todoList));
    };
    saveLoaclStorage();
  }, [todoList, active]);

  return (
    <div className="App">
      <TodoForm
        todoList={todoList}
        setTodoList={setTodoList}
        todoInput={todoInput}
        setTodoInput={setTodoInput}
        notify={notify}
        setNotify={setNotify}
      />

      {filterTodo.length > 0 ? (
        <TodoList
          setTodoList={setTodoList}
          todoList={todoList}
          filterTodo={filterTodo}
          notify={notify}
          setNotify={setNotify}
        />
      ) : (
        <TodoNotFound active={active} />
      )}
      <FilterTodo active={active} setActive={setActive} />

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

export default App;
