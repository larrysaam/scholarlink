import './style.css'
import { useHistory } from "react-router-dom";

const Side = ()=>{
    const history = useHistory();
    return(
        <div id="Sidebar">
            <ul>
                <li><button onClick={() => history.push("/home/interest")}>Interest</button></li>
                <li><button onClick={() => history.push("/home")}>Jobs</button></li>
            </ul>
        </div>
    );
};

export default Side;