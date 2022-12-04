import React from 'react';
import { Outlet, Link } from "react-router-dom"
import './navbar.css'
import logo from '../../images/logos/logo.jpg'



const Nav= (props)=>{
    
    return (
       <> 
        <div className='nav'>
           <img className='logo' src={logo} alt='logo'></img>
           <ul className='links'>
                <li key='1'>
                    <Link to='/'>Home</Link>
                </li>
                <li key='2'>
                    <Link to='/about'>About</Link>
                </li>
                <li key='3'>
                    <Link to='/projects'>Projects</Link>
                </li>
           </ul>
        </div>
        <Outlet />
        </>
    )
}

export default Nav;