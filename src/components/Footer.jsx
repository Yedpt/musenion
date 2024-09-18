import styled, { keyframes } from 'styled-components';
import img1 from '../assets/images/white-minion1.svg';
import img2 from '../assets/images/white-minion2.svg';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterBottom>
        <CopyRightText>Copyright © 2024 Musenion</CopyRightText>
        <FooterImages>
          <img src={img1} alt="Image 1" />
          <img src={img2} alt="Image 2" />
        </FooterImages>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  position: relative;
  width: 100%;
  background-color: transparent;
`;

const FooterBottom = styled.div`
  position: relative;
  width: 100%;
  height: 50px;
  background-color: #33517D;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  box-sizing: border-box;
  
  @media (max-width: 960px) {
    justify-content: space-between;
    padding: 0 20px;
  }
`;

const CopyRightText = styled.p`
  color: white;
  font-size: 1rem;
  margin: 0;
  
  @media (max-width: 960px) {
    text-align: left;
  }
`;

// Animación de correr y saltar al mismo tiempo
const runAndJumpAnimation = keyframes`
  0% {
    transform: translateX(0) translateY(0); /* Inicio: esquina izquierda */
  }
  20% {
    transform: translateX(20vw) translateY(-80px); /* Mueve hacia la derecha con un salto */
  }
  40% {
    transform: translateX(40vw) translateY(0); /* Mueve más a la derecha, vuelve al suelo */
  }
  60% {
    transform: translateX(60vw) translateY(-80px); /* Otro salto a medida que se mueve */
  }
  80% {
    transform: translateX(80vw) translateY(0); /* Casi al final, de vuelta al suelo */
  }
  100% {
    transform: translateX(100vw) translateY(0); /* Final: esquina derecha, sin salto */
  }
`;

const FooterImages = styled.div`
  display: flex;
  gap: 10px;
  position: absolute;
  left: 0;
  bottom: 0;

  img {
    height: 100px;
    width: auto;
    position: relative;
    top: -40px;
    animation: ${runAndJumpAnimation} 8s linear infinite; /* Corre y salta */
  }

  @media (max-width: 960px) {
    img {
      height: 50px;
      top: -30px;
    }
  }
`;
