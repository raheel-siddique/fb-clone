import { Avatar, Grid } from "@mui/material";
import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "./Story.css";

const AddStory = ({ dataStory }) => {
  return (
    <>
      <Grid container sx={{ marginTop: 3 }}>
        {dataStory.map((values) => {
          return (
            <>
              <Card
                sx={{
                  height: 200,
                  width: 150,
                  marginRight: 2,

                  backgroundImage: `url(${values.backSrc})`,
                  backgroundPosition: "center center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <CardContent>
                  <div className="story_avatar">
                    <Avatar
                      src={values.avatarSrc}
                      style={{ border: "2px solid blue" }}
                    />
                  </div>
                  <Typography
                    variant="p"
                    component="div"
                    style={{
                      color: "white",
                      position: "relative",
                      top: 110,
                      fontSize: 18,
                      color: "white",
                    }}
                  >
                    {values.name}
                  </Typography>
                </CardContent>
              </Card>
            </>
          );
        })}
      </Grid>
    </>
  );
};
export default AddStory;
