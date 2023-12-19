import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
 

function SignupForm({setIsLoggedIn}) {

    const navigate = useNavigate();

    const [FormData, setFormData]=useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmpassword:""
    })

    const [visible, setVisible]=useState({
        password:false,
        confirmpassword:false
    })

    function eyeHandler(id){
         setVisible((prev) => {
           return {...prev, [id]: !prev[id],}
         });
    }

    function changeHandler(event){
        let {name, value}=event.target;
        setFormData((prev)=>{
            return {
                ...prev,
                [name] : value
            }
        })
    }

    function submission(event) {
        event.preventDefault();
        if (FormData.password !== FormData.confirmpassword) {
          toast.error('Passwords do not match');
          return;
        }
    
        setIsLoggedIn(true);
        navigate('/dashboard');
        toast.success('Logged in');

        const finaldata ={
            ...FormData,
            AccountType
        }
        console.log(finaldata)
      }

      const [AccountType, setAccountType]=useState("student")

  return (
    <form onSubmit={submission} className='mt-4 flex flex-col gap-3'>

        <div className='flex gap-x-1 max-w-max p-1 bg-richblack-800 rounded-full'>
            <button onClick={()=>setAccountType("student")}
            className={`${AccountType === "student" ? "bg-richblack-900 text-richblack-5":"bg-tranparent text-richblack-200"
            } py-2 px-5 rounded-full transition-all duration-200 `}
            >Student</button>
            <button 
            onClick={()=>setAccountType("instructor")}
            className={`${AccountType === "instructor" ? "bg-richblack-900 text-richblack-5":"bg-tranparent text-richblack-200"
            } py-2 px-5 rounded-full transition-all duration-200 `}
            >Instructor</button>
        </div>

        <div className='flex w-full gap-6'>
            <label>
                <p className='text-[0.875rem] text-richblack-100 leading-5 mb-2'
                >First Name <sup className='text-red-700'>*</sup></p>
                <input
                    className='bg-richblack-800 text-richblack-100 w-full p-[5px] rounded-lg'
                    type='text'
                    name="firstName"
                    value={FormData.firstName}
                    onChange={changeHandler}
                    placeholder='first Name'
                />
            </label> 

            <label>
                <p className='text-[0.875rem] text-richblack-100 leading-5 mb-2'>Last Name 
                <sup className='text-red-700'>*</sup></p>
                <input
                    className='bg-richblack-800 text-richblack-100 w-full p-[5px] rounded-lg'
                    type='text'
                    name="lastName"
                    value={FormData.lastName}
                    onChange={changeHandler}
                    placeholder='Last Name'
                />
            </label>
        </div>
        

        <label className='w-full'>
            <p className='text-[0.875rem] text-richblack-100 leading-5 mb-2'>
            Email <sup className='text-red-700'>*</sup></p>
            <input
                className='bg-richblack-800 text-richblack-100 w-11/12 p-[5px] rounded-lg'
                type="email"
                name="email"
                value={FormData.email}
                onChange={changeHandler}
                placeholder='Enter Email'
            />
        </label>

        <div className='flex w-full gap-6'>
            <label className='relative'>
                <p className='text-[0.875rem] text-richblack-100 leading-5 mb-2'>Password
                <sup className='text-red-700'>*</sup></p>
                <input
                    className='bg-richblack-800 text-richblack-100 w-full p-[5px] rounded-lg'
                    required
                    type={visible.password ? "text" : "password"}
                    name="password"
                    value={FormData.password}
                    onChange={changeHandler}
                    placeholder='Enter Password'
                />
                <span className='absolute right-2 top-[60%] z-10 w-[20px] cursor-pointer'>
                    {visible.password ? (<IoMdEyeOff onClick={()=>eyeHandler("password")} />) : 
                    (<IoMdEye onClick={()=>eyeHandler("password")} />)}
                </span>
                
            </label> 

            <label className='relative'>
                <p className='text-[0.875rem] text-richblack-100 leading-5 mb-2'>Confirm Password
                <sup className='text-red-700'>*</sup></p>
                <input
                    className='bg-richblack-800 text-richblack-100 w-full p-[5px] rounded-lg'
                    required
                    type={visible.confirmpassword ? "text" : "password"}
                    name="confirmpassword"
                    value={FormData.confirmpassword}
                    onChange={changeHandler}
                    placeholder='Confirm Password'
                /> 
                <span className='absolute right-2 top-[60%] z-10 w-[20px] cursor-pointer'>
                    {visible.confirmpassword ? (<IoMdEyeOff onClick={()=>eyeHandler("confirmpassword")}/>) : 
                    (<IoMdEye onClick={()=>eyeHandler("confirmpassword")}/>)}
                </span>
                
            </label>
        </div>

        <button className='text-center p-2 mt-4 w-11/12 bg-yellow-50 text-black rounded-lg'
        >Create Account</button>



    </form>
  )
}

export default SignupForm