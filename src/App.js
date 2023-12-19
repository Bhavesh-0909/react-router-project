import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Dashboard from "./pages/Dashboard"
import Navbar from "./components/Navbar"
import { useState } from "react";
import { PrivateRoute } from "./components/PrivateRoute";


function App() {

  const [IsLoggedIn, setIsLoggedIn]= useState(false);

  return (
    <div className="w-screen min-h-screen h-auto px-5 bg-richblack-900 text-richblack-100">
      <Navbar IsLoggedIn={IsLoggedIn} setIsLoggedIn={setIsLoggedIn}/>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login IsLoggedIn={IsLoggedIn} setIsLoggedIn={setIsLoggedIn}/>}/>
        <Route path="/signup" element={<Signup IsLoggedIn={IsLoggedIn} setIsLoggedIn={setIsLoggedIn}/>}/>
        <Route path="/dashboard" element={
          <PrivateRoute IsLoggedIn={IsLoggedIn}>
             <Dashboard/>
          </PrivateRoute>
       
        }/>
      </Routes>
    </div>
  );
}

export default App;
