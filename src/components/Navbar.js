import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import { UserAuth } from '../components/context/AuthContext';
import './Navbar.css';

function Navbar() {
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
  
  const { user, logOut } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut()
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            travelX
            <i class='fas fa-plane-departure' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>

            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>

            {user?.displayName ?<li className='nav-item'>
              <Link to='/SSNBox' className='nav-links' onClick={closeMobileMenu}>
                SSN Search
              </Link>
            </li>: <></>}
            {user?.displayName ?<li className='nav-item'>
              <Link to='/AddPage' className='nav-links' onClick={closeMobileMenu}>
                Add/ Edit
              </Link>
            </li>: <></>}

            <li>
              {user?.displayName ? <Link className='nav-links-mobile' onClick ={handleSignOut}>Logout</Link>:<Link to='/SignIn' className='nav-links-mobile' onClick={closeMobileMenu}>Sign In</Link>}
            </li>
          </ul>
          {user?.displayName ? button &&<Button buttonStyle='btn--outline' onClick ={handleSignOut}>Logout</Button>:button && <Button buttonStyle='btn--outline'>SIGN IN</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;