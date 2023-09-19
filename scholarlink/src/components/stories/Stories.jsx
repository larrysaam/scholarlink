import React from 'react';
import "./stories.scss";
import Storycard from '../storycard/Storycard';
import { Users } from "../../data";


const Stories = () => {
  return (
    <div className="stories">
      <div className="storyCard">
        <div className="overlay"></div>
        <img 
        src="/assets/person/user.jpg" alt="" className="storyProfile" />

        <img 
        src="/assets/person/user.jpg" 
        alt="" 
        className="storyBackground" 
        />
        <img 
        src="/assets/person/upload.png" 
        alt="" 
        className="storyAdd" 
        />
        <span className="text">Pascal_1</span>
      </div>

      {Users.map((u) => (
        <Storycard key={u.id} user={u} />
      ))}

    </div>
  );
};

export default Stories;