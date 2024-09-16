import axios from "axios"; // vamos a importar axios y recordar primero que hay que instalar axios


const URL = 'http://localhost:3000/musenion'; //guardo la url del fake api en una variable

// CRUD 

//READ-metodo get
// Función para obtener los memes desde el servidor
export const getMemes = async () => {
  try {
    const response = await axios.get(URL); // espero la respuesta del db.json
    return response.data;
  } catch (error) {
    console.error('Error al pedir memes:', error);
    throw error;
  }
};

//READ-metodo get pero por ID
export const getMemeById = async (id) => {
  try {
    const response = await axios.get(`${URL}/${id}`);
    // const meme = await response.json();
    return response.data;
  } catch (error) {
    console.error('Error al obtener el meme:', error);
    throw error;
  }
};

//DELETE- metodo delete

export const deleteMemes = async (id) => {
  try {
      const response = await axios.delete(`${URL}/${id}`);
      return response.data
  } catch (error) {
      console.error('Error al borrar el meme:', error);
      throw error;
  }
}


//CREATE - metodo POST


export const postMemes = async (data) => {
  try {
      const response = await axios.post(URL, data);
      return response.data
  } catch (error) {
      console.error('Error al poster el meme:', error);
      throw error;
  }
}



//UPDATE . metodo put

export const putMemes = async (id, data) => {
  try {
      const response = await axios.put(`${URL}/${id}`, data);
      return response.data
  } catch (error) {
      console.error('Error al actualizar el meme:', error);
      throw error;
  }
}

// Función asincrónica para subir una imagen a Cloudinary
export const subirImagenCloudinary = async (file) => {
  // Crea un objeto FormData para enviar el archivo
  const formData = new FormData();
  // Agrega el archivo al FormData
  formData.append('file', file);
  // Agrega el preset de carga de Cloudinary
  formData.append('upload_preset', 'musenion');

  try {
      // Realiza una solicitud POST a la API de Cloudinary con el FormData
      const response = await axios.post(
          `https://api.cloudinary.com/v1_1/yederpt/image/upload`,
          formData
      );
      // Devuelve la URL segura de la imagen subida
      return response.data.secure_url;
  } catch (error) {
      // Si ocurre un error, lo registra en la consola
      console.error('Error subiendo la imagen:', error);
      // Lanza el error para que pueda ser manejado por el llamador
      throw error;
  }
};