import styled from 'styled-components';
import img1 from '../../public/assets/images/white-minion1.svg'; // Asegúrate de ajustar la ruta según la ubicación real
import img2 from '../../public/assets/images/white-minion2.svg'; // Asegúrate de ajustar la ruta según la ubicación real

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
  min-height: 100px;
  background-color: transparent;
`;

const FooterBottom = styled.div`
  position: relative;
  width: 100%;
  height: 100px; /* Ajusta según sea necesario */
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

const FooterImages = styled.div`
  display: flex;
  gap: 20px;
  position: absolute;
  right: 20px;
  bottom: 0;

  img {
    height: 60px;
    width: auto;
    position: relative;
    top: -40px; /* Las imágenes sobresalen 40px del footer hacia arriba */
  }

  @media (max-width: 960px) {
    right: 10px;
    bottom: 0;

    img {
      height: 50px; /* Ajusta el tamaño de las imágenes para pantallas pequeñas */
      top: -30px; /* También sobresalen, pero ajustamos un poco el valor */
    }
  }
`;
