import React from 'react'
import logo from "../assets/Logo.svg"
import { Link, NavLink } from 'react-router-dom'
import toast from 'react-hot-toast';

export const Navbar = (props) => {

    let {setIsLoggedIn , IsLoggedIn} = props;

    function logoutHandler(){
        setIsLoggedIn(false)
        toast.success("logged out");
    }

  return (
    <div className='flex flex-wrap justify-between mx-auto w-11/12 h-15 items-center max-w-[1080px] gap-5 py-5'>

        <Link to="/"><img src={logo} className='h-11/12'/></Link>
        
        <ul className='flex justify-evenly gap-5'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="#">About</Link></li>
            <li><Link to="#">Contact</Link></li>
        </ul>
        <div className='flex justify-evenly gap-3'>
            { !IsLoggedIn &&
                <NavLink to="/login"><button className='px-4 py-1 bg-richblack-800 border border-richblack-700 text-center rounded-md'>login</button></NavLink>
            }
            { !IsLoggedIn &&
                <NavLink to="/signup"><button className='px-4 py-1 bg-richblack-800 border border-richblack-700 rounded-md'>Sign up</button></NavLink>
            }
            { IsLoggedIn &&
                <NavLink to="/"><button onClick={logoutHandler} className='px-4 py-1 bg-richblack-800 border border-richblack-700 rounded-md'>Log out</button></NavLink>
            }
            { IsLoggedIn &&
                <NavLink to="/dashboard"><button className='px-4 py-1 bg-richblack-800 border border-richblack-700 rounded-md'>Dashboard</button></NavLink>
            }
            
        </div>
    </div>
  )
}

export default Navbar;