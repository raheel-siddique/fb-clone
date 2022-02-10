import React from "react";
import AddStory from "./AddStory";

const Story = () => {
  const dataStory = [
    {
      id: 0,
      avatarSrc: "26907420_572555583128078_4495080497677716585_n.jpg",
      backSrc: "raheel.jpg",
      name: "Raheel Siddique",
    },
    {
      id: 1,
      avatarSrc: "raheel.jpg",
      backSrc: "70930555_2446657408909594_6142271921586176000_n.jpg",
      name: "Rasim Siddique",
    },
    {
      id: 2,
      avatarSrc: "raheel.jpg",
      backSrc: "73070416_2476883942553607_8806525768352923648_n.jpg",
      name: "Hamza Siddique",
    },
    {
      id: 3,
      avatarSrc: "raheel.jpg",
      backSrc: "raheel.jfif",
      name: "Hamza Siddique",
    },
    {
      id: 4,
      avatarSrc: "raheel.jpg",
      backSrc: "81894653_2547794825462518_6739990069060304896_n.jpg",
      name: "Raheel Siddique",
    },
  ];
  return (
    <>
      <AddStory dataStory={dataStory} />
    </>
  );
};
export default Story;
