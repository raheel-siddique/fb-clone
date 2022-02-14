import React from "react";
import "./Sidebar.css";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";

import { Paper } from "@mui/material";

const SidebarRow = ({ dataSideBar }) => {
  return (
    <>
      <List
        sx={{
          width: 300,
          // maxWidth: 30,
          bgcolor: "#EBEDF0",
          position: "fixed",
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
        {/* <Divider variant="inset" component="li" /> */}
        <Paper className="paperscroll">
          {dataSideBar.map((data) => {
            return (
              <>
                <ListItem className="listietms" alignItems="flex-start">
                  <div>{data.icon}</div>
                  <ListItemText
                    primary={data.name}
                    style={{
                      position: "relative",
                      top: 2,
                      left: 20,
                    }}
                  />
                </ListItem>

                {/* <Divider variant="inset" component="li" /> */}
              </>
            );
          })}
        </Paper>
      </List>
    </>
  );
};
export default SidebarRow;
