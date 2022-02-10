import { Avatar, Grid } from "@mui/material";
import React from "react";
import VideocamIcon from "@mui/icons-material/Videocam";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

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
                placeholder="Search Here"
              />
            </div>
            <div
              className=""
              style={{ display: "flex", justifyContent: "space-around" }}
            >
              {" "}
              <div className="livevideodiv">
                <VideocamIcon fontSize="large" />
                <p>Live Video</p>{" "}
              </div>
              <div className="livevideodiv">
                <VideocamIcon fontSize="large" />
                <p>Live Video</p>{" "}
              </div>
              <div className="livevideodiv">
                <VideocamIcon fontSize="large" />
                <p>Live Video</p>{" "}
              </div>
            </div>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
};
export default CreatePost;
