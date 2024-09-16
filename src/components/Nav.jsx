import React, { useState } from "react";
import styled from "styled-components";
import BurgerButton from "./BurgerButton";

function Navbar() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  const closeMenu = () => {
    setClicked(false);
  };

  return (
    <NavContainer>
      <Nav>
        {/* Logo */}
        <Logo href="#home">Dev.</Logo>

        {/* Menu */}
        <Menu className={clicked ? "active" : ""}>
          <li>
            <a href="#home" onClick={closeMenu}>Home</a>
          </li>
          <li>
            <a href="#galeria" onClick={closeMenu}>Galería Virtual</a>
          </li>
          <li>
            <a href="#meme" onClick={closeMenu}>Sobre tu Meme</a>
          </li>
          <li>
            <a href="#nosotros" onClick={closeMenu}>Sobre Nosotros</a>
          </li>
          <li>
            <a href="#creadores" onClick={closeMenu}>Los Creadores</a>
          </li>
          <li>
            <a href="#contact" onClick={closeMenu}>Contacto</a>
          </li>
        </Menu>

        {/* Burger Button */}
        <BurgerButton handleClick={handleClick} clicked={clicked} />
        <BgDiv className={`initial ${clicked ? "active" : ""}`} />
      </Nav>
    </NavContainer>
  );
}

export default Navbar;

const NavContainer = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  background-color: transparent;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  background: linear-gradient(to bottom, rgba(255, 220, 89, 0.5), rgba(226, 115, 12, 0.5));
  transition: all 0.3s ease;

  @media (max-width: 960px) {
    padding: 1.2rem 1rem;
  }
`;

const Logo = styled.a`
  font-size: 1.5rem;
  color: white;
  font-weight: bold;
  text-decoration: none;
`;

const Menu = styled.ul`
  list-style: none;
  display: flex;
  gap: 2rem;
  transition: all 0.3s ease;

  li a {
    text-decoration: none;
    color: white;
    font-size: 1.2rem;
    transition: 0.3s;
  }

  li a:hover {
    color: #e2730c;
  }

  @media (max-width: 960px) {
    position: fixed;
    top: 0;
    right: -100%;
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: linear-gradient(to bottom, #FFDC59, #E2730C);
    gap: 2rem;
    transition: all 0.3s ease;

    &.active {
      right: 0;
    }

    li a {
      font-size: 1.5rem;
    }
  }
`;

const BgDiv = styled.div`
  position: absolute;
  background: rgba(0, 0, 0, 0.5);
  top: 0;
  right: -100%;
  width: 100%;
  height: 100vh;
  transition: all 0.6s ease;
  z-index: -1;

  &.active {
    right: 0;
  }
`;