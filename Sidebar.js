import React from "react";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Friends</h2>
      <ul>
        <li>Nitro</li>
        <li>Shop</li>
      </ul>
      <div className="direct-messages">
        <h3>Direct Messages</h3>
        <ul>
          <li>Noob</li>
          <li>Dyno</li>
          <li>Carl-bot</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;