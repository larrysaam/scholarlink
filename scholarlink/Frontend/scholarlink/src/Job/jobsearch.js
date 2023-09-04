import Header from './header.js'
import Side from './sidebar.js'
import Jobs from './joblist.js'
import Jobview from './jobview.js'
import Interest from './interest.js'
import './style.css'
import axios from 'axios';
import { useState, useEffect } from "react"
import './style.css'

import {BrowserRouter as Router, Route} from 'react-router-dom'
import { Switch } from "react-router-dom/cjs/react-router-dom.min";



const Jobsearch =()=>{

    //useStates
    const [availablejobs, setavailablejobs] = useState([]);
    const [jobrecords, setjobrecords] = useState([]);
    const [jobdetails, setjobdetails] = useState([]);


    // gets jobs list form database through an API on DOM render
    useEffect(() =>{
        axios.post('http://localhost:8081/jobs')
        .then(res=> {
            setavailablejobs(res.data)
            setjobrecords(res.data)
        })
        .catch(err => console.log(err));
    }, []);


    // lamda function to filter the job record gotten from API
    const Filter = (event) =>{
        setavailablejobs(jobrecords.filter(f => f.field.includes(event.target.value)))
    }

    /*funtion gets data from job list component when clicked
    and set it to jobview component 
    (********passing data from child to parent component******)*/
    function getfromjob(data){
        setjobdetails(data)
    }


    

    return(
        <div className='jobsearch'>
            <div id="topbar">
                <h1> ScholarLink</h1><br/>
                <input type="text" placeholder="Search" name="fieldsearch"  onChange={Filter}/>
                
            </div>
            <div id='main'>
                <Side/>  
                <Router>
                    <Switch>
                    <Route path="/home/interest"> <Interest /></Route>
                    <Route path="/home/jobview"><Jobview jobdetails={jobdetails} /></Route>
                    <Route path="/home"> <Jobs availablejobs={availablejobs} getfromjob={getfromjob} /></Route>
                    </Switch>
                </Router>
            </div>
        </div>
    )
}

export default Jobsearch;