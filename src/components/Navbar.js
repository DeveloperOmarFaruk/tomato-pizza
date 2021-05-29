import React, {useState} from "react";
import logo from '../Images/logo.png'
import {Link} from 'react-router-dom'
import Dropdown from './Dropdown/Dropdown'

const Navbar = () => {

  const [click, setClick] = useState(false)
  const [dropdown, setDropdown] = useState(false)

  const handleClick = () => setClick(!click)

  const closeMobileMenu = () => setClick(false)

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false)
    }
    else{
      setDropdown(true)
    }
  }


  const onMouseLeave = () =>{
    if (window.innerWidth < 960){
      setDropdown(false)
    }
    else{
      setDropdown(false)
    }
  }

  return (
    <>
    <nav className="navbar">
      <div className="navbar__text">

        <Link to='/'  className="logo">
          <img src={logo} alt="logo" />
        </Link>

        <Link className='menu-icon' onClick={handleClick}>
          <i className = {click ? 'fas fa-bars' : 'fas fa-bars'}/>
        </Link>


        <ul className={click ? 'nav-menu  active' : 'nav-menu'}>

          <li className="nav-item">
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
            Home
            </Link>
          </li>


          <li className="nav-item">
            <Link to='/menu' className='nav-links' onClick={closeMobileMenu}>
            Menu
            </Link>
          </li>


          <li className="nav-item">
            <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
            About
            </Link>
          </li>



          <li className="nav-item" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <Link to='/shop' className='nav-links' onClick={closeMobileMenu}>
            Shop <i className='fas fa-chevron-down'/>
            </Link>
            {dropdown && <Dropdown/>}
          </li>



          <li className="nav-item" >
            <Link to='/news' className='nav-links' onClick={closeMobileMenu}>
            News
            </Link>
           
          </li>



          <li className="nav-item">
            <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
            Contact
            </Link>
          </li>
        
        
        </ul>
      </div>
    </nav>
    </>
  );
};

export default Navbar;
