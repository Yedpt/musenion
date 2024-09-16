import styled from 'styled-components';
import img1 from '../../public/assets/images/white-minion1.svg'; // Asegúrate de ajustar la ruta según la ubicación real
import img2 from '../../public/assets/images/white-minion2.svg'; // Asegúrate de ajustar la ruta según la ubicación real

const Footer = () => { 
  return (
    <div>
      
    </div>
  )
}

export default Footer;

const FooterContainer = styled.footer`
  position: relative;
  width: 100%;
  min-height: 100px; /* Ajusta según sea necesario */
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
  padding: 10px; /* Ajusta según sea necesario */
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
  position: relative;
  
  @media (max-width: 960px) {
    text-align: left;
  }
`;

const FooterImages = styled.div`
  display: flex ;
  gap: 50px;
  position: absolute;
  left: 85%;
  bottom: 3rem;
  
  @media (max-width: 960px) {
    display: flex;
    gap: 10px;
    position: absolute;
    right: 20px;
    bottom: 40px;
    
    img {
      height: 60px; /* Ajusta el tamaño según sea necesario */
      width: auto;
    }
  }
`;