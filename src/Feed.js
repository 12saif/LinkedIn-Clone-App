import React, { useEffect, useState } from "react";
import "./Feed.css";
import InputOption from "./InputOption";
import Post from "./Post";

// ! ======= IMPORT ICON LINKS ========= //

import CreateIcon from "@mui/icons-material/Create";
import ImageIcon from "@mui/icons-material/Image";
import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";
import EventNoteIcon from "@mui/icons-material/EventNote";
import ArticleIcon from "@mui/icons-material/Article";

// ! ======= IMPORT FIREBASE ========== //

import { db } from "./firebase";
import firebase from "firebase/compat/app";

function Feed() {
  const [input, setInput] = useState(" ");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
      setPosts(
        snapshot.doc.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        })),
      ),
    );
  }, []);

  // ! ============== ONCLICK SEND POST ================ //

  const sendPost = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      name: "Md Saif",
      description: "this is a test",
      message: input,
      photoUrl: "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
  };

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
            />
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
      {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
        <Post
          key={id}
          name={name}
          description={description}
          message={message}
          photoUrl={photoUrl}
        />
      ))}
    </div>
  );
}

export default Feed;
