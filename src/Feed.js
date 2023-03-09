import React, { useEffect, useState } from "react";
import "./Feed.css";
import InputOption from "./InputOption";
import Post from "./Post";

import CreateIcon from "@mui/icons-material/Create";
import ImageIcon from "@mui/icons-material/Image";
import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";
import EventNoteIcon from "@mui/icons-material/EventNote";
import ArticleIcon from "@mui/icons-material/Article";
import { db } from "./firebase";

function Feed() {
  const [input, setInput] = useState(" ");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        })),
      ),
    );
  }, []);

  const sendPost = (e) => {
    e.preventDefault();

    // db.collection('posts').add({
    //   name: 'Md Saif',
    //   description: 'this is a test',
    //   message:
    // })
  };

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input value={input} type="text" />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
          <InputOption Icon={SmartDisplayIcon} title="Video" color="#E7A33E" />
          <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD" />
          <InputOption
            Icon={ArticleIcon}
            title="Write article"
            color="#7FC15E"
          />
        </div>
      </div>
      {/* POST */}
      {posts.map((post) => {
        <Post />;
      })}
      <Post
        name="Md Saif"
        description="This Is a Test"
        message="WOW This Worked"
      />
    </div>
  );
}

export default Feed;
