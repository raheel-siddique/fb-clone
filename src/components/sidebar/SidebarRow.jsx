import React from "react";
import "./Sidebar.css";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { Paper } from "@mui/material";

const SidebarRow = ({ dataSideBar }) => {
  return (
    <>
      <List
        sx={{
          width: "100%",
          maxWidth: 360,
          bgcolor: "#EBEDF0",
        }}
      >
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp " src="\raheel.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="Raheel Siddique"
            style={{ position: "relative", top: 10 }}
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <Paper className="paperscroll">
          {dataSideBar.map((data) => {
            return (
              <>
                <ListItem alignItems="flex-start">
                  <div>{data.icon}</div>
                  <ListItemText
                    primary={data.name}
                    style={{
                      position: "relative",
                      top: 2,
                      left: 20,
                      color: "blue",
                    }}
                  />
                </ListItem>

                <Divider variant="inset" component="li" />
              </>
            );
          })}
        </Paper>
      </List>
    </>
  );
};
export default SidebarRow;
