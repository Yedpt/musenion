import React from 'react';
import styled from 'styled-components';
// import { useNavigate } from 'react-router-dom'; hay que importar esto para poder usar el useNavigate

const Home = () => {

  /* const navigate = useNavigate () , permite ejecutar una accion de navegacion sin necesidad de acceder directamente al dispatch */
  return (
    <>
    <StyledBody>
    <section>
        <title>
          <h1>Musenion</h1>
        </title>
        <figure>
          <img src="public\assets\images\2-minions.png" alt="" />
        </figure>
      </section>

      <section>
        <div>
          <h2>Sobre el museo</h2>
          <p>¡Bienvenidos al Museo Virtual Musenion! 
            Te invitamos a descubrir un espacio único donde el humor y la creatividad se dan la mano para ofrecer una experiencia digital inolvidable. 
            ¡Tú también puedes ser parte del museo! Anímate a subir tus propios memes de Minions y competir por un lugar en nuestra prestigiosa galería, tu creación podría ser la próxima obra destacada de nuestra colección permanente. No hay límites para la imaginación, y cada meme tiene su oportunidad de convertirse en una obra maestra.
            Musenion te espera para que explores, te diviertas y participes activamente en esta comunidad.
            ¡No te lo pierdas, crea, comparte y sé parte de la historia del museo! 
          </p>
        </div>
      </section>
    </StyledBody>
    </>
  )
}

const StyledBody = styled.div `
  background: linear-gradient(to bottom, #FFDC59, #E2730C);
`;

/* const section2 = styled.section `
  display: flex;
  justify-content: center;
  flex-direction: column;

  
` */

/* const figure = styled.figure`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;

` */
  

export default Home
