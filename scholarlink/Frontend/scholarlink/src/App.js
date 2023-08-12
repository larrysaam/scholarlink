import Signup from "./SignupLogin/Signup";
import Login from "./SignupLogin/Login";
import Side from "./SignupLogin/Signupside";
import Home from "./SignupLogin/Home";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './app.css'
import { Switch } from "react-router-dom/cjs/react-router-dom.min";


function App() {
  return (


<div className="app">
  <Router>
    <Switch>
      <Route path="/home"><Home /></Route>
      <Route path="/signup"><Signup /></Route>
      <Route path="/"><Login /></Route>
    </Switch>
  </Router>
  </div>
  );
};

export default App;


// <BrowserRouter>
//     <Routes>
//       <Route path='/' element = {
//         <div className="app">
//           <Side />
//           <Login />
//         </div>
//       }></Route>
//       <Route path='/signup' element = {
//         <div className="app">
//           <Side />
//           <Signup />
//         </div>
//       }></Route>
//     </Routes>
//     </BrowserRouter>