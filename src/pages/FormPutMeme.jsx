import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getMemeById, putMemes } from '../services/MinionServices';
import { useForm } from 'react-hook-form';

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
    // Actualizamos el meme en la base de datos
    await putMemes (id, data); // Aquí hacemos la solicitud PUT con los datos actualizados
    navigate('/gallery'); // Redirigimos a la galería después de guardar los cambios
    } catch (error) {
      setError('Error al actualizar el meme.');
    }
  };

  if (loading) return <p>Cargando meme para editar...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Editar Meme</h2>
      {/* Mostrar la imagen del meme antes del formulario */}
      {meme && <img src={meme.url} alt={meme.title} style={{ width: '300px', height: 'auto' }} />}
      {meme && (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>Título:</label>
            <input
              type="text"
              {...register('title', { required: 'El título es obligatorio' })}
            />
            {errors.title && <p>{errors.title.message}</p>}
          </div>
          <div>
            <label>Descripción:</label>
            <input
              type="text"
              {...register('description', { required: 'La descripción es obligatoria' })}
            />
            {errors.description && <p>{errors.description.message}</p>}
          </div>
          <div>
            <label>URL de la Imagen:</label>
            <input
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
          <button type="submit">Guardar Cambios</button>
          <button type="button" onClick={() => reset(meme)}>Cancelar</button> {/* Resetear el formulario */}
        </form>
      )}
    </div>
  );
};

export default FormPutMeme;
