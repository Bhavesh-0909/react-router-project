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
         setVisible((prev) => ({
            ...prev,
            [id]: !prev[id],
          }));
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
      }

  return (
    <form onSubmit={submission}>
        <div>
            <label>
                <p>First Name </p>
                <input
                    type='text'
                    name="firstName"
                    value={FormData.firstName}
                    onChange={changeHandler}
                    placeholder='first Name'
                />
            </label> 

            <label>
                <p>Last Name </p>
                <input
                    type='text'
                    name="lastName"
                    value={FormData.lastName}
                    onChange={changeHandler}
                    placeholder='Last Name'
                />
            </label>
        </div>
        

        <label>
            <p>email</p>
            <input
                type="email"
                name="email"
                value={FormData.email}
                onChange={changeHandler}
                placeholder='email'
            />
        </label>

        <div>
            <label>
                <p>Password</p>
                <input
                    className='bg-gray-900 text-white'
                    required
                    type={visible ? "text" : "password"}
                    name="password"
                    value={FormData.password}
                    onChange={changeHandler}
                    placeholder='first Name'
                />
                {visible ? (<IoMdEyeOff onClick={()=>eyeHandler("password")} />) : 
                (<IoMdEye onClick={()=>eyeHandler("password")} />)}
            </label> 

            <label>
                <p>Confirm Password</p>
                <input
                    className='bg-gray-900 text-white'
                    required
                    type={visible ? "text" : "password"}
                    name="confirmpassword"
                    value={FormData.confirmpassword}
                    onChange={changeHandler}
                    placeholder='Last Name'
                />
                {visible ? (<IoMdEyeOff onClick={()=>eyeHandler("confirmpassword")}/>) : 
                (<IoMdEye onClick={()=>eyeHandler("confirmpassword")}/>)}
            </label>
        </div>

        <button type="submit">Create Account</button>



    </form>
  )
}

export default SignupForm