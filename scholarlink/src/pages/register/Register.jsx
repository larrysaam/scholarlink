import './register.scss';
import { DriveFolderUploadOutlined } from '@mui/icons-material';
import React from 'react';
import {Link} from "react-router-dom";

const Register = () => {
    const [value, setValue] = React.useState("speciality");

    const handleChange = (e) =>{
        setValue(e.target.value);
    };

    
  return (
    <div className="register">
        <div className="registerWrapper">
            <div className="registerLeft">
                <h3 className="registerLogo">ScholarLink</h3>
                <span className="registerDesc">
                    Join our Community, Discover Job opportunities, 
                    Connect with Friends and the world around you.
                </span>
            </div>
            <div className="registerRight">
                <div className="registerBox">
                    <div className="title">Sign in to Dashboard</div>
                    <div className="top">
                        <img 
                        src="/assets/profileCover/defaultProfile.jpg" 
                        alt="" 
                        className="profileImg" 
                        />
                        <div className="formInput">
                            <label htmlFor="file">Image
                                <DriveFolderUploadOutlined className='icon' />
                                <input 
                                type="file" 
                                name="file" 
                                id="file"
                                accept=".png, .jpeg, .jpg"
                                style={{display: "none"}}
                                />
                            </label>
                        </div>
                        </div>
                    <div className="bottom">
                        <form action="" className="bottomBox">
                            <label htmlFor="name">
                                Name
                            </label>
                            <input type="text"
                                placeholder='Username' 
                                id='username'
                                className='registerInput'
                                required/>
                            
                            <label htmlFor="email">
                                Email
                            </label>
                            <input type="text" 
                            placeholder='Email'
                            id='email'
                            className='registerInput'
                            required/>
                            
                            <label htmlFor="contact">
                                Contact
                            </label>
                            <input type="text" 
                            placeholder='671772223'
                            id='contact'
                            className='registerInput'
                            required/>

                            <label htmlFor="birthdate">
                                Date of Birth
                            </label>
                            <input type="text" 
                                placeholder='12-05-2000'
                                id='birthdate'
                                className='registerInput'
                                required/>

                            <label htmlFor="gender" className='gender'>
                                Gender
                                <input 
                            type="radio" 
                            name="gender" 
                            id="gender"
                            value="male"
                            className='male'
                            />Male<input 
                            type="radio" 
                            name="gender" 
                            id="gender"
                            value="female"
                            className='female'
                            />Female
                            </label>

                            <label htmlFor="country">
                                City
                            </label>
                            <input type="text" 
                                placeholder='Yaounde'
                                id='city'
                                className='registerInput'
                                required/>

                            <label htmlFor="country">
                                Country
                            </label>
                            <input type="text" 
                                placeholder='Cameroon'
                                id='country'
                                className='registerInput'
                                required/>

                            <label htmlFor="file1">Curiculum Vitae
                                <DriveFolderUploadOutlined className='icon1' />
                                <input 
                                type="file" 
                                name="file1" 
                                className='file1'
                                id="file1"
                                accept=".pdf, .txt, .docs"
                                style={{display: "none"}}
                                />
                            </label>
                            
                            
                            <label htmlFor="speciality">Speciality
                            <select id="speciality" value={value} onChange={handleChange} className='speciality'>
                                <option value="software engineering">Software Engineering</option>
                                <option value="civil engineering">Civil Engineering</option>
                                <option value="electrical engineering">Electrical Engineering</option>
                                <option value="artificial inteligence">Artificial inteligence</option>
                                <option value="syber security">Syber Security</option>
                                <option value="accountancy">Accountancy</option>
                            </select>
                            </label>
                           
                            <label htmlFor="password">
                                Password
                            </label>
                            <input type="password" 
                                placeholder='Password'
                                id='password'
                                className='registerInput'
                                required/>
                            
                            <label htmlFor="confirmpassword">
                                Confirm Password 
                            </label>
                            <input type="password"
                                placeholder='Confirm Password'
                                id='confirmpassword'
                                className='registerInput'
                                required/>
                            
                            <button type='submit' className="registerButton">Sign Up</button>
                            <Link to="/login" style={{textDecoration: "none"}}>
                                <div className="registerLoginButton">Already have an Account?
                                    <a href="/login" className="anc">Log Into Account</a>
                                </div>
                            </Link>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Register;
