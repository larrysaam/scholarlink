import Signup from "./SignupLogin/Signup";
import Login from "./SignupLogin/Login";
import Side from "./SignupLogin/Signupside";
import './app.css'

function App() {
  return (
    <div className="app">
      <Side />
      <Signup />
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