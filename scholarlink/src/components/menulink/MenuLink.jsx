import React from "react";
import "./menulink.scss";

const MenuLink = ({Icon, text}) => {
  return (
    <div className="menuLink">
        {Icon}
        <span className="menuLinkText">{text}</span>
        <span className="menuLinkTextName">{text==="Logout" && "(Pascal)"}</span>
    </div>
  );
};

export default MenuLink;