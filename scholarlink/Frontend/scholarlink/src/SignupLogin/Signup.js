import React, {useEffect, useState} from 'react';
import './signup.css'
import axios from 'axios';
import Side from "./Signupside";
import {Link} from 'react-router-dom';




const Signup = () =>{
    const [username, setusername] = useState('')
    const [email, setemail] = useState('')
    const [phone, setphone] = useState('')
    const [code, setcode] = useState('')
    const [password, setpassword] = useState('')
    const [confirm, setconfirm] = useState('')


    function handlesubmite(event){
        event.preventDefault();
        axios.post('http://localhost:8081/signup', {username, email, code, phone, password})
        .then(res =>{
            if(res.data === "inserted"){
                //go to home page
                alert("login sucessfull");
            }else if(res.data === "already exist"){
                alert("account already exist");
            }
        })
        .catch(err => console.log(err));
    }   
    

    return(
        <><Side />
        <section id='signup'>
            <h1>Registration</h1>
            <form onSubmit={handlesubmite}>
                <input type='text' name='username' placeholder='User Name' onChange={e => setusername(e.target.value)} autoFocus />
                {/* contact and country code */}
                <div className='contact'>
                    <input type='number' name='code' id='code' placeholder='Code' onChange={e => setcode(e.target.value)} autoFocus />
                    <input type='number' name='phone' id='phone' placeholder='Phone Number' onChange={e => setphone(e.target.value)} autoFocus />
                </div>
                <input type='email' name='email' placeholder='Email (e.g info@scholarlink.cm)' onChange={e => setemail(e.target.value)} autoFocus />
                <div className='gender'>
                    <input type='radio' name='gender' value="Male" autoFocus />Male
                    <input type='radio' name='gender' value="Female" autoFocus />Female
                </div>
                <input type='password' name='password' placeholder='Password' onChange={e => setpassword(e.target.value)} autoFocus />
                <input type='password' name='repeatpassword' placeholder='Repeat-Password' onChange={e => setconfirm(e.target.value)} autoFocus />
                <input type='submit' name='Sign Up' value='Signup' id='signupBtn' />
                <p>Already have an account? <Link to='/'>Login</Link></p>
            </form>
        </section></>
    );
};

    
export default Signup;