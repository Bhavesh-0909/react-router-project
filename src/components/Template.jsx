import React from 'react'
import frame from "../assets/frame.png"
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
function Template(props) {
    let {title, desc1, desc2, image, formType, setIsLoggedIn}= props;
  return (
    <div className='flex w-11/12 gap-10 mx-auto justify-evenly mt-10'>
        <div>
            <div>
                <h3>{title}</h3>
                <p>{desc1}</p>
                <p>{desc2}</p>
            </div>

            {formType === "login"?
            (<LoginForm setIsLoggedIn={setIsLoggedIn}/>) :
            (<SignupForm setIsLoggedIn={setIsLoggedIn}/>)}

            <div>
                <div></div>
                <div>OR</div>
                <div></div>
            </div>

            <button>Sign Up with Google</button>
        </div>
        <div className='relative'>
            <img src={image} className='h-[70%] mx-auto'/>
            <img src={frame} className='absolute left-5 top-5 -z-10 h-[70%] '/>
        </div>
        
    </div>
  )
}

export default Template