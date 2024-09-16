import { useState, useEffect } from "react";
import styled from "styled-components";
import BurgerButton from "./BurgerButton";

function Navbar() {
  const [clicked, setClicked] = useState(false);
  const [activeLetter, setActiveLetter] = useState(null);

  const handleClick = () => {
    setClicked(!clicked);
  };

  const closeMenu = () => {
    setClicked(false);
  };

  const handleLetterClick = (index) => {
    setActiveLetter(index);
  };

  useEffect(() => {
    const spans = document.querySelectorAll(".word span");
    spans.forEach((span, idx) => {
      setTimeout(() => {
        span.classList.add("active");
      }, 750 * (idx + 1));
    });
  }, []);

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

        {/* Animated Text MUSENION */}
        <TextContainer>
          <span className={activeLetter === 0 ? "active" : ""} onClick={() => handleLetterClick(0)}>M</span>
          <span className={activeLetter === 1 ? "active" : ""} onClick={() => handleLetterClick(1)}>U</span>
          <span className={activeLetter === 2 ? "active" : ""} onClick={() => handleLetterClick(2)}>S</span>
          <span className={activeLetter === 3 ? "active" : ""} onClick={() => handleLetterClick(3)}>E</span>
          <span className={activeLetter === 4 ? "active" : ""} onClick={() => handleLetterClick(4)}>N</span>
          <span className={activeLetter === 5 ? "active" : ""} onClick={() => handleLetterClick(5)}>I</span>
          <span className={activeLetter === 6 ? "active" : ""} onClick={() => handleLetterClick(6)}>O</span>
          <span className={activeLetter === 7 ? "active" : ""} onClick={() => handleLetterClick(7)}>N</span>
        </TextContainer>

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
    color: #E2730C00;
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
    background: linear-gradient(to bottom, #FFDB5900, #E2730C00);
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

const TextContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.3rem;
  font-family: 'Anton', sans-serif;
  font-size: 40px;
  font-weight: 400;
  color: white;

  span {
    cursor: pointer;
    display: inline-block;
    user-select: none;
    line-height: 0.8;
  }

  span:nth-child(1),
  span:nth-child(5) {
    font-weight: bold;
  }

  span.active:nth-child(1) {
    animation: balance 1.5s ease-out;
    transform-origin: bottom left;
  }

  span.active:nth-child(2) {
    animation: shrinkjump 1s ease-in-out;
    transform-origin: bottom center;
  }

  span.active:nth-child(3) {
    animation: falling 2s ease-out;
    transform-origin: bottom center;
  }

  span.active:nth-child(4) {
    animation: rotate 1s ease-out;
  }

  span.active:nth-child(5) {
    animation: toplong 1.5s linear;
  }

  @keyframes balance {
    0%, 100% {
      transform: rotate(0deg);
    }
    30%, 60% {
      transform: rotate(-45deg);
    }
  }

  @keyframes shrinkjump {
    10%, 35% {
      transform: scale(2, 0.2) translate(0, 0);
    }
    45%, 50% {
      transform: scale(1) translate(0, -150px);
    }
    80% {
      transform: scale(1) translate(0, 0);
    }
  }

  @keyframes falling {
    12% {
      transform: rotateX(240deg);
    }
    24% {
      transform: rotateX(150deg);
    }
    36% {
      transform: rotateX(200deg);
    }
    48% {
      transform: rotateX(175deg);
    }
    60%, 85% {
      transform: rotateX(180deg);
    }
    100% {
      transform: rotateX(0deg);
    }
  }

  @keyframes rotate {
    20%, 80% {
      transform: rotateY(180deg);
    }
    100% {
      transform: rotateY(360deg);
    }
  }

  @keyframes toplong {
    10%, 40% {
      transform: translateY(-48vh) scaleY(1);
    }
    90% {
      transform: translateY(-48vh) scaleY(4);
    }
  }

  @media (min-width: 960px) {
    display: none;
  }
`;