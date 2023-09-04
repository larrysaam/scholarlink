import './content.css'
import { useHistory } from "react-router-dom";
import face from './face.png'
import google from './google.png'
import netflix from './netflix.jpeg'
import microsoft from './microsoft.jpg'
import { useState } from 'react';



const Jobs = ({availablejobs, getfromjob})=>{

    const history = useHistory();
    var image  = null


    //set image for job views
    function setimage(job){
        if(job.company == "Google"){
            image = google
        }else if(job.company == "Facebook"){
            image = face
        }else if(job.company == "Netflix"){
            image = netflix
        }else if(job.company == "Microsoft"){
            image = microsoft
        }
        return image
    }


    //list of available jobs
    var jobs = availablejobs.map(job=>
        <>
        <li >
            <div className="post" key={job.id} 
                onClick={
                    function handleclick(){
                    history.push("/home/jobview") 
                    getfromjob(job)
                }}
            >
                <img src={setimage(job)}/>
                <div className="jobmaindetail">
                    <h1> {job.company}</h1>
                    <h2>{job.field}</h2>
                </div>
                <p>{job.description}</p>
                <button >Available</button>
            </div>
        </li><br />
        </>
    );



    return(
        <div id='JobSection'>
            <ul id="jobpost">
                {jobs}
            </ul>
        </div>      
    );
};

export default Jobs;