import React, { useState } from 'react';
import styled from 'styled-components';
import { postMemes } from '../services/MinionServices'; // Importar el servicio

// Estilos minionescos usando styled-components
const MemeContainer = styled.div`
  background-color: #FFEB3B;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  max-width: 400px;
  margin: 0 auto;
`;

const MemeTitle = styled.h2`
  color: #1A237E;
  font-family: 'Comic Sans MS', sans-serif;
  text-align: center;
`;

const MemeForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const MemeLabel = styled.label`
  font-size: 1.2rem;
  color: #1A237E;
  margin-bottom: 10px;
  font-family: 'Comic Sans MS', sans-serif;
`;

const MemeInput = styled.input`
  padding: 10px;
  border-radius: 10px;
  border: 2px solid #1A237E;
  margin-bottom: 15px;
  font-family: 'Comic Sans MS', sans-serif;
  font-size: 1rem;
  &:focus {
    outline: none;
    border-color: #0D47A1;
  }
`;

const MemeButton = styled.button`
  padding: 10px;
  background-color: #0D47A1;
  color: #FFEB3B;
  border: none;
  border-radius: 10px;
  font-size: 1.2rem;
  font-family: 'Comic Sans MS', sans-serif;
  cursor: pointer;
  &:hover {
    background-color: #1565C0;
  }
`;

const SuccessMessage = styled.p`
  color: green;
  font-size: 1.1rem;
  text-align: center;
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 1.1rem;
  text-align: center;
`;

const CreateMeme = () => {
  const [title, setTitle] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  // Función que se llama cuando se envía el formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    const memeData = {
      title: title,
      imageUrl: imageUrl,
    };

    try {
      const response = await postMemes(memeData); // Llamada al servicio desde MinionServices
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
  );
};

export default CreateMeme;
