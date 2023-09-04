
import { useState } from 'react';
import axios from 'axios';
import './interest.css'

const Interest =()=>{

    const [file, setfile] = useState()

    function handlefile(event){
        setfile(event.target.files[0])
        console.log(event.target.files[0])
    }

    function handlesubmit(event){
        event.preventDefault();
        axios.post('http://localhost:8081/saveresume', file)
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
        <div id='interestsection'>
            <form onSubmit={handlesubmit}>
            <div id='dropdown'>
                <select id='options'>
                    <option value="Interest">Interest</option>
                    <option value="Software Engineering">Software Engineering</option>
                    <option value="Data Analyst">Data Analyst</option>
                    <option value="Database Admin">Database Admin</option>
                </select>
                <div><button>X</button></div>
            </div>
            <div id='pdfinput'>
                <h2>Insert Resume</h2>
                <div className='inputbox'>
                        <input type='file' name='file' onChange={handlefile}/><br/>
                        <div className='buttonsbox'>
                            <button id='savebtn'>save</button>
                            <button id='deletebtn'>Delete</button>
                        </div>   
                </div>
            </div>
            </form>
        </div>
    );
}

export default Interest