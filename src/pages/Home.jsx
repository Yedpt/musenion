import React from 'react';
import styled from 'styled-components';

const Home = () => {
  return (
    <>
    <StyledBody>
    <section>
        <title>
          <h1>Musenion</h1>
        </title>
        <StyledFigure>
          <img src="src\assets\2-minions.png" alt="" />
        </StyledFigure>
      </section>

      <SectionTwo>
        <div>
          <Titulo>Sobre el <br /> museo</Titulo>
          <p>¡Bienvenidos al Museo Virtual Musenion! 
            Te invitamos a descubrir un espacio único donde el humor y la creatividad se dan la mano para ofrecer una experiencia digital inolvidable. 
            ¡Tú también puedes ser parte del museo! Anímate a subir tus propios memes de Minions y competir por un lugar en nuestra prestigiosa galería, tu creación podría ser la próxima obra destacada de nuestra colección permanente. No hay límites para la imaginación, y cada meme tiene su oportunidad de convertirse en una obra maestra.
            Musenion te espera para que explores, te diviertas y participes activamente en esta comunidad.
            ¡No te lo pierdas, crea, comparte y sé parte de la historia del museo! 
          </p>
        </div>
      </SectionTwo>
    </StyledBody>
    </>
  )
}

const StyledBody = styled.body `
  background: linear-gradient(to bottom, #FFDC59, #E2730C);
`;

const StyledFigure = styled.figure`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;

`;

const SectionTwo = styled.section `
  display: flex;
  margin: 8%;
`
const Titulo = styled.h2`
  text-transform: uppercase;
`
  

export default Home
