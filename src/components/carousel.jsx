import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { keyframes, css } from 'styled-components';

const imgWidth = 120;
const imgHeight = 170;

const Carousel3D = ({ memes, autoRotate = true, rotateSpeed = -60 }) => {
  const [radius, setRadius] = useState(240); // Estado para gestionar el radio
  const spinContainerRef = useRef(null); // Referencia al contenedor giratorio
  const navigate = useNavigate(); // Hook para redirigir

  useEffect(() => {
    const updateRadius = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 1440) {
        setRadius(500); // Más espacio para pantallas grandes (1440px y mayores)
      } else if (screenWidth >= 1024) {
        setRadius(400); // Espacio mayor para escritorio (1024px y mayores)
      } else if (screenWidth >= 768) {
        setRadius(300); // Esquina mayor para tablet
      } else {
        setRadius(240); // Valor por defecto para móvil
      }
    };

    updateRadius(); // Ejecuta la función al cargar
    window.addEventListener('resize', updateRadius); // Escuchar cambios en el tamaño de la pantalla

    return () => {
      window.removeEventListener('resize', updateRadius); // Limpieza del listener
    };
  }, []);

  useEffect(() => {
    let animationFrameId;

    const aEle = document.querySelectorAll('.carousel-item');

    const initCarousel = (delayTime) => {
      aEle.forEach((ele, i) => {
        ele.style.transform = `rotateY(${i * (360 / aEle.length)}deg) translateZ(${radius}px)`; // Usa el radio dinámico
        ele.style.transition = "transform 1s";
        ele.style.transitionDelay = `${delayTime || (aEle.length - i) / 4}s`;
      });
    };

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

    const handleResize = () => {
      initCarousel(0); // Reiniciar cuando cambie el tamaño de la ventana
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId); // Detener la animación
      window.removeEventListener('resize', handleResize);
    };
  }, [memes, autoRotate, radius]); // Dependemos del valor de radius

  const handleImageClick = (meme) => {
    navigate(`/MemeDetail/${meme.id}`); // Navegar a la página de detalles del meme
  };

  return (
    <DragContainer>
      <SpinContainer ref={spinContainerRef} $rotateSpeed={rotateSpeed}>
        {memes.slice(0, 10).map((meme, index) => (
          <img
            key={index}
            src={meme.url}
            alt={meme.title}
            className="carousel-item"
            onClick={() => handleImageClick(meme)}
          />
        ))}
      </SpinContainer>
      <Ground $radius={radius} />
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
  perspective: 1000px;

  @media (min-width: 1024px) {
    perspective: 1400px; // Aumenta la profundidad en pantallas grandes
  }

  @media (min-width: 1440px) {
    perspective: 1800px; // Mayor perspectiva para pantallas aún más grandes
  }
`;

const SpinContainer = styled.div`
  position: relative;
  display: flex;
  margin: auto;
  transform-style: preserve-3d;
  width: ${imgWidth}px;
  height: ${imgHeight}px;

  @media (min-width: 768px) { /* Tablet */
    width: ${imgWidth * 2}px;
    height: ${imgHeight * 2}px;
  }

  @media (min-width: 1024px) { /* Desktop */
    width: ${imgWidth * 2.5}px;
    height: ${imgHeight * 2.5}px;
  }

  @media (min-width: 1440px) { /* Pantallas más grandes */
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
      transform: scale(1.2);
      box-shadow: 0 0 10px #fffd;
      cursor: pointer;
    }
  }

  ${({ $rotateSpeed }) => $rotateSpeed && css`
    animation: ${$rotateSpeed > 0 ? spin : spinRevert} ${Math.abs($rotateSpeed)}s infinite linear;
  `}
`;

const Ground = styled.div`
  width: ${({ $radius }) => $radius * 2}px;
  height: ${({ $radius }) => $radius * 2}px;
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translate(-50%, -50%) rotateX(90deg);
  background: radial-gradient(circle, #9993, transparent);
`;

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
