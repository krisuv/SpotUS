import { NavLink } from "react-router-dom";
import { Logo } from '../../assets'
import { Header, Nav } from "./Navbar.styles";

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
  )
}

export default Navbar;