import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getMemeById } from '../services/MinionServices'; // Asegúrate de importar el servicio
import { deleteMemes } from '../services/MinionServices';
import { getMemes } from '../services/MinionServices';
import styled from 'styled-components';


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
        const confirmDelete = window.confirm('¿Estás seguro de que deseas eliminar este meme?');
        if (confirmDelete) {
          try {
            await deleteMemes(id);
            setMemes(memes.filter(meme => meme.id !== id));
            navigate('/gallery');
          } catch (error) {
            setError('Error al eliminar el meme.');
          }
        }
      };

      const handleEdit = () => {
        navigate(`/edit/${id}`); // Redirige a la nueva página de edición con el ID del meme
      };

      if (loading) return <p>Cargando meme...</p>;
      if (error) return <p>{error}</p>;

return (
    <PageContainer>
          <FrameContainer>
            <ImageMeme src={meme.url} alt={meme.title} style={{ width: '300px', height: 'auto' }} />
          </FrameContainer>
        {meme ? (
        <CardMeme>
          <TitleMeme>{meme.title}</TitleMeme>
          <Description>{meme.description}</Description>
        </CardMeme>
      ) : (
        <ErrorMessage>Meme no encontrado.</ErrorMessage>
      )}
      <Buttons>
        <ButtonUpdate onClick={() => handleEdit()}>Actualizar</ButtonUpdate>
        <ButtonDelete onClick={() => handleDelete(meme.id)}>Eliminar</ButtonDelete>
      </Buttons>
        <ImageFloor src="public/assets/images/suelo-museo-3.png" alt="Fondo" />
        </PageContainer>
  );
};

const PageContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column; /* Asegúrate de que los elementos estén en columna */
  width: 100vw;
  background: #BFAC9E;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
const FrameContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 20px;
  background-image: url('/assets/images/marco-meme.png'); /* Imagen del marco */
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 80%; /* Ajusta según sea necesario */
  max-width: 400px; /* Ajusta según sea necesario */
  height: fit-content;
  margin-top: 30px;
`;

const CardMeme = styled.div`
padding: 0;
`;
const TitleMeme = styled.h2`
  padding: 0;
`;
const ImageMeme = styled.img`
  max-width: 100%;
  max-height: 100vh;
  border-radius: 8px; 

`;
const Description = styled.p`
padding: 0;
`;
const ErrorMessage = styled.p`
  padding: 0;
`;
const Buttons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column; 
  width: 100vw;

  @media (min-width: 600px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row; 
    width: 100vw;
    margin-bottom: 50px;
    margin-top: 50px;
  }
`;
const ButtonUpdate = styled.button`
  padding: 5px;
  width: 30%;
  background-color: #FFDA58;
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 5px;

  @media (min-width: 600px) {
    margin: 0;
    margin-right: 20px;
    width: 15%;
  }
`;
const ButtonDelete = styled.button`
  padding: 5px;
  width: 30%;
  background-color: #FFDA58;
  margin-bottom: 30px;
  border-radius: 5px;

  @media (min-width: 600px) {
    margin: 0;
    margin-right: 20px;
    width: 15%;
  }
`;
const ImageFloor = styled.img`
  position: absolute;
  bottom: 0; /* Coloca la imagen al fondo de la página */
  left: 50%; /* Centra la imagen horizontalmente */
  transform: translateX(-50%); /* Ajusta para el centro exacto */
  width: 100%; /* Ajusta el tamaño según sea necesario */
  height: auto; /* Mantén la relación de aspecto */
`;

export default MemeDetail;


