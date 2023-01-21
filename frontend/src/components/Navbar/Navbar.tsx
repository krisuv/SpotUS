import React, { useState, useEffect, useMemo } from 'react';
import { NavLink } from 'react-router-dom';
import { Header, Nav } from './Navbar.styles';
import Logo from '../Logo/Logo';
import { ILink, INavbar } from './Navbar.types';
import { useScreenWidth } from '../../hooks';
import { prepareNavLinks } from './Navbar.helpers';
import HamburgerMenu from './HamburgerMenu/HamburgerMenu';


// eslint-disable-next-line react/prop-types
const Navbar = ({ userData }: INavbar): JSX.Element => {
  const [isBreakpointMet, setIsBreakpointMet] = useState(false);
  const isWidthMobile = useScreenWidth();
  const navLinks = useMemo<ILink[]>(() => {
    return prepareNavLinks(userData);
  }, [userData]);

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
          isWidthMobile
            ? (
              <HamburgerMenu userData={userData} />
            )
            : (
              navLinks.map(({link, text}: ILink) => (
                <NavLink key={link} to={link}>{text}</NavLink>
              ))
            )
        }
      </Nav>
    </Header>
  );
};

export default Navbar;