  import React, { useEffect, useRef, useState } from 'react';
  import { useNavigate } from 'react-router-dom';
  import styled from 'styled-components';

  const imgWidth = 150;  // Tamaño base
  const imgHeight = 200; // Tamaño base

  const Carousel3D = ({ memes, autoRotate = true, rotateSpeed = -20 }) => {
    const [radius, setRadius] = useState(240);
    const [angle, setAngle] = useState(0);
    const spinContainerRef = useRef(null);
    const navigate = useNavigate();

    // Cambiar el radio dinámico basado en el tamaño de la pantalla
    useEffect(() => {
      const updateRadius = () => {
        const screenWidth = window.innerWidth;
        if (screenWidth >= 1440) {
          setRadius(500);
        } else if (screenWidth >= 1024) {
          setRadius(450);
        } else if (screenWidth >= 768) {
          setRadius(400);
        } else {
          setRadius(340);
        }
      };

      updateRadius();
      window.addEventListener('resize', updateRadius);

      return () => {
        window.removeEventListener('resize', updateRadius);
      };
    }, []);

    // Manejar la rotación automática del carrusel
    useEffect(() => {
      let animationFrameId;

      const rotateCarousel = () => {
        setAngle((prev) => (prev + rotateSpeed / 200) % 360);
        animationFrameId = requestAnimationFrame(rotateCarousel);
      };

      if (autoRotate) {
        rotateCarousel();
      }

      return () => {
        cancelAnimationFrame(animationFrameId);
      };
    }, [autoRotate, rotateSpeed]);

    const handleImageClick = (meme) => {
      navigate(`/MemeDetail/${meme.id}`);
    };

    return (
      <Container>
        <DragContainer>
          <SpinContainer ref={spinContainerRef} style={{ transform: `rotateY(${angle}deg)` }}>
            {memes.slice(0, 10).map((meme, index) => (
              <ImageContainer key={index} $radius={radius} $index={index}>
                <img
                  src={meme.url}
                  alt={meme.title}
                  className="carousel-item"
                  onClick={() => handleImageClick(meme)}
                />
              </ImageContainer>
            ))}
          </SpinContainer>
          <Ground $radius={radius} />
        </DragContainer>
      </Container>
    );
  };

  export default Carousel3D;

  // Styled-components

  const Container = styled.div`
    background-color: #121112;
    height: 90vh; /* Ocupar toda la altura de la pantalla */
    display: flex;
    justify-content: center; /* Centra horizontalmente */
    align-items: center; /* Centra verticalmente */
  `;

  const DragContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: center; /* Centrar horizontalmente */
    align-items: center; /* Centrar verticalmente */
    transform-style: preserve-3d;
    perspective: 1000px;

    @media (min-width: 1024px) {
      perspective: 1200px;
    }

    @media (min-width: 1440px) {
      perspective: 1800px;
    }
  `;

  const SpinContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: center; /* Centra horizontalmente las imágenes en el carrusel */
    align-items: center; /* Centra verticalmente las imágenes en el carrusel */
    transform-style: preserve-3d;
    width: ${imgWidth}px;
    height: ${imgHeight}px;

    @media (min-width: 768px) {
      width: ${imgWidth * 1.3}px;  // Aumentar tamaño de imagen en tablet
      height: ${imgHeight * 1.3}px;
    }

    @media (min-width: 1024px) {
      width: ${imgWidth * 1.6}px;  // Aumentar tamaño de imagen en desktop
      height: ${imgHeight * 1.6}px;
    }
  `;

  // Componente de la imagen con reflejo y media queries para cambiar tamaño
  const ImageContainer = styled.div`
    position: absolute;
    transform: rotateY(${({ $index }) => $index * (360 / 10)}deg) translateZ(${({ $radius }) => $radius}px);
    
    img {
      position: relative;
      width: ${imgWidth}px;  // Ancho fijo de la imagen
      height: ${imgHeight}px; // Alto fijo de la imagen
      box-shadow: 0 0 5px #fff;
      transition: transform 0.5s, box-shadow 0.5s;

      &:hover {
        transform: scale(1.2);
        box-shadow: 0 0 10px #fffd;
        cursor: pointer;
      }

      &::after {
        content: '';
        display: block;
        position: absolute;
        top: 100%; /* Posiciona debajo de la imagen */
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(to bottom, rgba(255, 255, 255, 0.3), transparent);
        transform: scaleY(-1); /* Refleja verticalmente */
        opacity: 0.4; /* Ajusta la transparencia del reflejo */
      }

      /* Media query para tablet */
      @media (min-width: 768px) {
        width: ${imgWidth * 1.3}px;  // Aumentar 30% en tablets
        height: ${imgHeight * 1.3}px;
      }

      /* Media query para desktop */
      @media (min-width: 1024px) {
        width: ${imgWidth * 1.6}px;  // Aumentar 60% en desktops
        height: ${imgHeight * 1.6}px;
      }
    }
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
