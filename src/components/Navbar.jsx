import React from 'react'
import { useLocation } from 'react-router-dom';


const Navbar = () => {
    const location = useLocation();

    return (
        <div className="navbar">
            <>
                <a className="siteName">DogGenerator</a>
            </>
            <div className="navRight">
                {location.pathname === '/about' && (
                    <a className="navLinks" href="/" on>Home</a>
                )}
                {location.pathname === '/' && (
                    <a className="navLinks" href="/about">About</a>
                )}
            </div>
      </div> 
    )
}


export default Navbar;
