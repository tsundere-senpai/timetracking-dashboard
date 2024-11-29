import React, { useState } from "react";
import Header from "./Header";
import Card from "./Card";
import data from "./data";

import "./main.scss";

const App = () => {
  const [timeframe, setTimeframe] = useState("weekly");

  // Function to handle changes to the timeframe
  const handleTimeframeChange = (newTimeframe) => {
    setTimeframe(newTimeframe);
  };

  return (
    <div className="dashboard">
      <div className="header-nav-container">
        <Header />
        <nav className="nav-box">
          <button onClick={() => handleTimeframeChange("daily")}>Daily</button>
          <button onClick={() => handleTimeframeChange("weekly")}>Weekly</button>
          <button onClick={() => handleTimeframeChange("monthly")}>Monthly</button>
        </nav>
      </div>
      <div className="cards">
        {data.map((activity, index) => (
          <Card
            key={index}
            title={activity.title}
            color={activity.color}
            current={activity.current}
            previous={activity.previous}
            timeframe={timeframe}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
