import React from 'react'
import logo from '../assets/Logo.svg';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
export default function Navbar(props) {
    let isLoggedIn=props.isLoggedIn;
    let setIsLoggedIn=props.setIsLoggedIn;
    return (

        <div className='w-full h-[75px] flex justify-center items-center text-white'>
            <div className='w-full flex justify-evenly items-center'>
                <Link to='/'>
                <img src={logo} width={160} height={32} loading='lazy' alt='Logo SVG' />
                </Link>

                <nav className='hidden gap-5 list-none md:Flex lg:flex'>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/'>About</Link></li>
                    <li><Link to='/'>Contact</Link></li>
                </nav>
                
                <div className='flex gap-5'>
                
                {!isLoggedIn && <Link to='/login'><button className='bg-richblack-800 text-richblack-100 p-[8px] rounded-md border border-richblack-700'>Log in</button></Link>}
                {!isLoggedIn && <Link to='/signup'> <button className='bg-richblack-800 text-richblack-100 p-[8px] rounded-md border border-richblack-700'>Sign Up</button></Link>}
                {isLoggedIn && <Link to='/'><button onClick={()=>{setIsLoggedIn(false);
                toast.success("Logged Out ");}} className='bg-richblack-800 text-richblack-100 p-[8px] rounded-md border border-richblack-700'>Log out</button></Link>}
                {isLoggedIn && <Link to='/dashboard'> <button className='bg-richblack-800 text-richblack-100 p-[8px] rounded-md border border-richblack-700'>DashBoard</button></Link>}
                
                    
                   
                </div>
            </div>
        </div>
    )
}
