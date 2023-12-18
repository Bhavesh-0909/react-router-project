import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Dashboard from "./pages/Dashboard"
import Navbar from "./components/Navbar"
import { useState } from "react";


function App() {

  const [IsLoggedIn, setIsLoggedIn]= useState(false);

  return (
    <div>
      <Navbar IsLoggedIn={IsLoggedIn} setIsLoggedIn={setIsLoggedIn}/>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login IsLoggedIn={IsLoggedIn} setIsLoggedIn={setIsLoggedIn}/>}/>
        <Route path="/signup" element={<Signup IsLoggedIn={IsLoggedIn} setIsLoggedIn={setIsLoggedIn}/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
    </div>
  );
}

export default App;
