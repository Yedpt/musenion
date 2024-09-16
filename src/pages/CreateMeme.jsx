import React, { useState } from 'react';
import styled from 'styled-components';
import { postMemes, subirImagenCloudinary } from '../services/MinionServices'; // Importar ambos servicios

const CreateMeme = () => {
  const [title, setTitle] = useState('');
  const [imageFile, setImageFile] = useState(null); // Cambiar de imageUrl a imageFile
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  // Función que se llama cuando se envía el formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Subir la imagen a Cloudinary primero
      const imageUrl = await subirImagenCloudinary(imageFile);

      // Preparar los datos del meme
      const memeData = {
        title: title,
        url: imageUrl,
      };

      // Enviar los datos del meme a la fake API
      await postMemes(memeData);
      
      setSuccessMessage('¡Meme creado con éxito!');
      setError(null);
      setTitle('');
      setImageFile(null); // Limpiar el archivo seleccionado
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
        <MemeLabel>Subir imagen del meme:</MemeLabel>
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
  );
};

export default CreateMeme;


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


// // Importamos React y el hook useState para manejar el estado del componente
// import React, { useState } from 'react';
// // Importamos useForm de react-hook-form para manejar formularios
// import { useForm } from 'react-hook-form';
// // Importamos funciones de servicios para subir imágenes y crear memes
// import { subirImagenCloudinary, createMeme, getMemes } from '../services/services';
// // Importamos useNavigate para manejar la navegación
// import { useNavigate } from 'react-router-dom';

// // Definimos el componente funcional Create
// function Create() {
//     // Inicializamos el hook useNavigate para la navegación
//     const navigate = useNavigate();
//     // Inicializamos useForm y extraemos funciones y estado
//     const { register, handleSubmit, formState: { errors } } = useForm();
//     // Estado para almacenar la imagen seleccionada
//     const [image, setImage] = useState(null);
//     // Estado para manejar el estado de carga
//     const [loading, setLoading] = useState(false);
//     // Estado para manejar errores
//     const [error, setError] = useState('');
//     // Estado para manejar mensajes de éxito
//     const [mensaje, setMensaje] = useState('');

//     // Función que se ejecuta al enviar el formulario
//     const onSubmit = async (data) => {
//         // Activamos el estado de carga
//         setLoading(true);
//         // Limpiamos los estados de error y mensaje
//         setError('');
//         setMensaje('');

//         try {
//             // Subimos la imagen a Cloudinary
//             const imageUrl = await subirImagenCloudinary(image);

//             // Creamos el personaje en la API
//             const personajeCreado = await createMeme({
//                 name: data.name,
//                 year: data.year,
//                 description: data.description,
//                 author: data.author,
//                 image: imageUrl
//             });

//             // Redireccionamos a la galería después de crear el meme
//             navigate('/gallery');

//         } catch (error) {
//             // Manejamos el error si ocurre
//             setError('Error al crear el personaje.');
//         } finally {
//             // Desactivamos el estado de carga
//             setLoading(false);
//         }
//     };

//     // Renderizamos el componente
//     return (
//         <div className="w-full max-w-md mx-auto">
//             <h1 className="text-xl font-bold mb-4">Crear Personaje</h1>

//             {/* Mostramos mensajes de error o éxito si existen */}
//             {error && <p className="text-red-500">{error}</p>}
//             {mensaje && <p className="text-green-500">{mensaje}</p>}

//             {/* Formulario */}
//             <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-4">
//                 {/* Campo de nombre */}
//                 <input
//                     type="text"
//                     placeholder="Nombre del personaje"
//                     {...register("name", { required: "Este campo es requerido" })}
//                     className="border p-2 rounded"
//                 />
//                 {errors.name && <p className="text-red-500">{errors.name.message}</p>}

//                 {/* Campo de año */}
//                 <input
//                     type="number"
//                     placeholder="Año"
//                     {...register("year", { required: "Este campo es requerido" })}
//                     className="border p-2 rounded"
//                 />
//                 {errors.year && <p className="text-red-500">{errors.year.message}</p>}

//                 {/* Campo de descripción */}
//                 <input
//                     type="text"
//                     placeholder="Descripción del personaje"
//                     {...register("description", { required: "Este campo es requerido" })}
//                     className="border p-2 rounded"
//                 />
//                 {errors.description && <p className="text-red-500">{errors.description.message}</p>}

//                 {/* Campo de autor */}
//                 <input
//                     type="text"
//                     placeholder="Autor"
//                     {...register("author", { required: "Este campo es requerido" })}
//                     className="border p-2 rounded"
//                 />
//                 {errors.author && <p className="text-red-500">{errors.author.message}</p>}

//                 {/* Campo para subir imagen */}
//                 <input
//                     type="file"
//                     accept="image/*"
//                     onChange={(e) => setImage(e.target.files[0])}
//                     className="border p-2 rounded"
//                     required
//                 />

//                 {/* Botón de envío */}
//                 <button
//                     type="submit"
//                     className="bg-blue-500 text-white py-2 rounded"
//                     disabled={loading}
//                 >
//                     {loading ? 'Creando...' : 'Crear Personaje'}
//                 </button>
//             </form>
//         </div>
//     );
// }

// // Exportamos el componente
// export default Create;
