import { Button } from "@mui/material";
import React from "react";
// import { initializeApp } from "firebase/app";

import "./Login.css";
import { auth, provider } from "../firebase/firebase";
// import provider from "../firebase/firebase";
const Login = () => {
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => alert(error.message));

    // auth
    //   .signInWithPopup(provider)
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     console.log(error.message);
    //   });
    // auth
    //   .signInWithPopup(provider)
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     alert(error.message);
    //   });
  };
  return (
    <>
      <div className="loginmaindiv">
        <div className="imgoffb">
          <img
            className="img_fluidmy"
            src="\facebook-icon-logo-white-background-editable-vector-illustration-facebook-icon-logo-141051712.jpg"
            alt=""
          />
          <div className="headfb">
            {" "}
            <h2 className="">facebook</h2>
          </div>
          <div className="btnfb">
            <Button
              style={{
                backgroundColor: "rgb(1, 1, 128)",
                color: "white",
                width: 250,
                height: 40,
              }}
              variant="outlined"
              type="submit"
              onClick={signIn}
            >
              Login
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
