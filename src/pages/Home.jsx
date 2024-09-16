import React from 'react';
import styled from 'styled-components';
import homeMobile from '../assets/images/homeMobile.png';
import homeDesktop from '../assets/images/homeDesktop.png';

// import { useNavigate } from 'react-router-dom'; hay que importar esto para poder usar el useNavigate

const Home = () => {

  /* const navigate = useNavigate () , permite ejecutar una accion de navegacion sin necesidad de acceder directamente al dispatch */
  return (
    <>
    <div>
    <SectionOne>
        <title>
          <h1>Musenion</h1>
        </title>
        <StyledFigure/>
      </SectionOne>

      <SectionTwo>
        <div>
          <TituloA>Sobre el</TituloA>
          <TituloB>museo</TituloB>
          <Pwhite>¡Bienvenidos al Museo Virtual Musenion! 
            Te invitamos a descubrir un espacio único donde el humor y la creatividad se dan la mano para ofrecer una experiencia digital inolvidable. 
            ¡Tú también puedes ser parte del museo! Anímate a subir tus propios memes de Minions y competir por un lugar en nuestra prestigiosa galería, tu creación podría ser la próxima obra destacada de nuestra colección permanente. No hay límites para la imaginación, y cada meme tiene su oportunidad de convertirse en una obra maestra.
            Musenion te espera para que explores, te diviertas y participes activamente en esta comunidad.
            ¡No te lo pierdas, crea, comparte y sé parte de la historia del museo! 
          </Pwhite>
        </div>
      </SectionTwo>
    </div>
    </>
  )
}

const SectionOne = styled.section `
  display: flex;
  height: 50%;
`

const StyledFigure = styled.figure`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width:100%;
  background-image: url(${homeMobile});
  height: 75vh; 
  background-size: cover;     
  background-position: center;

@media (min-width: 960px) {
  background-image: url(${homeDesktop}); 
  height: 80vh;  
  background-size: cover;
  background-position: center;
}
`;

const SectionTwo = styled.section `
  display: flex;
  margin: 10%;

  @media (min-width: 960px) {
    margin-top: 4%;

}

`
const TituloA = styled.h2`
  text-transform: uppercase;
  color: white;
  font-weight: 400;
`
const TituloB = styled.h2`
  text-transform: uppercase;
  color: white;
` 
const Pwhite = styled.p`
  color: white;
  margin-top: 5%;
  font-size: 2.6vh;

  @media (min-width: 960px) {
    font-size: 3.5vh;
}
`



export default Home
