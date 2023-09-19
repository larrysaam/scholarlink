import React from 'react';
import Online from '../online/Online';
import { UsersOnline } from "../../data";
import "./rightbarhome.scss";


const Rightbarhome = () => {
  return (
    <div className="rightbarHome">
        <div className="birthdayContainer">
            <img src="/assets/birthdaygifts/gift1.png" 
            alt="" 
            className="birthdayImg" />
            <span className="birthdayText">
                <b>Larrien</b> and <b>other friends</b> have birthday today
            </span>
        </div>
        <img src="/assets/ads/adv.jpeg" alt="" className="rightbarAdvert" />
        
        <span className="rightbarTitle">Online Friends</span>
         <ul className="rightbarFriendList">
            { UsersOnline.map((u) => (
                <Online key={u.id} onlineUser={u} />
            ))}
            
         </ul>
    </div>
  );
};

export default Rightbarhome;