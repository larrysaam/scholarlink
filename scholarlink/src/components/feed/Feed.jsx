import React from "react";
import "./feed.scss";
import Stories from "../stories/Stories";
import Share from "../share/Share";
import { Posts } from "./../../data";
import Post from "../post/Post";


const Feed = () => {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Stories />
        <Share />
        {Posts.map((p) => (
            <Post key={p.id} post={p} />
))}
      </div>
    </div>
  );
};

export default Feed;