import React from "react";

const Nav = ({ onTimeframeChange }) => {
  return (
    <nav>
      <button onClick={() => onTimeframeChange("daily")}>Daily</button>
      <button onClick={() => onTimeframeChange("weekly")}>Weekly</button>
      <button onClick={() => onTimeframeChange("monthly")}>Monthly</button>
    </nav>
  );
};

export default Nav;
