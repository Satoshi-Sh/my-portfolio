import React from 'react';
import { Outlet, Link } from "react-router-dom"
import './navbar.css'


const Nav= (props)=>{
    
    return (
       <> 
        <div className='nav'>
           <img className='logo' src="images/logo.jpg" alt='logo'></img>
           <ul className='links'>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
                <li>
                    <Link to='/projects'>Projects</Link>
                </li>
           </ul>
        </div>
        <Outlet />
        </>
    )
}

export default Nav;