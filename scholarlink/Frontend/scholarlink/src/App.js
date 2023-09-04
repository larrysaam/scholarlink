import Signup from "./SignupLogin/Signup";
import Login from "./SignupLogin/Login";
import Side from "./SignupLogin/Signupside";
import Jobsearch from "./Job/jobsearch";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './app.css'
import { Switch } from "react-router-dom/cjs/react-router-dom.min";


function App() {
  return (


<div className="app">
  <Router>
    <Switch>
      <Route path="/home"><Jobsearch /></Route>
      <Route path="/signup"><Signup /></Route>
      <Route path="/"><Login /></Route>
    </Switch>
  </Router>
  </div>
  );
};

export default App;
