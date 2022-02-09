import React from "react";
import SidebarRow from "./SidebarRow";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import AccessAlarmsIcon from "@mui/icons-material/AccessAlarms";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";

const Sidebar = () => {
  const dataSideBar = [
    {
      id: 1,
      name: "Friends",
      icon: <PeopleAltIcon fontSize="large" />,
    },
    {
      id: 2,
      name: "Groups",
      icon: <AddCircleIcon fontSize="large" />,
    },
    {
      id: 3,
      name: "MarketPalace",
      icon: <AddCircleIcon fontSize="large" />,
    },
    {
      id: 4,
      name: "Watch",
      icon: <AddCircleIcon fontSize="large" />,
    },
    {
      id: 5,
      name: "Memories",
      icon: <AddCircleIcon fontSize="large" />,
    },
    {
      id: 6,
      name: "Ad center",
      icon: <AddCircleIcon fontSize="large" />,
    },
    {
      id: 7,
      name: "Ads Manager",
      icon: <AddCircleIcon fontSize="large" />,
    },
    {
      id: 8,
      name: "Blood Donations",
      icon: <AddCircleIcon fontSize="large" />,
    },
    {
      id: 9,
      name: "CLimate Center",
      icon: <AddCircleIcon fontSize="large" />,
    },
    {
      id: 10,
      name: "Covid 19 Center ",
      icon: <AddCircleIcon fontSize="large" />,
    },
    {
      id: 10,
      name: "Covid 19 Center ",
      icon: <AddCircleIcon fontSize="large" />,
    },
    {
      id: 10,
      name: "Covid 19 Center ",
      icon: <AddCircleIcon fontSize="large" />,
    },

    {
      id: 10,
      name: "Covid 19 Center ",
      icon: <AddCircleIcon fontSize="large" />,
    },
  ];
  return (
    <>
      <SidebarRow dataSideBar={dataSideBar} />
    </>
  );
};
export default Sidebar;
