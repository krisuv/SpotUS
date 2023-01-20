import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Header, Nav } from './Navbar.styles';
import Logo from '../Logo/Logo';
import { INavbar } from './Navbar.types';

const Navbar = ({ userData }: INavbar): JSX.Element => {
  const [isBreakpointMet, setIsBreakpointMet] = useState(false);
  const setScrolled = () => {
    if (window.scrollY >= 50) {
      setIsBreakpointMet(true);
    } else {
      setIsBreakpointMet(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', setScrolled);
    return () => {
      document.removeEventListener('scroll', setScrolled);
    };
  });


  return (
    <Header isBreakpointMet={isBreakpointMet}>
      <Logo />
      <Nav>
        {
          userData
            ? (
              <>
                <NavLink to={'/'}>Główna</NavLink>
                <NavLink to={'/profile'}>Profil</NavLink>
                <NavLink to={'/contact'}>Kontakt</NavLink>
              </>
            )
            : (
              <>
                <NavLink to={'/login'}>Zaloguj</NavLink>
                <NavLink to={'/register'}>Zarejstruj</NavLink>
              </>
            )
        }
      </Nav>
    </Header>
  );
};

export default Navbar;