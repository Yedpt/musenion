import React, { useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';

const radius = 440;
const autoRotate = true;
const rotateSpeed = -60;
const imgWidth = 220;
const imgHeight = 270;

const Carousel3D = ({ memes }) => {
  useEffect(() => {
    const aEle = document.querySelectorAll('.carousel-item');

    const init = (delayTime) => {
      aEle.forEach((ele, i) => {
        ele.style.transform = `rotateY(${i * (360 / aEle.length)}deg) translateZ(${radius}px)`;
        ele.style.transition = "transform 1s";
        ele.style.transitionDelay = `${delayTime || (aEle.length - i) / 4}s`;
      });
    };

    init(100);
  }, [memes]);

  return (
    <DragContainer>
      <SpinContainer autoRotate={autoRotate} rotateSpeed={rotateSpeed}>
        {memes.map((meme, index) => (
          <img key={index} src={meme.url} alt={meme.title} className="carousel-item" />
        ))}
      </SpinContainer>
      <Ground id="ground" />
    </DragContainer>
  );
};

export default Carousel3D;

// Styled-components para el carrusel
const DragContainer = styled.div`
  position: relative;
  display: flex;
  margin: auto;
  transform-style: preserve-3d;
  perspective: 1000px;
`;

const SpinContainer = styled.div`
  position: relative;
  display: flex;
  margin: auto;
  transform-style: preserve-3d;
  width: ${imgWidth}px;
  height: ${imgHeight}px;

  img {
    position: absolute;
    width: 100%;
    height: 100%;
    box-shadow: 0 0 8px #fff;
    transition: transform 1s;
    &:hover {
      box-shadow: 0 0 15px #fffd;
    }
  }

  /* Aplicar animación condicionalmente si autoRotate es true */
  ${({ autoRotate, rotateSpeed }) => 
    autoRotate && css`
      animation: ${rotateSpeed > 0 ? spin : spinRevert} ${Math.abs(rotateSpeed)}s infinite linear;
    `
  }
`;

const Ground = styled.div`
  width: ${radius * 3}px;
  height: ${radius * 3}px;
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translate(-50%, -50%) rotateX(90deg);
  background: radial-gradient(circle, #9993, transparent);
`;

// Animaciones con keyframes
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
