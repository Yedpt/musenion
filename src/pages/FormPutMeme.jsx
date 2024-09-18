import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getMemeById, putMemes } from '../services/MinionServices';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

const FormPutMeme = () => {
  const { id } = useParams(); // Obtener el id del meme desde la URL
  const [meme, setMeme] = useState(null); // Estado para el meme que vamos a editar
  const [loading, setLoading] = useState(true); // Estado para manejar la carga
  const [error, setError] = useState(null); // Estado para manejar errores
  const navigate = useNavigate(); // Para redirigir tras la actualización

  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  useEffect(() => {
    const fetchMeme = async () => {
      try {
        const memeData = await getMemeById(id); // Obtener el meme por ID desde la API
        setMeme(memeData);
        reset(memeData); // Pre-cargar los datos del meme en el formulario
      } catch (error) {
        setError('Error al cargar el meme.');
      } finally {
        setLoading(false);
      }
    };

    fetchMeme();
  }, [id, reset]); // Agregamos reset como dependencia

 // Función para manejar el envío del formulario
 const onSubmit = async (data) => {
  try {
    // Actualizo el meme en la base de datos
    await putMemes (id, data); // solicitud PUT con los datos actualizados
    navigate('/gallery'); // después de guardar los cambios vamos a la galeria
    } catch (error) {
      setError('Error al actualizar el meme.');
    }
  };

  if (loading) return <p>Cargando meme para editar...</p>;
  if (error) return <p>{error}</p>;

  return (
    <Page>
      <TextH2>Editar Meme</TextH2>
      <ImageAndForm>
      <Imagen>
        {meme && <Image src={meme.url} alt={meme.title}/>}
      </Imagen>
      {meme && (
        <FormContainer onSubmit={handleSubmit(onSubmit)}>
          <div>
            <Label>Título:</Label>
            <Input
              type="text"
              {...register('title', { required: 'El título es obligatorio' })}
            />
            {errors.title && <p>{errors.title.message}</p>}
          </div>
          <div>
            <Label>Descripción:</Label>
            <Input
              type="text"
              {...register('description', { required: 'La descripción es obligatoria' })}
            />
            {errors.description && <p>{errors.description.message}</p>}
          </div>
          <div>
            <Label>URL de la Imagen:</Label>
            <Input
              type="text"
              {...register('url', {
                required: 'La URL es obligatoria',
                pattern: {
                  value: /^(https?:\/\/[^\s$.?#].[^\s]*)$/,
                  message: 'Formato de URL inválido',
                },
              })}
            />
            {errors.url && <p>{errors.url.message}</p>}
          </div>
          <SaveButton type="submit">Guardar Cambios</SaveButton>
          <CancelButton type="button" onClick={() => reset(meme)}>Cancelar</CancelButton> {/* Resetear el formulario */}
        </FormContainer>
       )}
      </ImageAndForm>
      
    </Page>
  );
};


const TextH2 = styled.h2`
  text-transform: uppercase;
  color: #0C2849;
  margin-top: 5vh;
  margin-bottom: 2vh;

  @media (min-width: 960px){
    margin-bottom: 0;
    margin-top: 8vh;
  }
`


const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 90%;
  margin-left: 5%;
  margin-bottom: 10vh;
  margin-top: 12vh;

  @media (min-width: 960px){
  
  }
`

const ImageAndForm = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width:95%;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: #ffffff6e;

@media (min-width: 960px){
  display: flex;  
  flex-direction: row;
  margin-top: 30px;
  margin-bottom: 35px;
  width:80%;
  height: 100vh;
}
`
const Imagen = styled.figure`
display: flex;
justify-content: center;

@media (min-width: 960px){
  height:100%;
  width:auto;

}
`

const Image = styled.img`
 border-radius: 8px;
 width: 75%;
 height: auto;
 margin-top: 5vh;
 

 @media (min-width: 960px){
  width: auto;
  height: 50%;
  margin-top:0;
 }
`
const FormContainer = styled.form`
display: flex;
flex-direction: column;
align-items: center;
max-width: 80%;
padding: 3vh;
margin-bottom: 10vh;
margin-top: 6vh;
border-radius: 10px;
box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
background-color: #ffffff6e;

@media (min-width: 960px){
border-radius: 0;
box-shadow: none;
background-color: transparent;
width:100%;
justify-content:flex-start;
}
`
const Label = styled.label`
font-weight: bold;
color: black;
font-size: 15px;
`
const Input = styled.input`
  display: flex;
  margin-bottom: 15px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  color: gray;

  &:focus {
    border-color: yellow;
    outline: none;
  }

  @media (min-width: 960px){
    width:100%;
  }
`
const SaveButton = styled.button`
  width: 25vh;
  height: 4.5vh;
  font-size:16px;
  padding: 5px;
  border-radius: 5px;
  background-color: #FFDC59;
`
const CancelButton = styled.button`
  width: 25vh;
  height: 4.5vh;
  font-size:16px;
  margin-top: 8%;
  border-radius: 5px;
`
  
export default FormPutMeme;
