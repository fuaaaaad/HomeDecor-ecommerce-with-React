import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
           HD
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <div class = 'wrapper'>    
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            
            <li className='nav-item'>
               <Link to='/Categories' className='nav-links' onClick={closeMobileMenu}>Categories</Link> 
               <ul>
                <Link to = '/Categories/LivingRoom'><li>Living Room</li></Link>
                <Link to = '/Categories/Bedroom'><li>Bedroom</li></Link>
                <Link to = '/Categories/Kitchen'><li>Kitchen</li></Link>
                <Link to = '/Categories/Bathroom'><li>Lavatory</li></Link>
                </ul>
              </li>
            
            <li className='nav-item'>
              <Link
                to='/About'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                About us
              </Link>
              
            </li>

            <li className='nav-item'>
              <Link
                to='/Contact'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
          </div>
                </div>
      </nav>
    </>
  );
}

export default Navbar;