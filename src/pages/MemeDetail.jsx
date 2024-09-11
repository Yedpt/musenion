import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMemeById } from '../services/MinionServices'; // Asegúrate de importar el servicio
import { deleteMemes } from '../services/MinionServices';
import { getMemes } from '../services/MinionServices';


const MemeDetail = () => {
  const { id } = useParams(); // Obtener el id de la URL
  const [meme, setMeme] = useState(null); // Estado para guardar los detalles del meme
  const [memes, setMemes] = useState([]); //con esto guardas todos los memes y lo llamas en el segundo efect para delete
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

  // apartir de aqui se puede trabajar llamando al metodo DELETE Y PUT :D

      useEffect(() => {
        const fetchMemes = async () => {
          try {
            const allMemes = await getMemes(); // Llamada a la API para obtener el meme por ID
            setMeme(allMemes);
          } catch (error) {
            setError('Error al cargar los memes.');
          } finally {
            setLoading(false);
          }
        };
    
        fetchMemes();
      }, []);

      const handleDelete = async (id) => {

        try {
          await deleteMemes(id);
          setMemes(memes.filter(meme => meme.id !== id));

        } catch (error) {
          setError ('Error al cargar la lista de memes.')
        }
      };

      if (loading) return <p>Cargando meme...</p>;
      if (error) return <p>{error}</p>;

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
       <button onClick={() => handleDelete(meme.id)}>Eliminar</button>
    </div>
  );
};

export default MemeDetail;


