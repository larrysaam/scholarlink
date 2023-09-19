import React from 'react';
import "./online.scss";

const Online = ({ onlineUser }) => {
  return (
    <div className="online">
      <li className="rightbarFriend">
        <div className="rightbarProfileImgContainer">
            <img src={ onlineUser.profilePicture } alt="" className="rightbarProfileImg" />
            <span className="rightbarOnline"></span>
        </div>
        <span className="rightbarUsername"> { onlineUser.username }</span>
      </li>
    </div>
  );
};

export default Online;