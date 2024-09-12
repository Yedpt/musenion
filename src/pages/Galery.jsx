import React, { useEffect, useState } from 'react';
import { getMemes } from '../services/MinionServices'; // Servicios para obtener memes
import Carousel3D from '../components/carousel'; // Componente del carrusel 3D
import { Link } from 'react-router-dom'; // Para el botón que lleva a crear un nuevo meme

const Gallery = () => {
  const [memes, setMemes] = useState([]);

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

  return (
    <div>
      <h2>Galería de Memes</h2>

      {/* Carrusel 3D que mostrará los primeros 10 memes */}
      {memes.length > 0 ? (
        <Carousel3D memes={memes} />
      ) : (
        <p>No hay memes disponibles</p>
      )}

      {/* Listar las demás imágenes debajo del carrusel */}
      <div style={{ marginTop: '50px', textAlign: 'center' }}>
        <h3>Más memes</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {memes.slice(10).map((meme) => (
            <img
              key={meme.id}
              src={meme.url}
              alt={meme.title}
              style={{
                width: '150px',
                height: '200px',
                margin: '10px',
                objectFit: 'cover',
                boxShadow: '0 0 5px #aaa',
              }}
            />
          ))}
        </div>
      </div>

      {/* Botón que lleva a la página para crear un nuevo meme */}
      <div style={{ marginTop: '100px', textAlign: 'center' }}>
        <Link to="/createMeme">
          <button>Crear un nuevo meme</button>
        </Link>
      </div>
    </div>
  );
};

export default Gallery;

