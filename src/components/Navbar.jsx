import React from 'react'
import logo from "../assets/Logo.svg"
import { Link, NavLink } from 'react-router-dom'

export const Navbar = (props) => {
    let {setIsLoggedIn , IsLoggedIn} = props;
  return (
    <div className='flex justify-evenly w-11/12 h-15 items-center'>

        <Link to="/"><img src={logo} className='h-fit p-2 w-fit'/></Link>
        
        <ul className='flex justify-evenly gap-5'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="#">About</Link></li>
            <li><Link to="#">Contact</Link></li>
        </ul>
        <div className='flex justify-evenly gap-1'>
            { !IsLoggedIn &&
                <NavLink to="/login"><button className='px-4 py-1'>login</button></NavLink>
            }
            { !IsLoggedIn &&
                <NavLink to="/signup"><button className='px-4 py-1'>Sign up</button></NavLink>
            }
            { IsLoggedIn &&
                <NavLink to="/"><button className='px-4 py-1'>Log out</button></NavLink>
            }
            { IsLoggedIn &&
                <NavLink to="/dashboard"><button className='px-4 py-1'>Dashboard</button></NavLink>
            }
            
        </div>
    </div>
  )
}

export default Navbar;