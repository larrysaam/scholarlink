import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import PersonIcon from '@mui/icons-material/Person';
import NotificationsIcon from '@mui/icons-material/Notifications';
import "./navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbarContainer">
        <div className="navbarLeft">
            <Link to="/" style={{textDecoration: "none"}}>
                <span className="logo">ScholarLink</span>
            </Link>
        </div>
        <div className="navbarCenter">
            <div className="searchBar">
                <SearchIcon className="searchIcon"/>
                <input type="text" placeholder="Search here"
                className="searchInput"
                />
            </div>
        </div>
        <div className="navbarRight">
            <div className="navbarLinks">
                <span className="navbarLink">HomePage</span>
                <span className="navbarLink">TimeLine</span>
            </div>
            <div className="navbarIcons">
                <div className="navbarIconItem">
                    <PersonIcon />
                    <span className="navbarIconBadges">1</span>
                </div>
                <div className="navbarIconItem">
                    <ChatBubbleIcon />
                    <span className="navbarIconBadges">2</span>
                </div>
                <div className="navbarIconItem">
                    <NotificationsIcon />
                    <span className="navbarIconBadges">3</span>
                </div>
            </div>
            <Link to="/profile/userId" style={{textDecoration: "none"}}>
            <img src="" alt="/assets/persons/user.jpg" className="navbarImage" />
            </Link>
        </div>
    </div>
  );
};

export default Navbar;