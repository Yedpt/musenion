import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { keyframes, css } from 'styled-components';
import MemeDetail from '../pages/MemeDetail';

const radius = 240;
const imgWidth = 120;
const imgHeight = 170;

const Carousel3D = ({ memes, autoRotate = true, rotateSpeed = -60 }) => {
  const spinContainerRef = useRef(null); // Referencia al contenedor giratorio
  const navigate = useNavigate(); // Hook para redirigir

  useEffect(() => {
    let animationFrameId;

    const aEle = document.querySelectorAll('.carousel-item');

    const initCarousel = (delayTime) => {
      aEle.forEach((ele, i) => {
        ele.style.transform = `rotateY(${i * (360 / aEle.length)}deg) translateZ(${radius}px)`;
        ele.style.transition = "transform 1s";
        ele.style.transitionDelay = `${delayTime || (aEle.length - i) / 4}s`;
      });
    };

    // Lógica de animación continua
    const animateCarousel = () => {
      if (spinContainerRef.current && autoRotate) {
        spinContainerRef.current.style.transform = `rotateY(${Date.now() / 100 % 360}deg)`; // Movimiento continuo
      }
      animationFrameId = requestAnimationFrame(animateCarousel);
    };

    initCarousel(100);
    if (autoRotate) {
      animateCarousel(); // Iniciar la animación
    }

    // Listener para redimensionar ventana y reiniciar carrusel
    const handleResize = () => {
      initCarousel(0); // Reiniciar cuando cambie el tamaño de la ventana
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId); // Detener la animación
      window.removeEventListener('resize', handleResize);
    };
  }, [memes, autoRotate]);

  const handleImageClick = (meme) => {
    navigate(`/MemeDetail/${meme.id}`); // Navegar a la página de detalles del meme
  };

  return (
    <DragContainer>
      <SpinContainer ref={spinContainerRef} $rotateSpeed={rotateSpeed}>
        {memes.slice(0, 10).map((meme, index) => ( // Solo 10 primeros memes
          <img
            key={index}
            src={meme.url}
            alt={meme.title}
            className="carousel-item"
            onClick={() => handleImageClick(meme)} // Redirigir al hacer click
          />
        ))}
      </SpinContainer>
      <Ground />
    </DragContainer>
  );
};

export default Carousel3D;

// Styled-components
const DragContainer = styled.div`
  position: relative;
  display: flex;
  margin: auto;
  transform-style: preserve-3d;
  perspective: 800px;
`;

const SpinContainer = styled.div`
  position: relative;
  display: flex;
  margin: auto;
  transform-style: preserve-3d;
  width: ${imgWidth}px;
  height: ${imgHeight}px;

  /* Media queries para pantallas más grandes */
  @media (min-width: 768px) { /* Tablet */
    width: ${imgWidth * 2}px;
    height: ${imgHeight * 2}px;
  }

  @media (min-width: 1024px) { /* Desktop */
    width: ${imgWidth * 2}px;
    height: ${imgHeight * 2}px;
  }

  img {
    position: absolute;
    width: 100%;
    height: 100%;
    box-shadow: 0 0 5px #fff;
    transition: transform 0.5s, box-shadow 0.5s;

    &:hover {
      transform: scale(1.2); // Agrandar al pasar el ratón
      box-shadow: 0 0 10px #fffd;
      cursor: pointer;
    }
  }

  /* Animación continua usando spin o spinRever */
  ${({ $rotateSpeed }) => $rotateSpeed && css`
    animation: ${$rotateSpeed > 0 ? spin : spinRevert} ${Math.abs($rotateSpeed)}s infinite linear;
  `}
`;

const Ground = styled.div`
  width: ${radius * 2}px;
  height: ${radius * 2}px;
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translate(-50%, -50%) rotateX(90deg);
  background: radial-gradient(circle, #9993, transparent);
`;

// Animaciones
const spin = keyframes`
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(360deg);
  }
`;

const spinRevert = keyframes`
  from {
    transform: rotateY(360deg);
  }
  to {
    transform: rotateY(0deg);
  }
`;
