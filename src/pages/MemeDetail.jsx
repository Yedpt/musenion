import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getMemeById } from '../services/MinionServices'; // Asegúrate de importar el servicio
import { deleteMemes } from '../services/MinionServices';
import { getMemes } from '../services/MinionServices';


const MemeDetail = () => {
  const { id } = useParams(); // Obtener el id de la URL
  const [meme, setMeme] = useState(null); // Estado para guardar los detalles del meme
  const [memes, setMemes] = useState([]); //con esto guardas todos los memes y lo llamas en el segundo efect para delete
  const [loading, setLoading] = useState(true); // Estado para manejar la carga
  const [error, setError] = useState(null); // Estado para manejar errores
  const navigate = useNavigate();

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
            setMemes(allMemes);
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
          navigate('/gallery'); 

        } catch (error) {
          setError ('Error al cargar la lista de memes.')
        }
      };

      if (loading) return <p>Cargando meme...</p>;
      if (error) return <p>{error}</p>;

return (
    <Body>
      {meme ? (
        <CardMeme>
          <TitleMeme>{meme.title}</TitleMeme>
          <Image src={meme.url} alt={meme.title} style={{ width: '300px', height: 'auto' }} />
          <Description>{meme.description}</Description>
        </CardMeme>
      ) : (
        <Error>Meme no encontrado.</Error>
      )}
       <ButtonDelete onClick={() => handleDelete(meme.id)}>Eliminar</ButtonDelete>
       <ButtonUpdate>Actualizar</ButtonUpdate>
    </Body>
  );
};

const Body = styled.body`
background-image: url('src\assets\images\fondo-detail-memes-mobile.png')
`;
const CardMeme = styled.div``;
const TitleMeme = styled.h2``;
const Description = styled.p``;
const Error = ``;
const ButtonDelete = ``;
const ButtonUpdate = ``;

export default MemeDetail;


