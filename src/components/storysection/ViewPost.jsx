import React from "react";
import { Avatar, Grid } from "@mui/material";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
// import ThumbUpOutlinedIcon from "@mui/icons-material/Videocam";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import PhotoIcon from "@mui/icons-material/Photo";
import MoodIcon from "@mui/icons-material/Mood";
import ListItemText from "@mui/material/ListItemText";

import "./Story.css";

const ViewPost = ({ image, profilePic, message, username }) => {
  return (
    <>
      {" "}
      <Grid container>
        <Card sx={{ maxWidth: 600, marginLeft: 8, marginTop: 5 }}>
          <CardContent>
            <div
              style={{
                display: "flex",
                position: "relative",
                top: 5,
                marginBottom: 10,
              }}
            >
              <Avatar src={image} style={{ position: "relative", top: 3 }} />
              <p className="postNameUser">{username}</p>
            </div>
            <p className="statuspara">{message}</p>
            <div>
              <img
                //   className="img-fluid"
                src={profilePic}
                alt=""
                style={{
                  height: "85vh",
                  width: "100vh",
                  position: "relative",
                  right: 16,
                }}
              />
            </div>

            <div
              className=""
              style={{ display: "flex", justifyContent: "space-around" }}
            >
              <div className="livevideodiv">
                <Button>
                  <ThumbUpOutlinedIcon
                  // fontSize="large"
                  // style={{ color: "red" }}
                  />
                  <span
                    className="textvideo"
                    style={{ position: "relative", left: 5 }}
                  >
                    like
                  </span>
                </Button>
              </div>
              <div className="livevideodiv">
                <Button>
                  <ChatBubbleOutlineOutlinedIcon
                  // fontSize="large"
                  // style={{ color: "red" }}
                  />
                  <span
                    className="textvideo"
                    style={{ position: "relative", left: 5 }}
                  >
                    Comment
                  </span>
                </Button>
              </div>
              <div className="livevideodiv">
                <Button>
                  <ReplyOutlinedIcon
                  // fontSize="large"
                  // style={{ color: "red" }}
                  />
                  <span
                    className="textvideo"
                    style={{ position: "relative", left: 5 }}
                  >
                    Share
                  </span>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* <Card sx={{ maxWidth: 600, marginLeft: 8, marginTop: 5 }}>
          <CardContent>
            <div
              style={{
                display: "flex",
                position: "relative",
                top: 5,
                marginBottom: 10,
              }}
            >
              <Avatar
                src="raheel.jpg"
                style={{ position: "relative", top: 3 }}
              />
              <p className="postNameUser">Raheel Siddique</p>
            </div>
            <p className="statuspara">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi
              iure, repellat nulla molestias nesciunt, molestiae consectetur
              fugit odio veritatis odit sequi velit corrupti nemo dolorum facere
              laborum similique doloremque voluptas.
            </p>
            <div>
              <img
                src="raheel.jpg"
                alt=""
                style={{
                  height: "85vh",
                  width: "100vh",
                  position: "relative",
                  right: 16,
                }}
              />
            </div>

            <div
              className=""
              style={{ display: "flex", justifyContent: "space-around" }}
            >
              <div className="livevideodiv">
                <Button>
                  <ThumbUpOutlinedIcon
                  // fontSize="large"
                  // style={{ color: "red" }}
                  />
                  <span
                    className="textvideo"
                    style={{ position: "relative", left: 5 }}
                  >
                    like
                  </span>
                </Button>
              </div>
              <div className="livevideodiv">
                <Button>
                  <ChatBubbleOutlineOutlinedIcon
                  // fontSize="large"
                  // style={{ color: "red" }}
                  />
                  <span
                    className="textvideo"
                    style={{ position: "relative", left: 5 }}
                  >
                    Comment
                  </span>
                </Button>
              </div>
              <div className="livevideodiv">
                <Button>
                  <ReplyOutlinedIcon
                  // fontSize="large"
                  // style={{ color: "red" }}
                  />
                  <span
                    className="textvideo"
                    style={{ position: "relative", left: 5 }}
                  >
                    Share
                  </span>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card> */}
      </Grid>
    </>
  );
};
export default ViewPost;
