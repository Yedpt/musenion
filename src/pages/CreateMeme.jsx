import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import { postMemes, subirImagenCloudinary } from '../services/MinionServices';

const CreateMeme = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const imageUrl = await subirImagenCloudinary(imageFile);

      const memeData = {
        nombre: title,
        descripcion: description,
        url: imageUrl,
      };

      await postMemes(memeData);
      
      setSuccessMessage('¡Meme creado con éxito!');
      setError(null);
      setTitle('');
      setDescription('');
      setImageFile(null);
      navigate('/gallery');
    } catch (err) {
      setError('Hubo un error al crear el meme.');
      setSuccessMessage('');
    }
  };

  return (
    <Container>
      <MemeLayout>
       <ImageContainer>
        <img src="src\assets\images\minion_artist.jpg" alt="Minion artist"/>
        </ImageContainer>
      <MemeContainer>
        <TitleDiv>
          <MemeTitle>
            <span className="medium">¡SUBE TU</span>
          </MemeTitle>
          <MemeTitle>
            <span className="bold">MINION MEME!</span>
          </MemeTitle>
        </TitleDiv>
       
        <MemeForm onSubmit={handleSubmit}>
          <MemeLabel>Título del meme:</MemeLabel>
          <MemeInput
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <MemeLabel>Descripción del meme:</MemeLabel>
        <MemeInput
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <StyledParagraph>Subir imagen del meme:</StyledParagraph>
        <MemeInput
          type="file"
          onChange={(e) => setImageFile(e.target.files[0])}
          required
        />
        <MemeButton type="submit">Crear Meme</MemeButton>
      </MemeForm>

      {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </MemeContainer>
    </MemeLayout>
    </Container>
  );
};

export default CreateMeme;

const Container = styled.div`
  max-width: 100%;
  min-height: 650px;
  padding: 100px 20px; /* Ajuste para mobile-first */
  color: #0c2849;

  @media (min-width: 768px) {
    padding: 150px 20px 100px; /* Cambios para tablet */
  }
`;

const MemeLayout = styled.div`
  display: flex;
  flex-direction: column;
  background: rgba(250, 250, 250, 0.35);
  border-radius: 0;
  overflow: hidden;
  margin: 0 auto;

  @media (min-width: 768px) {
    flex-direction: row; /* Cambios para tablet */
    max-width: 1200px;
    border-radius: 4px;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`;

const MemeContainer = styled.div`
  padding: 20px;
  max-width: 100%;
  margin: 0 auto;

  @media (min-width: 768px) {
    max-width: 650px; /* Cambios para tablet */
  }
`;

const MemeTitle = styled.h2`
  display: flex;
  text-align: left;

  .medium {
    font-weight: 500;
  }

  .bold {
    font-weight: 700;
  }
`;

const TitleDiv = styled.div`
  margin-bottom: 1.2rem;
`;

const MemeForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const StyledParagraph = styled.p`
  font-size: 0.8rem;
  font-weight: bold;
  margin-bottom: 1.2rem;
`;

const MemeLabel = styled.label`
  font-size: 0.8rem;
  font-weight: bold;
  margin-bottom: 10px;
`;

const MemeInput = styled.input`
  margin-bottom: 1.2rem;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #ffda58;
  }
`;

const MemeButton = styled.button`
  padding: 10px;
  color: #0C2849;
  background-color: #FFDA58;
  border: 2px solid #0C2849;
  border-radius: 4px;
  font-size: 1.2rem;
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
