import React from "react";
import pfp from "./channels4_profile.jpg";

const Header = () => {
  return (
    <div className="header">
      <div className="profile">
        <img src={pfp} alt="Profile" />
        <div>
          <h2>Report for</h2>
          <h1>Jeremy Robson</h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
