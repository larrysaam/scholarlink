import React from "react";
import "./rightbar.scss";
import Rightbarhome from "../rightbarhome/Rightbarhome";
import ProfileRightbar from "../profileRightbar/ProfileRightbar";

const Rightbar = ( { profile }) => {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        { profile? <ProfileRightbar /> : <Rightbarhome />}
        
      </div>
    </div>
  );
};

export default Rightbar;