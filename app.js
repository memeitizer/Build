import React from "react";
import Sidebar from "./Sidebar";
import GeneralChat from "./GeneralChat";
import './style.css';

const App = () => {
  return (
    <div className="app-container">
      <Sidebar />
      <GeneralChat />
    </div>
  );
};

export default App;
