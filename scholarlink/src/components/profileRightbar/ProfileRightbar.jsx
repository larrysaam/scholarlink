import React from 'react';
import "./profilerightbar.scss";
import { Link } from 'react-router-dom';


const ProfileRightbar = () => {
  return (
    <div className="profileRightbar">
        <div className="profileRightbarHeading">
            <span className="profileRightbarTitle">User Information</span>
            <Link to="/profile/userId/edit" style={{textDecoration: "none"}}>
              <span className="editButton">Edit Profile</span>
            </Link>
            
        </div>

        <div className="profileRightbarInfo">
          <div className="profilRightbarInfoItem">
            <span className="profileRightbarInfoKey">Email:</span>
            <span className="profileRightbarInfoValue">pascalyennyuygha@gmail.com</span>
          </div>

          <div className="profilRightbarInfoItem">
            <span className="profileRightbarInfoKey">Phone Number:</span>
            <span className="profileRightbarInfoValue">671772223</span>
          </div>

          <div className="profilRightbarInfoItem">
            <span className="profileRightbarInfoKey">Gender:</span>
            <span className="profileRightbarInfoValue">Male</span>
          </div>

          <div className="profilRightbarInfoItem">
            <span className="profileRightbarInfoKey">Address:</span>
            <span className="profileRightbarInfoValue">Simbock-Yaounde</span>
          </div>

          <div className="profilRightbarInfoItem">
            <span className="profileRightbarInfoKey">Speciality:</span>
            <span className="profileRightbarInfoValue">Software Engineering</span>
          </div>

          <div className="profilRightbarInfoItem">
            <span className="profileRightbarInfoKey">Country:</span>
            <span className="profileRightbarInfoValue">Cameroon</span>
          </div>
        </div>

        <h4 className="profileRightbarTitle">Close Friends</h4>
        <div className="profileRightbarFollowings">
          <div className="profileRightbarFollowing">
            <img src="/assets/persons/friends1.jpg"
            alt="" 
            className="profileRightbarFollowingImg" />
            <span className="profileRightbarFollowingName">Joel</span>
          </div>

          <div className="profileRightbarFollowing">
            <img src="/assets/persons/friends2.jpg"
            alt="" 
            className="profileRightbarFollowingImg" />
            <span className="profileRightbarFollowingName">Nalova</span>
          </div>

          <div className="profileRightbarFollowing">
            <img src="/assets/persons/friends3.jpg"
            alt="" 
            className="profileRightbarFollowingImg" />
            <span className="profileRightbarFollowingName">Kelly</span>
          </div>

          <div className="profileRightbarFollowing">
            <img src="/assets/persons/friends4.jpg"
            alt="" 
            className="profileRightbarFollowingImg" />
            <span className="profileRightbarFollowingName">Bradley</span>
          </div>

          <div className="profileRightbarFollowing">
            <img src="/assets/persons/friends5.jpg"
            alt="" 
            className="profileRightbarFollowingImg" />
            <span className="profileRightbarFollowingName">Larrien</span>
          </div>

          <div className="profileRightbarFollowing">
            <img src="/assets/persons/friends6.jpg"
            alt="" 
            className="profileRightbarFollowingImg" />
            <span className="profileRightbarFollowingName">Daniel</span>
          </div>
        </div>
    </div>
  );
};

export default ProfileRightbar;