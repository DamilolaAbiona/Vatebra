import React, { useState } from 'react';
import '../styles/Navbar.css';
import logo from '../Assets/Images/vatebra-logo.svg';
import flag from '../Assets/Images/nigeria-flag.png'
import {  Link, useLocation, } from 'react-router-dom';
import hamburgerIcon from '../Assets/icons/hamburger-icon.svg';
import cancelIcon from '../Assets/icons/navbar-cancel-icon.svg';


const Navbar = () => {
  const location = useLocation();
  const [toggleMenu, setToggleMenu] = useState(true);

  const HandleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  }


  return (
    <>
    <div className='navbar_container'>
      <div className='logo_container'>
        <Link to='/'><img src={logo} alt="vatebra logo" /></Link>
      </div>
      <div className='flag_container'>
        <img src={flag} alt="Nigeria flag" />
      </div>

      { toggleMenu? (
        <div className='hambuger_icon' onClick={HandleToggleMenu }>
          <img src={hamburgerIcon} alt="hamburger Icon" />
        </div>
      ):(
        <div className='hambuger_icon' onClick={HandleToggleMenu }>
          <img src={cancelIcon} alt="cancel Icon" />
        </div>
      )}
      
      <div className='navlink_container'>
        <div><Link to='/'>Home</Link></div>
        <div><Link to='/aboutus'>About us</Link></div>
        <div><Link to='/products'>Products</Link></div>
        <div><Link to='/subsidiaries'>Subsidiaries</Link></div>
        <div><Link to='/contactus'>Contact us</Link></div>
        {/* <div><Link to='/location'>Our Locations</Link></div> */}
      </div>
    </div>
        
      <div className={toggleMenu? 'showNavDropdown ': 'navbar_mobile_container'} >
        <div><Link  to='/' className={location.pathname === '/' ? 'active' : ''} onClick={HandleToggleMenu}
        >Home</Link></div>
        <div><Link  to='/aboutus' className={location.pathname === '/aboutus' ? 'active' : ''} onClick={HandleToggleMenu}
        >About us</Link></div>
        <div><Link  to='/products' className={location.pathname === '/products' ? 'active' : ''} onClick={HandleToggleMenu}
        >Products</Link></div>
        <div><Link  to='/subsidiaries' className={location.pathname === '/subsidiaries' ? 'active' : ''} onClick={HandleToggleMenu}
        >Subsidiaries</Link></div>
        <div><Link  to='/contactus' className={location.pathname === '/contactus' ? 'active' : ''} onClick={HandleToggleMenu}
        >Contact us</Link></div>
        {/* <div><NavLink  to='/location'>Our Locations</NavLink ></div> */}
      </div>
    </>
  )
}

export default Navbar