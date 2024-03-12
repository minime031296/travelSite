import React, { useContext, useState } from 'react';
import './Navbar.css';
import { SiYourtraveldottv } from "react-icons/si";
import { HiDotsVertical } from "react-icons/hi";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { ImProfile } from "react-icons/im";
import { AuthContext } from '../../Authcontext/AuthContextProvider';
import { Link, useNavigate } from 'react-router-dom';


const Navbar = () => {
    const [active, setActive] = useState('NavBar')
    const { setIsLoggedIn} = useContext(AuthContext)
    const navigate = useNavigate()

    const showNavbar = () => {
        setActive("NavBar activateNavBar")
    }

    const ClosingNavbar = () => {
        setActive(active === 'NavBar' ? '' : 'NavBar');
    }

    const handleLogout = () => {
        setIsLoggedIn(false)
        navigate('/login')
    }
    
  return (
    <div>
     <section className="NavSection">
        <header className='Header flex'>
            <div className="LogoDiv">
                <Link to="/" className='loGo flex'>
                    <h1><SiYourtraveldottv />{"    "}GhUmAkaD </h1>
                </Link>
            </div>

            <div className={active}>
                <ul className='navLists flex'>
                    <li className='navbarItem '>
                        <Link to="/" className='navbarLink'>HOME</Link>
                    </li>
                    <li className='navbarItem '>
                        <Link to="/shop" className='navbarLink'>SHOP</Link>
                    </li>
                    <li className='navbarItem '>
                        <Link to="/package" className='navbarLink'>PACKAGES</Link>
                    </li>
                    <li className='navbarItem '>
                        <Link to="/page" className='navbarLink'>PAGES</Link>
                    </li>
                    <li className='navbarItem '>
                        <Link to="/news" className='navbarLink'>NEWS</Link>
                    </li>
                    <li className='navbarItem '>
                        <Link to="/contact" className='navbarLink'>CONTACT</Link>
                    </li>
                    
                    <div className='userProfile'>
                    <ImProfile />
                    <button onClick={handleLogout}>Logout</button>
                    </div>
                    
                    <button className='btn'>
                            <Link to="/booknow" >BOOK NOW</Link>
                    </button>
                    
                </ul>
           
         

            <div className='NavBarClosing' onClick={ClosingNavbar}>
            <IoMdCloseCircleOutline className='icon' />
            </div>

            </div>

            
            <div className="toggleNavbar" onClick={showNavbar}>
            <HiDotsVertical />
            </div>

            
        </header>
     </section>
    </div>
  )
}

export default Navbar
