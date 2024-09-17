import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getMemeById, deleteMemes, getMemes } from '../services/MinionServices';
import styled from 'styled-components';



const MemeDetail = () => {
  const { id } = useParams(); 
  const [meme, setMeme] = useState(null); 
  const [memes, setMemes] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMeme = async () => {
      try {
        const memeData = await getMemeById(id);
        setMeme(memeData);
      } catch (error) {
        setError('Error al cargar el meme.');
      } finally {
        setLoading(false);
      }
    };

    fetchMeme();
  }, [id]);

  useEffect(() => {
    const fetchMemes = async () => {
      try {
        const allMemes = await getMemes();
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
    navigate(`/edit/${id}`);
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  background: linear-gradient(to bottom, #FFDC59, #E2730C);
`;

const WallFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  min-height: 680px;
  background-image: url('../src/assets/images/fondo-mobile.png');
  background-repeat: no-repeat;

  @media (min-width: 500px) {
    background-image: url('../src/assets/images/fondo-desktop.png');
    width: 100vw;
    min-height: 700px;
  }
`;

const FrameContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  
  background-image: url('../src/assets/images/marco_aislado.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  padding: 15%;
  width: 80%;
  max-width: 300px; 
  min-width: 300px;
  height: fit-content;
  margin-top: 30px;
  aspect-ratio: 1 / 1;

  @media (min-width: 700px) {
    width: 50%; 
    max-width: 250px; 
    min-width: 250px;
    padding: 5%;
  }
  `;

const ImageMeme = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
  border-radius: 8px;
  padding: 1px;
`;

const CardMeme = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  padding: 0;
  border-color: black;
  border: black;
`;

const TitleMeme = styled.h2`
  font-size: 32px;
  color: #0C2849;
`;

const Description = styled.p`
  font-size: 13px;
  color: #0C2849;
`;

const ErrorMessage = styled.p`
  color: red;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
 
  @media (min-width: 960px) {
    flex-direction: row;
    margin-top: 50px;
  }
`;

const ButtonUpdate = styled.button`
  padding: 5px;
  width: 30%;
  background-color: #FFDA58;
  margin-top: 5px;
  margin-bottom: 10px;
  border-radius: 5px;

  @media (min-width: 960px) {
    width: 15%;
    margin-right: 20px;
  }
`;

const ButtonDelete = styled.button`
  padding: 5px;
  width: 30%;
  background-color: #FFDA58;
  margin-top: 5px;
  margin-bottom: 10px;
  border-radius: 5px;

  @media (min-width: 960px) {
    width: 15%;
  }
`;

export default MemeDetail;
