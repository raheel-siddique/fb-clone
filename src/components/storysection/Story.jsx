import React, { useEffect, useState } from "react";
import db from "../firebase/firebase";
import AddStory from "./AddStory";
import CreatePost from "./Createpost";
import ViewPost from "./ViewPost";

const Story = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
      setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
    );
  }, []);
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

  // const postData = [
  //   {
  //     id: 0,
  //     avatarSrc: "81894653_2547794825462518_6739990069060304896_n.jpg",
  //     postPara: "thi sis njsdnafnsfmsdm,f.m,df.g.d,.g,.dg,.g,m ",
  //     name: "Raheel Siddique",
  //   },
  //   {
  //     id: 1,
  //     postPara: "thi sis njsdnafnsfmsdm,f.m,df.g.d,.g,.dg,.g,m",

  //     avatarSrc: "raheel.jpg",

  //     name: "Rasim Siddique",
  //   },
  //   {
  //     id: 2,
  //     avatarSrc: "73070416_2476883942553607_8806525768352923648_n.jpg",
  //     postPara: "thi sis njsdnafnsfmsdm,f.m,df.g.d,.g,.dg,.g,m",

  //     name: "Hamza Siddique",
  //   },
  //   {
  //     id: 3,
  //     avatarSrc: "11023437_1637773633131313_8333663191280964243_o.jpg",
  //     postPara: "thi sis njsdnafnsfmsdm,f.m,df.g.d,.g,.dg,.g,m",

  //     name: "Hamza Siddique",
  //   },

  //   {
  //     id: 4,
  //     avatarSrc: "45898383_2232964390278898_1265375928943378432_n.jpg",
  //     postPara: "thi sis njsdnafnsfmsdm,f.m,df.g.d,.g,.dg,.g,m",

  //     name: "Raheel Siddique",
  //   },
  // ];

  return (
    <>
      <div>
        <AddStory dataStory={dataStory} />
        <CreatePost />
        {posts.map((post) => {
          return (
            <>
              <ViewPost
                key={post.data.id}
                image={post.data.image}
                message={post.data.message}
                profilePic={post.data.profilePic}
                username={post.data.username}
              />
            </>
          );
        })}
        {/* <ViewPost posts={posts} /> */}
      </div>
    </>
  );
};
export default Story;
