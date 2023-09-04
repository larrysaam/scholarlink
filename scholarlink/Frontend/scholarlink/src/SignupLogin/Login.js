import './login.css';
import axios from 'axios';
import React, { useState } from 'react'
import Validation from './Loginvalidation';
import facebookimg from './facebook.png';
import googleimg from './google.jpg';
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';
import Side from "./Signupside";


const Login = () => {
    const [values, setValues] = useState({
        email:'',
        password:''
    })
    const history = useHistory();
    const [errors, setErrors] = useState({})
    const handleInput1 = (event)=>{
        setValues(prev =>  ({...prev, email: [event.target.value]}))
    }
    const handleInput2 = (even)=>{
        setValues(prev =>  ({...prev, password: [even.target.value]}))
    }


   
    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(Validation(values));
        if(errors.email !== "" && errors.password !== ""){
            axios.post('http://localhost:8081/login', values)
            .then(res=> {
                if(res.data === "Success" ){
                    history.push("home");
                    alert("Login Successful ");
                }else if(res.data === "Failed"){
                    console.log(values)
                    alert("No record existed");
                }
                
            })
            .catch(err => console.log(err));

        }
      }

    return (
        <div id='logincontainer'>
        <Side />
        <section id='login'>
            <div className='title'><h1><strong><center>Login</center></strong></h1></div>
            <form onSubmit={handleSubmit}>
                <input type='email' name='email' placeholder='email' onChange={handleInput1} />
                {errors.email && <span className='text-danger'>{errors.email}</span>}
                <input type='password' name='password' placeholder='Password' onChange={handleInput2} />
                {errors.password && <span className='text-danger'>{errors.password}</span>}
                <p><a href='#'>Forgot password?</a></p>
                <input type='submit' name='login' value='Login' id='loginBtn' />
                <p>Don't have an account? <Link to="/signup">Signup</Link></p>

                <div className='or'> <hr />OR <hr /></div>
                <button type='submit' name='facebook' id='facebookbtn'><img src={facebookimg} /> Login with Facebook</button>
                <button type='submit' name='google' id='googlebtn'><img src={googleimg} /> Login with Google</button>
            </form>
        </section>
        </div>
    );
};
export default Login; 