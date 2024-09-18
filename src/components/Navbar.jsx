import { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import BurgerButton from "./BurgerButton";

function Navbar() {
  const [clicked, setClicked] = useState(false);
  const [activeLetter, setActiveLetter] = useState(null);
  const location = useLocation();

  // Maneja si la ruta es Home o no
  const [isHome, setIsHome] = useState(location.pathname === "/");

  useEffect(() => {
    setIsHome(location.pathname === "/");
  }, [location]);

  const handleClick = () => {
    setClicked(!clicked); // Cambia el estado de `clicked` al hacer clic
  };

  const closeMenu = () => {
    setClicked(false); // Cierra el menú al hacer clic en la "X"
  };

  // Animar letras de manera aleatoria cada 5 segundos
  useEffect(() => {
    const spans = document.querySelectorAll(".word span");
    const animateRandomly = () => {
      const randomIndex = Math.floor(Math.random() * spans.length);
      setActiveLetter(randomIndex);
    };
    const intervalId = setInterval(animateRandomly, 5000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const spans = document.querySelectorAll('.word span');

    spans.forEach((span, idx) => {
      span.addEventListener('click', (e) => {
        e.target.classList.add('active');
      });
      span.addEventListener('animationend', (e) => {
        e.target.classList.remove('active');
      });

      // Initial animation
      setTimeout(() => {
        span.classList.add('active');
      }, 750 * (idx + 1));
    });
  }, []);

  return (
    <NavContainer isHome={isHome}>
      <Nav>
        {/* Burger Button para versión móvil (solo <960px) */}
        <BurgerButtonContainer>
          <BurgerButton handleClick={handleClick} clicked={clicked} />
        </BurgerButtonContainer>

        {/* Mostrar X cuando el menú está desplegado */}
        <Menu className={clicked ? "active" : ""}>
          {/* Botón de cierre "X" visible solo cuando el menú está desplegado */}
          {clicked && <CloseButton onClick={closeMenu}>✖</CloseButton>}
          <li className={location.pathname === "/" ? "selected" : ""}>
            <Link to="/" onClick={closeMenu}>Home</Link>
          </li>
          <li className={location.pathname === "/gallery" ? "selected" : ""}>
            <Link to="/gallery" onClick={closeMenu}>Galería Virtual</Link>
          </li>
          <li className={location.pathname === "/creatememe" ? "selected" : ""}>
            <Link to="/creatememe" onClick={closeMenu}>Sube tu Meme</Link>
          </li>
          <li className={location.pathname === "/aboutus" ? "selected" : ""}>
            <Link to="/aboutus" onClick={closeMenu}>Sobre Nosotros</Link>
          </li>
          <li className={location.pathname === "/contactus" ? "selected" : ""}>
            <Link to="/contactus" onClick={closeMenu}>Contacto</Link>
          </li>
        </Menu>

        {/* Logo MUSENION siempre visible */}
        <Logo>
          <TextContainer className="word">
            <span className={activeLetter === 0 ? "active" : ""}>M</span>
            <span className={activeLetter === 1 ? "active" : ""}>U</span>
            <span className={activeLetter === 2 ? "active" : ""}>S</span>
            <span className={activeLetter === 3 ? "active" : ""}>E</span>
            <span className={activeLetter === 4 ? "active" : ""}>N</span>
            <span className={activeLetter === 5 ? "active" : ""}>I</span>
            <span className={activeLetter === 6 ? "active" : ""}>O</span>
            <span className={activeLetter === 7 ? "active" : ""}>N</span>
          </TextContainer>
        </Logo>

        <BgDiv className={`initial ${clicked ? "active" : ""}`} onClick={closeMenu} />
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
  background-color: ${(props) => (props.isHome ? "transparent" : "#33517D")};

  @media (max-width: 960px) {
    background-color: transparent;
  }
`;

const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem; /* Cambiaremos esto para pantallas grandes */
  background: transparent;
  transition: all 0.3s ease;

  @media (max-width: 960px) {
    padding: 1.2rem 1rem;
    background: transparent;
  }

  @media (min-width: 960px) {
    padding: 1rem 1.5rem; /* Reducimos el padding (20% menos) */
  }
`;

/* Botón de cierre (X) visible solo en móviles */
const CloseButton = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  font-size: 2.5rem;
  color: white;
  cursor: pointer;
  z-index: 101; /* Aseguramos que esté por encima del menú */

  @media (min-width: 960px) {
    display: none; /* Escondemos el botón en pantallas grandes */
  }
`;

/* Burger button solo visible en pantallas pequeñas (<960px) */
const BurgerButtonContainer = styled.div`
  display: none;
  
  @media (max-width: 960px) {
    display: block;
  }
`;

/* Logo MUSENION, siempre a la derecha */
const Logo = styled.div`
  font-size: 1.5rem;
  color: white;
  font-weight: bold;
  text-decoration: none;
  position: absolute;
  right: 20px;

  /* @media (min-width: 960px) {
    right: 30px;
  } */
`;

/* Menu, escondido en móviles y alineado a la izquierda en pantallas grandes */
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

  li.selected a {
    color: #33517d;
    background-color: white;
    border-radius: 5px;
    padding: 5px 10px;
  }

  li a:hover {
    color: #f4da4b;
  }

  @media (max-width: 960px) {
    position: fixed;
    top: 0;
    left: -100%;
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: linear-gradient(to bottom, #ffdb59, #e2730c);
    gap: 2rem;
    transition: all 0.3s ease;
    z-index: 100; /* Colocar el menú por encima del fondo */

    &.active {
      left: 0;
    }

    li a {
      font-size: 1.5rem;
    }
  }

  @media (min-width: 960px) {
    position: relative;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem; 
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
  z-index: 99; /* Ajustamos el fondo debajo de los elementos del menú */

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

  /* Efectos de animación para cada letra */
  span:nth-child(1).active {
    animation: balance 1.5s ease-out;
    transform-origin: bottom left;
  }

  span:nth-child(2).active {
    animation: shrinkjump 1s ease-in-out;
    transform-origin: bottom center;
  }

  span:nth-child(3).active {
    animation: falling 2s ease-out;
    transform-origin: bottom center;
  }

  span:nth-child(4).active {
    animation: rotate 1s ease-out;
  }

  span:nth-child(5).active {
    animation: toplong 1.5s linear;
  }

  span:nth-child(6).active {
    animation: shrinkjump 1s ease-in-out;
    transform-origin: bottom center;
  }

  span:nth-child(7).active {
    animation: falling 2s ease-out;
    transform-origin: bottom center;
  }

  span:nth-child(8).active {
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
    display: flex; /* Mostrar en pantallas grandes */
  }

  @media (max-width: 960px) {
    display: none; /* Ocultar en pantallas pequeñas */
  }
`;
