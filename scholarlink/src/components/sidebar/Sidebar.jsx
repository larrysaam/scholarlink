import React from "react";
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import GroupsIcon from '@mui/icons-material/Groups';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import EventIcon from '@mui/icons-material/Event';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import VideocamIcon from '@mui/icons-material/Videocam';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import "./sidebar.scss";
import MenuLink from "../menulink/MenuLink";
import Friends from "../friends/Friends";
import { Users } from "../../data";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";


const Sidebar = () => {
  const {dispatch} = useContext(DarkModeContext)
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <MenuLink Icon={<RssFeedIcon />} text="Feed" />
        <MenuLink Icon={<ChatIcon />} text="Chats" />
        <MenuLink Icon={<VideocamIcon />} text="Videos" />
        <MenuLink Icon={<GroupsIcon />} text="Friends" />
        <MenuLink Icon={<WorkspacePremiumIcon />} text="Jobs" />
        <MenuLink Icon={<EventIcon />} text="Events" />
        <MenuLink Icon={<BookmarkIcon />} text="Bookmarks" />
        <span onClick={()=>dispatch({type: "TOGGLE"})}>
          <MenuLink Icon={<Brightness4Icon />} text="Theme" />
        </span>
        <MenuLink Icon={<ExitToAppIcon />} text="Logout" />

        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr" />

        <ul className="sidebarFriendList">
          {Users.map((u) => (
            <Friends key={u.id} user={u} />
))}
        
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;