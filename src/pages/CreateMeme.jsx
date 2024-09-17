import  { useState } from "react";
import styled from "styled-components";
import { postMemes, subirImagenCloudinary } from '../services/MinionServices'; // Importar ambos servicios


const CreateMeme = () => {
  const [title, setTitle] = useState("");
  // const [imageUrl, setImageUrl] = useState("");
  const [description, setDescription] = useState(''); // Nuevo estado para la descripción
  const [imageFile, setImageFile] = useState(null);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Subir la imagen a Cloudinary primero
      const imageUrl = await subirImagenCloudinary(imageFile);

      // Preparar los datos del meme
      const memeData = {
        nombre: title,
        descripcion: description, // Añadir la descripción
        url: imageUrl,
      };

      // Enviar los datos del meme a la fake API
      await postMemes(memeData);
      
      setSuccessMessage('¡Meme creado con éxito!');
      setError(null);
      setTitle('');
      setDescription(''); // Limpiar la descripción
      setImageFile(null); // Limpiar el archivo seleccionado
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
          type="text" // Input para la descripción
          value={description}
          onChange={(e) => setDescription(e.target.value)} // Capturar el valor de la descripción
          required
        />
        <StyledParagraph>Subir imagen del meme:</StyledParagraph>
        <MemeInput
          type="file" // Cambia a file para subir imágenes
          onChange={(e) => setImageFile(e.target.files[0])} // Almacena el archivo seleccionado
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

// Estilos minionescos usando styled-components

const Container = styled.div`
  background: linear-gradient(to bottom, #ffdc59, #e2730c);
  max-width: 100%;
  min-height: 650px;
  padding: 20px;
  color: #0c2849;
`;


const MemeLayout = styled.div`
  display: flex;
  max-width: 1200px;
  width: 100%;
  background: rgba(250, 250, 250, 0.35);
  border-radius: 8px;
  overflow: hidden;

  @media (max-width: 768px) {
    flex-direction: column;
    border-radius: 0;
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
  max-width: 650px;
  margin: 0 auto;

  @media (max-width: 768px) {
    max-width: 400px;
  

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
  color: red;
  margin-bottom: 1.2rem;
`;

const MemeLabel = styled.label`
  font-size: 1.2rem;
  margin-bottom: 10px;
`;
const MemeInput = styled.input`
  margin-bottom: 1.2rem;
  padding: 10px;
  border-radius: 8px;
  border: 2px solid #0c2849;
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
  border-radius: 8px;
  font-size: 1.2rem;
  cursor: pointer;
  &:hover {
    background-color: #1565C0; / Cambia el color en hover */
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
