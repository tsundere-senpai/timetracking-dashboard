import React, { useState, useEffect } from "react";
import Header from "./Header";
import Card from "./Card";
import data from "./data";
import "./main.scss";
import light from "./assets/light.png";
import dark from "./assets/dark.png";
const App = () => {
  const [timeframe, setTimeframe] = useState("weekly");
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark"); // Default is dark theme

  // Function to handle changes to the timeframe
  const handleTimeframeChange = (newTimeframe) => {
    setTimeframe(newTimeframe);
  };

  // Toggle between light and dark theme
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme); // Store the selected theme in localStorage
  };

  // Apply the selected theme to the root element
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className={`theme-transition ${theme}`}>
      <div className="dashboard">
        <div className="header-nav-container">
          <Header />
          <nav className="nav-box">
            <button onClick={() => handleTimeframeChange("daily")}>
              Daily
            </button>
            <button onClick={() => handleTimeframeChange("weekly")}>
              Weekly
            </button>
            <button onClick={() => handleTimeframeChange("monthly")}>
              Monthly
            </button>
          </nav>
        </div>

        {/* Theme toggle button */}
        <div className="theme-toggle-container">
          <button className="theme-toggle" onClick={toggleTheme}>
            <img
              src={light}
              alt="Light Mode Icon"
              className={`theme-toggle-icon light-icon ${
                theme === "light" ? "hidden" : ""
              }`}
            />
            <img
              src={dark}
              alt="Dark Mode Icon"
              className={`theme-toggle-icon dark-icon ${
                theme === "light" ? "" : "hidden"
              }`}
            />
          </button>
        </div>
        <div className="cards">
          {data.map((activity, index) => (
            <Card
              key={index}
              title={activity.title}
              color={activity.color[theme]} // Use theme-specific color
              current={activity.current}
              previous={activity.previous}
              timeframe={timeframe}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
