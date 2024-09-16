import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMemeById } from '../services/MinionServices'; // Asegúrate de importar el servicio


const MemeDetail = () => {
  const { id } = useParams(); // Obtener el id de la URL
  const [meme, setMeme] = useState(null); // Estado para guardar los detalles del meme
  const [loading, setLoading] = useState(true); // Estado para manejar la carga
  const [error, setError] = useState(null); // Estado para manejar errores

  useEffect(() => {
    const fetchMeme = async () => {
      try {
        const memeData = await getMemeById(id); // Llamada a la API para obtener el meme por ID
        setMeme(memeData);
      } catch (error) {
        setError('Error al cargar el meme.');
      } finally {
        setLoading(false);
      }
    };

    fetchMeme();
  }, [id]); // Efecto se ejecuta cuando cambia el id

  if (loading) return <p>Cargando meme...</p>;
  if (error) return <p>{error}</p>;

  // apartir de aqui se puede trabajar llamando al metodo DELETE Y PUT :D

  return (
    <div>
      {meme ? (
        <div>
          <h2>{meme.title}</h2>
          <img src={meme.url} alt={meme.title} style={{ width: '300px', height: 'auto' }} />
          <p>{meme.description}</p>
        </div>
      ) : (
        <p>Meme no encontrado.</p>
      )}
    </div>
  );
};

export default MemeDetail;

/* hacer delete y editar */