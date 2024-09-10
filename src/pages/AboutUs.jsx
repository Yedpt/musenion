import React from 'react';
import styled from 'styled-components';

const AboutUs = () => {
  return (
   // <div className="aboutus">
   <PageContainer>
      <header className="aboutus-header">
        <div className="menu-icon">
          {/* Add your menu icon here */}
        </div>
      </header>
      <div className="aboutus-content">
        <div className="section">
          <h2>SOBRE NOSOTROS</h2>
          <p>
            Hay muchas variaciones de los pasajes de Lorem Ipsum disponibles,
            pero la mayoría han sufrido alteraciones en alguna manera, ya sea
            porque se le agregó humor, o palabras aleatorias que no parecen ni
            un poco creíbles.
          </p>
        </div>
        <div className="creators">
          <div className="creator">
          <h2>LOS CREADORES</h2>
            <div className="creator-image">
              <img src="/placeholder.png" alt="Yeder Pimentel" />
            </div>
            <div className="creator-name">YEDER PIMENTEL</div>
          </div>
          <div className="creator">
            <div className="creator-image">
              <img src="/placeholder.png" alt="Laura de Vega" />
            </div>
            <div className="creator-name">LAURA DE VEGA</div>
          </div>
          <div className="creator">
            <div className="creator-image">
              <img src="/placeholder.png" alt="Anca Bacria" />
            </div>
            <div className="creator-name">ANCA BACRIA</div>
          </div>
          <div className="creator">
            <div className="creator-image">
              <img src="/placeholder.png" alt="Mariela Adimari" />
            </div>
            <div className="creator-name">MARIELA ADIMARI</div>
          </div>
          <div className="creator">
            <div className="creator-image">
              <img src="/placeholder.png" alt="Ana Maria Garcia" />
            </div>
            <div className="creator-name">ANA MARIA GARCIA</div>
          </div>
        </div>
      </div>
      </PageContainer>
    //</div>
  );
};

const PageContainer = styled.body`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100vw;   /* 100% del ancho de la ventana */
margin: 0;
background: linear-gradient(to bottom, #FFDC59, #E2730C);
`;

const TitlePage = styled.h2`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
color: #0C2849;
margin-top: 1px;
margin-bottom: 20px;
font-size: 24px;
`

export default AboutUs;