import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

// Función para hacer el POST
const postMemes = async (data) => {
  try {
    const response = await axios.post('https://tu-api-url.com/memes', data); // Cambia esta URL
    return response.data;
  } catch (error) {
    console.error('Error al postear el meme:', error);
    throw error;
  }
};

// Estilos minionescos usando styled-components

const Container = styled.div`
  background: linear-gradient(to bottom, #FFDC59, #E2730C);
  `


const MemeContainer = styled.div`
 
  padding: 20px;
  border-radius: 15px;
  background: rgba(250, 250, 250, 0.5);
  max-width: 400px;
  margin: 0 auto;
  `
;

const MemeTitle = styled.h2`
  color: #1A237E; / Azul oscuro que contrasta bien /
  text-align: center;
  `
;

const MemeForm = styled.form`
  display: flex;
  flex-direction: column;
  `
;

const MemeLabel = styled.label`
  font-size: 1.2rem;
  color: #1A237E;
  margin-bottom: 10px;
  font-family: 'Comic Sans MS', sans-serif;
  `
;

const MemeInput = styled.input`
  padding: 10px;
  border-radius: 10px;
  border: 2px solid #1A237E;
  font-size: 1rem;
  &:focus {
    outline: none;
    border-color: #0D47A1; / Azul más oscuro al enfocar /
  }
  `
;

const MemeButton = styled.button`
  padding: 10px;
  background-color: #0D47A1; / Azul intenso /
  color: #FFEB3B; / Amarillo que contraste /
  border: none;
  border-radius: 10px;
  font-size: 1.2rem;
  cursor: pointer;
  &:hover {
    background-color: #1565C0; / Cambia el color en hover */
  }
  `  
;

const SuccessMessage = styled.p`
  color: green;
  font-size: 1.1rem;
  text-align: center;
  `
;

const ErrorMessage = styled.p`
  color: red;
  font-size: 1.1rem;
  text-align: center;
  `
;

const CreateMeme = () => {
  const [title, setTitle] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const memeData = {
      title: title,
      imageUrl: imageUrl,
    };

    try {
      const response = await postMemes(memeData);
      setSuccessMessage('¡Meme creado con éxito!');
      setError(null);
      setTitle('');
      setImageUrl('');
    } catch (err) {
      setError('Hubo un error al crear el meme.');
      setSuccessMessage('');
    }
  };

  return (
    <Container>
    <MemeContainer>
      <MemeTitle>¡Crea tu Meme Minion!</MemeTitle>
      <MemeForm onSubmit={handleSubmit}>
        <MemeLabel>Título del meme:</MemeLabel>
        <MemeInput
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <MemeLabel>URL de la imagen:</MemeLabel>
        <MemeInput
          type="text"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          required
        />
        <MemeButton type="submit">Crear Meme</MemeButton>
      </MemeForm>

      {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </MemeContainer>
    </Container>
  );
};

export default CreateMeme;
