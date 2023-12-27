import React from 'react'
import frame from "../assets/frame.png"
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import { FcGoogle } from "react-icons/fc";

function Template(props) {
    let {title, desc1, desc2, image, formType, setIsLoggedIn}= props;
  return (
    <div className='flex flex-wrap max-w-[1080px] gap-5 mx-auto justify-between py-5'>
        <div className='w-[450px] max-w-[450px]'>
            <div>
                <h3 
                className='text-richblack-5 text-[1.875rem] leading-[2.375rem] font-semibold'
                >{title}</h3>
                <p className='text-[1.275rem] leading-[1.625rem] mt-4'>
                    <span className='text-richblack-100'>{desc1}</span>
                    <span className='italic text-blue-100'>{desc2}</span>
                </p>
                
            </div>

            {formType === "login"?
            (<LoginForm setIsLoggedIn={setIsLoggedIn}/>) :
            (<SignupForm setIsLoggedIn={setIsLoggedIn}/>)}

            <div className='flex justify-center items-center w-full gap-x-1 my-4'>
                <div className='h-[1px] w-full bg-richblack-700'></div>
                <div className='text-richblack-700 font-medium leading-7'>OR</div>
                <div className='h-[1px] w-full bg-richblack-700'></div>
            </div>

            <button 
            className='flex justify-center items-center w-full gap-2 py-1 bg-richblack-800 border rounded-lg border-richblack-700 font-medium'
            ><FcGoogle size="19px"/><p>Sign up with Google</p></button>
        </div>
        <div className='relative flex w-[450px] mt-5'>
            <img src={image} className='relative w-11/12 h-auto max-w-[400px] max-h-[400px] z-10 aspect-square'/>
            <img src={frame} className='absolute right-0 top-6 z-0 w-11/12 h-auto max-w-[400px] max-h-[400px] aspect-square'/>
        </div>
        
    </div>
  )
}

export default Template