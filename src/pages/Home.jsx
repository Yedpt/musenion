import styled from 'styled-components';

const Home = () => {
  return (
    <StyledContainer>
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
          <p>
            ¡Bienvenidos al Museo Virtual Musenion! Te invitamos a descubrir un espacio único donde el humor y la creatividad se dan la mano para ofrecer una experiencia digital inolvidable. ¡Tú también puedes ser parte del museo! Anímate a subir tus propios memes de Minions y competir por un lugar en nuestra prestigiosa galería, tu creación podría ser la próxima obra destacada de nuestra colección permanente. No hay límites para la imaginación, y cada meme tiene su oportunidad de convertirse en una obra maestra. Musenion te espera para que explores, te diviertas y participes activamente en esta comunidad. ¡No te lo pierdas, crea, comparte y sé parte de la historia del museo!
          </p>
        </div>
      </section>
    </StyledContainer>
  );
};

const StyledBody = styled.div `
  background: linear-gradient(to bottom, #FFDC59, #E2730C);
  min-height: 100vh;
  padding: 1rem;
`;

export default Home;