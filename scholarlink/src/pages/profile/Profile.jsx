import React from 'react';
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Rightbar from "../../components/rightbar/Rightbar";
import Feed from "../../components/feed/Feed";
import "./profile.scss";

const Profile = () => {
  return (
    <div className="profile">
        <Navbar/>
        <div className="profileWrapper">
            <Sidebar />
            <div className="profileRight">
                <div className="profileRightTop">
                   <div className="profileCover">
                    <img src="/assets/profileCover/cover1.jpg" alt="" className="profileCoverImg" />
                    <img src="/assets/person/user.jpg" alt="" className="profileUserImg" />
                   </div>
                   <div className="profileInfo">
                    <h4 className="profileInfoName">Pascal Yennyuygha</h4>
                    <span className="profileInfoDesc">Hi Friends</span>
                   </div>
                </div>
                <div className="profileRightBottom">
                    <Feed />
                    <Rightbar profile/>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Profile;