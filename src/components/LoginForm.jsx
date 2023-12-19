import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { useNavigate } from 'react-router-dom';


function LoginForm({setIsLoggedIn}) {

    const navigate = useNavigate()
    const [formData, setFormData]= useState({
        email:"", password:""
    })

    const [visible, setVisible]=useState(false);

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
    <form onSubmit={submitHandler} className='mt-4 flex flex-col gap-3'>
        <label>
            <p className='text-[0.875rem] text-richblack-100 leading-5 mb-2'
            >
            Email Address
            <sup className='text-red-700'>*</sup>
            </p>
            <input
                className='bg-richblack-800 text-richblack-100 w-full p-[9px] rounded-lg'
                required
                type="text"
                name="email"
                value={formData.email}
                onChange={changeHandeler}
                placeholder='Enter Email'
            />
        </label>

        <label className='relative'>
            <p className='text-[0.875rem] text-richblack-100 leading-5 mb-2 relative'
            >Password<sup className='text-red-700'>*</sup></p>
            <input
                required
                className='bg-richblack-800 text-richblack-100 w-full p-[9px] rounded-lg'
                type={visible ? "text" : "password"}
                name="password"
                value={formData.password}
                placeholder='Enter Password'
                onChange={changeHandeler}
            />
            <span className='absolute right-3 top-[45%] z-10 w-[20px] cursor-pointer'
            >
                {visible ? (<IoMdEyeOff className='w-[20px] h-[20px]' onClick={() => setVisible((prev) => !prev)} />) : 
                (<IoMdEye className='w-[20px] h-[20px]' onClick={() => setVisible((prev) => !prev)} />)}
            </span>
            <p className='text-sm text-blue-100 flex justify-end'>Forgot password</p>
            
        </label>

        <button className='text-center p-2 w-full bg-yellow-50 text-black rounded-lg'>
            Submit
        </button>
    </form>
  )
}

export default LoginForm