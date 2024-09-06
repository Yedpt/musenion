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

//DELETE- metodo delete

const deleteMemes = async (id) => {
  try {
      const response = await axios.delete(`${URL}/${id}`);
      return response.data
  } catch (error) {
      console.error('Error al borrar el meme:', error);
      throw error;
  }
}

deleteMemes(id)


//CREATE - metodo POST


const postMemes = async (URL, data) => {
  try {
      const response = await axios.post(URL, data);
      return response.data
  } catch (error) {
      console.error('Error al poster el meme:', error);
      throw error;
  }
}

postMemes(URL, data)


//UPDATE . metodo put

const putMemes = async (URL, data) => {
  try {
      const response = await axios.put(URL, data);
      return response.data
  } catch (error) {
      console.error('Error al actualizar el meme:', error);
      throw error;
  }
}

putMemes(URL, data)

