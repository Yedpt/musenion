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
          <WallFrame>
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
      </WallFrame>
      <Buttons>
        <ButtonUpdate onClick={() => handleEdit()}>Actualizar</ButtonUpdate>
        <ButtonDelete onClick={() => handleDelete(meme.id)}>Eliminar</ButtonDelete>
      </Buttons>
    </PageContainer>
  );
};


const PageContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  /* background: linear-gradient(to bottom, #FFDC59, #E2730C); */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
const WallFrame = styled.div`
  display: flex;
  background-image: url('/assets/images/pared_suelo_mobile.png');
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  
  @media (min-width: 960px) {
    background-image: url('/assets/images/pared_suelo_desktop.png'); 
    background-size: cover;
    background-repeat: no-repeat;
    width: 100vw;
  }
`;
const FrameContainer = styled.div`  /*Imagen del marco */
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 10%;
  background-image: url('/assets/images/marco_aislado.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 80%; /*Ajusta según sea necesario*/
  max-width: 400px;  /*Ajusta según sea necesario */
  min-width: 300px;  /* Evitar que el marco se haga demasiado pequeño */
  /* height: fit-content; */
  margin-top: 30px;
  aspect-ratio: 1 / 1;

  @media (min-width: 960px) {
    width: 60%;
    /* max-width: 400px; */
    min-width: 450px;
  }`;

  const ImageMeme = styled.img`
    max-width: 100%;
    max-height: 100%;
    border-radius: 8px; 
    object-fit: contain;
`;

const CardMeme = styled.div`
  background: white;
  padding: 0;
  border-color: black;
`;
const TitleMeme = styled.h2`
  padding: 0;
  font-size: 32px;
  color: black;
`;
const Description = styled.p`
  font-size: 13px;
  padding: 0;
  color: black;
`;
const ErrorMessage = styled.p`
  padding: 0;
  color: red;
`;
const Buttons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column; 
  width: 100vw;

  @media (min-width: 960px) {
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

  @media (min-width: 960px) {
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

  @media (min-width: 960px) {
    margin: 0;
    margin-right: 20px;
    width: 15%;
  }
`;

export default MemeDetail;


