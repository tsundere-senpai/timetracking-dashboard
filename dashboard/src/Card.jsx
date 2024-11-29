import React from "react";
import buttonImg from "./assets/meatball copy.png";
const titleColorMap = {
  "Work": "#ff8b64",   
  "Exercise": "#4bcf83",
  "Study": "#ff5e7d",
  "Social":"#7235d1",
  "Self Care":"#f1c75b",
  "Play":"#56c2e6",
};

const Card = ({ title, color, current, previous, timeframe }) => {
  const timeLabels = {
    daily: "Yesterday",
    weekly: "Last Week",
    monthly: "Last Month",
  };
  const topColor = titleColorMap[title] || "#333";

  return (
    <div className="card">
      
      <div className="card-top" style={{backgroundColor:topColor}}>
      </div>
      <div className="card-body"  style={{ backgroundColor: color }}>
        <button>
          <img src={buttonImg}></img>
        </button>
        <h3>{title}</h3>
        <p>{current[timeframe]}hrs</p>
        <span>
          {timeLabels[timeframe]} - {previous[timeframe]}hrs
        </span>
        <div className="card-hidden">
          <p>
            Additional information on {title} :
            orem ipsum dolor sit amet, consectetur adipiscing elit.
             Aliquam nec mollis lorem. In hac habitasse platea dictumst. 
             Aenean placerat eleifend mattis. Proin bibendum, nisl nec 
             efficitur malesuada, velit erat ultrices tortor, a porttitor
              neque ligula sed turpis. Aenean nisl ex, lobortis egestas euismod 
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
