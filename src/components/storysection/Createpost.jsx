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

const CreatePost = () => {
  return (
    <>
      <Grid container>
        <Card sx={{ minWidth: 620, marginLeft: 12, marginTop: 5 }}>
          <CardContent>
            <div style={{ display: "flex" }}>
              <Avatar src="raheel.jpg" />
              <input
                type="text"
                className="searchbarcreatePost"
                placeholder="Whats On Your Mind Raheel??"
              />
            </div>
            <div
              className=""
              style={{ display: "flex", justifyContent: "space-around" }}
            >
              {" "}
              <div className="livevideodiv">
                <Button>
                  {" "}
                  <VideocamIcon fontSize="large" style={{ color: "red" }} />
                  <span
                    className="textvideo"
                    style={{ position: "relative", left: 5 }}
                  >
                    {" "}
                    Live Video
                  </span>
                </Button>
              </div>
              <div className="livevideodiv">
                <Button>
                  {" "}
                  <PhotoIcon fontSize="large" style={{ color: "#00A400" }} />
                  <span
                    className="textvideo"
                    style={{ position: "relative", left: 5 }}
                  >
                    {" "}
                    Photo/Video
                  </span>
                </Button>
              </div>
              <div className="livevideodiv">
                <Button>
                  {" "}
                  <MoodIcon fontSize="large" style={{ color: "#F5C33B" }} />
                  <span
                    className="textvideo"
                    style={{ position: "relative", left: 5 }}
                  >
                    {" "}
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
