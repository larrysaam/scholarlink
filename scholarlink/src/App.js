import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import EditProfile from "./pages/editProfile/EditProfile";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";

import "./style/dark.scss";
import { DarkModeContext } from "./context/darkModeContext";
import { useContext } from "react";


function App() {
  const {darkMode} = useContext(DarkModeContext);
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route path='login' element={<Login/>} />
          <Route path='register' element={<Register/>} />
          <Route index element={<Home />} />
          <Route path='profile'>
            <Route path=':userId' element={<Profile />} />
            <Route path='userId/edit' element={<EditProfile />} />
          </Route>
          
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
