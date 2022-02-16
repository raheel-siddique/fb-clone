import React, { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Story from "./components/storysection/Story";
import ShowFriends from "./components/friendssection/ShowFriends";
import Login from "./components/auth/Login";
import { auth, provider } from "./components/firebase/firebase";

const App = () => {
  const [userMy, setUserMy] = useState("");
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result.user);
        setUserMy(result.user);
      })
      .catch((error) => alert(error.message));
  };
  // var user = prom
  return (
    <>
      {!userMy ? (
        <Login signIn={signIn} />
      ) : (
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
      )}
    </>
  );
};
export default App;
