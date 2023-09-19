import React from "react";
import "./editProfile.scss";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { DriveFolderUploadOutlined } from "@mui/icons-material";
const EditProfile = () => {
    return <div className="editProfile">
        <Navbar />
        <div className="editProfileWrapper">
            <Sidebar/>
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
                <div className="editProfileRightBottom">
                    <div className="top">
                        <h1>Edit User Profile</h1>
                    </div>
                    <div className="bottom">
                        <div className="left">
                            <img src="/assets/profileCover/DefaultProfile.jpg" alt="" className="leftIm" />
                        </div>
                        <div className="right">
                            <form action="">
                            <div className="formInput">
                                <label htmlFor="file" className="file1">
                                    Image: <DriveFolderUploadOutlined className="icon" style={{
                                    cursor: "pointer",
                                    marginBottom: "-10px",
                                    marginLeft: "25px",
                                    fontSize: "40px"
                                }}/>
                                </label>
                                <input type="file" id="file" style={{display: "none"}} />
                            </div>
                            <div className="formInputs">
                                <label htmlFor="name">Name<br />
                                </label>
                                <input type="text" id="name" placeholder="pascal_1"/>
                                
                            </div>

                            <div className="formInputs">
                                <label htmlFor="username">Username<br />
                                </label>
                                <input type="text" id="username" placeholder="Yennyuygha Pascal"/>
                                
                            </div>

                            <div className="formInputs">
                                <label htmlFor="email">Email<br />
                                </label>
                                <input type="text" id="email" placeholder="name@gmail.com"/>
                            </div>

                            <div className="formInputs">
                                <label htmlFor="birthdate">Date of Birth<br />
                                </label>
                                <input type="text" id="birthdate" placeholder="12-05-2000"/>
                                
                            </div>

                            <div className="formInputs">
                                <label htmlFor="contact">Contact<br />
                                </label>
                                <input type="text" id="contact" placeholder="671772223"/>
                            </div>

                            <div className="formInputs">
                                <label htmlFor="address">Address<br />
                                </label>
                                <input type="text" id="address" placeholder="Yaounde"/>
                            </div>

                            <div className="formInputs">
                                <label htmlFor="speciality">Speciality<br />
                                </label>
                                <input type="text" id="speciality" placeholder="SoftWare Engineering"/>
                            </div>

                            <div className="formInputs">
                                <label htmlFor="country">Country <br />
                                </label>
                                <input type="text" id="country" placeholder="Cameroon"/>
                            </div>

                            <button type="submit" className="updateButton">Update
                            </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
};

export default EditProfile;