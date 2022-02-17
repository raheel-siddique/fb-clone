import { Avatar, Grid } from "@mui/material";
import React from "react";
import VideocamIcon from "@mui/icons-material/Videocam";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import PhotoIcon from "@mui/icons-material/Photo";
import MoodIcon from "@mui/icons-material/Mood";
import "./Story.css";
import { useState } from "react";
import db from "../firebase/firebase";

const CreatePost = ({ userMy }) => {
  const [inputSeacrh, setInputSearch] = useState("");
  const [inputImage, setInputImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      username: userMy.displayName,
      message: inputSeacrh,
      profilePic: userMy.photoURL,
      image: inputImage,
    });
    setInputSearch("");
    setInputImage("");
    console.log("data values" + inputSeacrh, inputImage);
  };
  return (
    <>
      <Grid container>
        <Card sx={{ maxWidth: 600, marginLeft: 8, marginTop: 5 }}>
          <CardContent>
            <div style={{ display: "flex", position: "relative", top: 5 }}>
              <Avatar
                src={userMy.photoURL}
                style={{ position: "relative", top: 3 }}
              />
              <input
                type="text"
                className="searchbarcreatePost"
                value={inputSeacrh}
                onChange={(event) => {
                  setInputSearch(event.target.value);
                }}
                placeholder="Whats On Your Mind Raheel??"
              />
              <input
                type="text"
                className="searchbarcreatePostImageUrl"
                value={inputImage}
                onChange={(event) => {
                  setInputImage(event.target.value);
                }}
                placeholder="Url Of image"
              />
              <Button
                onClick={handleSubmit}
                type="submit"
                className="hiddenBtn"
                variant="contained"
                style={{
                  borderRadius: 20,
                  marginLeft: 20,
                  textTransform: "capitalize",
                }}
                // rounded
                // style={{ display: "none" }}
              >
                Upload
              </Button>
            </div>
            <div
              className=""
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <div className="livevideodiv">
                <Button>
                  <VideocamIcon fontSize="large" style={{ color: "red" }} />
                  <span
                    className="textvideo"
                    style={{ position: "relative", left: 5 }}
                  >
                    Live Video
                  </span>
                </Button>
              </div>
              <div className="livevideodiv">
                <Button>
                  <PhotoIcon fontSize="large" style={{ color: "#00A400" }} />
                  <span
                    className="textvideo"
                    style={{ position: "relative", left: 5 }}
                  >
                    Photo/Video
                  </span>
                </Button>
              </div>
              <div className="livevideodiv">
                <Button>
                  <MoodIcon fontSize="large" style={{ color: "#F5C33B" }} />
                  <span
                    className="textvideo"
                    style={{ position: "relative", left: 5 }}
                  >
                    Feeling / Activity
                  </span>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
};
export default CreatePost;
