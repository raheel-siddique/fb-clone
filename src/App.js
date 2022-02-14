import React from "react";
import Navbar from "./components/navbar/Navbar";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Story from "./components/storysection/Story";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="App_div">
        <div style={{ position: "relative", top: 70 }} className="side_bar">
          <Sidebar />
        </div>
        <div
          style={{ position: "relative", left: 300, top: 100 }}
          className="story_story"
        >
          <Story />
        </div>
      </div>
    </>
  );
};
export default App;
