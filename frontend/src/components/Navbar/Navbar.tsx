import React, {useState, useEffect, useMemo, useContext} from 'react';
import { NavLink } from 'react-router-dom';
import { Header, Nav } from './Navbar.styles';
import Logo from '../Logo/Logo';
import { ILink } from './Navbar.types';
import { useScreenWidth } from '../../hooks';
import { prepareNavLinks } from './Navbar.helpers';
import HamburgerMenu from './HamburgerMenu/HamburgerMenu';
import { UserContext } from '../../context';


// eslint-disable-next-line react/prop-types
const Navbar = (): JSX.Element => {
  const [isBreakpointMet, setIsBreakpointMet] = useState(false);
  const { userToken } = useContext(UserContext);
  const isWidthMobile = useScreenWidth();
  const navLinks = useMemo<ILink[]>(() => {
    return prepareNavLinks(userToken);
  }, [userToken]);

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
              <HamburgerMenu userData={userToken} />
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