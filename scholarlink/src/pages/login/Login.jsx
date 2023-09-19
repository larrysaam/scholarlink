import React from 'react';
import "./login.scss";
import { Link } from 'react-router-dom';

const Login = () => {
  return (
   <div className="login">
    <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">ScholarLink</h3>
                <span className="loginDesc">
                    Join our Community, Discover Job opportunities,
                    Connect with Friends and the world around you.
                </span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <div className="bottom">
                        <form action="" className="bottomBox">
                            
                            <input type="text" 
                            placeholder='Email'
                            id='email'
                            className='loginInput'
                            required/>
                            
                            <input type="password" 
                            placeholder='Password'
                            id='password'
                            className='loginInput'
                            required/>
                            <button type='submit' className="loginButton">
                                Login
                            </button>
                            <Link to="/register" style={{textDecoration: "none"}}>
                            <button className="loginCreateAccountButton">
                                Create New Account
                            </button>
                            </Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Login;
