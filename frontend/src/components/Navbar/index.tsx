import { NavLink } from 'react-router-dom';
import { Header, Nav } from './Navbar.styles';
import Logo from '../Logo/Logo';
import React from 'react';

const Navbar = (): JSX.Element => {
  return (
    <Header>
      <Logo />
      <Nav>
        <NavLink to={'/'}>Główna</NavLink>
        <NavLink to={'/profile'}>Profil</NavLink>
        <NavLink to={'/contact'}>Kontakt</NavLink>
      </Nav>
    </Header>
  );
};

export default Navbar;