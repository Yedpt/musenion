import  { useEffect, useState } from 'react';
import { getMemes } from '../services/MinionServices'; // Servicios para obtener memes
import Carousel3D from '../components/carousel'; // Componente del carrusel 3D
import { Link, useNavigate } from 'react-router-dom'; // Añadir useNavigate para la redirección
import styled from 'styled-components'; // Importación de styled-components
import nubeIcon from '../assets/images/flecha_nube.png'; // Importamos la imagen de la nube

const Gallery = () => {
  const [memes, setMemes] = useState([]);
  const navigate = useNavigate(); // Hook para navegar

  useEffect(() => {
    const fetchMemes = async () => {
      try {
        const data = await getMemes();
        setMemes(data);
      } catch (error) {
        console.error('Error al cargar memes:', error);
      }
    };

    fetchMemes();
  }, []);

  const handleImageClick = (meme) => {
    navigate(`/MemeDetail/${meme.id}`); // Redirigir al detalle del meme
  };

  return (
    <div>
      <TituloA>Minion</TituloA>
      <TituloB>Gallery</TituloB>
    

      {/* Carrusel 3D que mostrará los primeros 10 memes */}
      {memes.length > 0 ? (
        <Carousel3D memes={memes} />
      ) : (
        <p>No hay memes disponibles</p>
      )}

      {/* Botón que lleva a la página para crear un nuevo meme */}
      <MemeButtonWrapper>
        <Link to="/createMeme">
          <StyledHeading5>Sube tu minion meme</StyledHeading5>
          <StyledButton>
            <MobileIcon className="fas fa-upload" />
            <TabletDesktopIcon src={nubeIcon} alt="Icono de nube" />
          </StyledButton>
        </Link>
      </MemeButtonWrapper>

      {/* Listar las demás imágenes debajo del carrusel */}
      <div style={{ marginTop: '50px', textAlign: 'center' }}>
        <Heading3>Colección temporal</Heading3>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {memes.slice(10).map((meme) => (
            <img
              key={meme.id}
              src={meme.url}
              alt={meme.title}
              style={{
                width: '200px',
                height: '250px',
                margin: '10px',
                objectFit: 'cover',
                boxShadow: '0 0 5px #aaa',
                cursor: 'pointer', // Cambia el cursor al hacer hover
              }}
              onClick={() => handleImageClick(meme)} // Al hacer clic en la imagen, ir a la página de detalle
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;

// Styled-components para el h2 y h3
const TituloA = styled.h2`
  color: #0C2849; /* Color minioneszco */
  text-align: left;
  font-size: 1.8rem;
  margin-top: 80px;
  margin-bottom: -10px;
  margin-left: 140px;
  text-transform: uppercase;
  font-weight: 400;

  @media (min-width: 768px) {
    font-size: 1.8rem;
  }

  @media (min-width: 1024px) {
    font-size: 2.2rem;
  }
`;

const TituloB = styled.h2`
  color: #0C2849; /* Color minioneszco */ 
  text-transform: uppercase;
  margin-left: 140px;


    @media (min-width: 768px) {
    font-size: 2.0rem;
  }

  @media (min-width: 1024px) {
    font-size: 2.4rem;
  }
`

const Heading3 = styled.h3`
  color: #0C2849; /* Color minioneszco */
  text-align: center;
  font-size: 1.4rem;
  margin-top: 80px;

  @media (min-width: 768px) {
    font-size: 1.8rem;
  }

  @media (min-width: 1024px) {
    font-size: 2.2rem;
  }
`;

// Estilo para el contenedor del botón e ícono
const MemeButtonWrapper = styled.div`
  margin-top: 100px;
  text-align: center;
`;

// Styled-component para el h5
const StyledHeading5 = styled.h5`
  color: #0C2849; /* Color minioneszco */
  text-align: center;
  font-size: 1.6rem;
  margin-bottom: 5px;
  margin-top: -40px;

  @media (min-width: 768px) {
    font-size: 2rem;
  }

  @media (min-width: 1024px) {
    font-size: 2.4rem;
  }
`;

// Styled-component para el botón con el ícono
const StyledButton = styled.button`
  background-color: #0C2849; /* Fondo minioneszco */
  color: #fff;
  border: none;
  padding: 5px 10px;
  font-size: 1.5rem;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  border-radius: 5px;
  position: relative; /* Esto permite superponer íconos de manera condicional */

  &:hover {
    background-color: #08305a;
  }

  @media (min-width: 768px) {
    font-size: 1.8rem;
  }

  @media (min-width: 1024px) {
    font-size: 2rem;
  }
`;

// Ícono que se muestra en mobile
const MobileIcon = styled.i`
  display: inline-block;
  margin-right: 0.5px;

  @media (min-width: 768px) {
    display: none; /* Ocultar en tablet y desktop */
    margin-right: 0.5px;

  }
    
`;

// Imagen de nube que se muestra en tablet y desktop
const TabletDesktopIcon = styled.img`
  display: none;

  @media (min-width: 768px) {
    display: inline-block; /* Mostrar en tablet y desktop */
    width: 30px; /* Ajusta el tamaño según sea necesario */
    height: 30px;
    margin-left: 0.5px;
  }
`;
