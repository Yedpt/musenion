import styled from 'styled-components';
import img1 from '../../public/assets/images/white-minion1.svg';
import img2 from '../../public/assets/images/white-minion2.svg';

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

const FooterImages = styled.div`
  display: flex;
  gap: 10px;
  position: absolute;
  right: 30px;
  bottom: 0;

  img {
    height: 50px;
    width: auto;
    position: relative;
    top: -40px;
  }

  @media (max-width: 960px) {
    right: 10px;
    bottom: 0;

    img {
      height: 50px;
      top: -30px;
    }
    img {
      height: 50px;
      top: -30px;
    }
  }
`;
