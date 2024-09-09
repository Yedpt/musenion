import React from 'react'

const Home = () => {
  return (
    <>
     {/*  <Nav /> */}

      <section id="section1">
        <title>
          <h1>Musenion</h1>
        </title>
        <figure>
          <img src="src\assets\2-minions.png" alt="" />
        </figure>
      </section>

      <section id="section2">
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

    {/*   <Footer /> */}
    </>
  )
}

const section1 = styled.section1 `
  display: flex;
  justify-content: center;
  
`
  

export default Home
