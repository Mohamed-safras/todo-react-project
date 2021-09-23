import React from "react";
import "./filterTodo.css";
import Filter from "../components/Filter";
const FilterTodo = ({ active, setActive }) => {
  return (
    <div className="filterTodo">
      <Filter active={active} setActive={setActive} text="all" />
      <Filter active={active} setActive={setActive} text="active" />
      <Filter active={active} setActive={setActive} text="completed" />
    </div>
  );
};

export default FilterTodo;
