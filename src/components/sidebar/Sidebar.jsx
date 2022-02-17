import React from "react";
import SidebarRow from "./SidebarRow";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import AccessAlarmsIcon from "@mui/icons-material/AccessAlarms";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import GroupsIcon from "@mui/icons-material/Groups";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import MoreTimeIcon from "@mui/icons-material/MoreTime";
import MapsHomeWorkIcon from "@mui/icons-material/MapsHomeWork";
import AdbIcon from "@mui/icons-material/Adb";
import AdfScannerIcon from "@mui/icons-material/AdfScanner";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import BusAlertIcon from "@mui/icons-material/BusAlert";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import HubIcon from "@mui/icons-material/Hub";

const Sidebar = ({ userMy }) => {
  const dataSideBar = [
    {
      id: 1,
      name: "Friends",
      icon: <PeopleAltIcon fontSize="large" style={{ color: "blue" }} />,
    },
    {
      id: 2,
      name: "Groups",
      icon: <GroupsIcon fontSize="large" style={{ color: "blue" }} />,
    },
    {
      id: 3,
      name: "MarketPalace",
      icon: <MapsHomeWorkIcon fontSize="large" style={{ color: "blue" }} />,
    },
    {
      id: 4,
      name: "Watch",
      icon: <LiveTvIcon fontSize="large" style={{ color: "blue" }} />,
    },
    {
      id: 5,
      name: "Memories",
      icon: <MoreTimeIcon fontSize="large" style={{ color: "blue" }} />,
    },
    {
      id: 6,
      name: "Ad center",
      icon: <BusinessCenterIcon fontSize="large" style={{ color: "blue" }} />,
    },
    {
      id: 7,
      name: "Ads Manager",
      icon: <HealthAndSafetyIcon fontSize="large" style={{ color: "blue" }} />,
    },
    {
      id: 8,
      name: "Blood Donations",
      icon: <HubIcon fontSize="large" style={{ color: "blue" }} />,
    },
    {
      id: 9,
      name: "CLimate Center",
      icon: <BusAlertIcon fontSize="large" style={{ color: "blue" }} />,
    },
    {
      id: 10,
      name: "Covid 19 Center ",
      icon: <AdbIcon fontSize="large" style={{ color: "blue" }} />,
    },
  ];
  return (
    <>
      <SidebarRow dataSideBar={dataSideBar} userMy={userMy} />
    </>
  );
};
export default Sidebar;
