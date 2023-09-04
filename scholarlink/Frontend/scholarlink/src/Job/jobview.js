import './jobview.css'
import axios from 'axios';
import face from './face.png'
import google from './google.png'
import netflix from './netflix.jpeg'
import microsoft from './microsoft.jpg'
import { useState, useEffect } from "react"

const Jobview =({jobdetails},{jobkey})=>{

    var image = null
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


    const jobview =
        <div id='jobviewsection'>
            <div className="maininfo">
                <img src={setimage(jobdetails)} id='companyImg'/>
                <ul>
                    <li id='companyname'>{jobdetails.company}</li><br/>
                    <li>{jobdetails.field} </li>
                </ul>
            </div>
            <div className="details">
                <h4>Published: {jobdetails.publishedDate} </h4>
                <h4>{jobdetails.applicants} applicants</h4>
            </div>
            <div className="descriptionBox">
                <p>{jobdetails.description} </p>
            </div>
            <div className="applybox">
                <button>Apply!</button>
            </div>
        </div>

    return(
        jobview
    );
}

export default Jobview