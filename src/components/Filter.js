import React from "react";
import "./filter.css";
const Filter = ({ text, active, setActive }) => {
  const filter = () => {
    setActive(text);
  };
  return (
    <div
      onClick={filter}
      className="filter-btn"
      style={{
        transition: "all 0.25s ease-in",
        cursor: "pointer",
        padding: "5px 20px",
        borderRadius: "20px",
        background: `${active === text ? "black" : "white"}`,
        color: `${active === text ? "white" : "black"}`,
      }}
    >
      {text}
    </div>
  );
};

export default Filter;
