import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { useNavigate } from 'react-router-dom';


function LoginForm({setIsLoggedIn}) {

    const navigate = useNavigate()
    const [formData, setFormData]= useState({
        email:"", password:""
    })

    const [visible, setVisible]=useState(true);

    function changeHandeler(event){
        let {name, value}= event.target;
        setFormData((prevs)=> {
            return{
              ...prevs,
              [name] : value
            }
          })
    }

    function submitHandler(event){

        setIsLoggedIn(true);
        navigate("/dashboard");
        toast.success("logged in")
    }

  return (
    <form onSubmit={submitHandler}>
        <label>
            <p>Email :</p>
            <input
                className='bg-gray-900 text-white'
                required
                type="text"
                name="email"
                value={formData.email}
                onChange={changeHandeler}
                placeholder='Email'
            />
        </label>

        <label>
            <p>Password :</p>
            <input
                required
                className='bg-gray-900 text-white'
                type={visible ? "text" : "password"}
                name="password"
                value={formData.password}
                placeholder='Password'
                onChange={changeHandeler}
            />
            {visible ? (<IoMdEyeOff onClick={() => setVisible((prev) => !prev)} />) : 
            (<IoMdEye onClick={() => setVisible((prev) => !prev)} />)}
        </label>
        <button>Submit</button>
    </form>
  )
}

export default LoginForm