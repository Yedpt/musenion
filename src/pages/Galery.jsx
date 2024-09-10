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

      {/* Carrusel 3D que mostrará los memes */}
      {memes.length > 0 ? (
        <Carousel3D memes={memes} />
      ) : (
        <p>No hay memes disponibles</p>
      )}

      {/* Botón que lleva a la página para crear un nuevo meme */}
      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <Link to="/createMeme">
          <button>Crear un nuevo meme</button>
        </Link>
      </div>
    </div>
  );
};

export default Gallery;
