import React, { useEffect, useState } from 'react';
import { getMemes, deleteMemes, postMemes, putMemes } from '../services/MinionServices'; // Importamos putMemes
import Carousel3D from '../components/carousel'; // Componente del carrusel 3D
import { Link } from 'react-router-dom'; // Para el botón que lleva a crear un nuevo meme


// aqui estara el slider listando las imagenes (memes) y que al darle click te lleve a visualizar el meme con su descripcion (detailMeme) y debajo un boton que te lleve a crear un nuevo meme (createMeme.jsx)

//aqui estara el slider y la peticion GET y un boton a donde te llevara a CREATEMEME 

const Galery = () => {
  const [memes, setMemes] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [newMeme, setNewMeme] = useState({ title: '', url: '' });
  // const [editingMeme, setEditingMeme] = useState(null); // Estado para el meme que se va a editar

  useEffect(() => {
    const fetchMemes = async () => {
      try {
        const data = await getMemes();
        setMemes(data);
        setLoading(false);
      } catch (error) {
        console.error("Error al cargar memes:", error);
        setLoading(false);
      }
    };

    fetchMemes();
  }, []);

  // const handleDelete = async (id) => {
  //   try {
  //     await deleteMemes(id);
  //     setMemes(memes.filter(meme => meme.id !== id));
  //   } catch (error) {
  //     console.error(`Error al eliminar el meme con id ${id}:`, error);
  //   }
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   if (editingMeme) {
  //     // Si estamos editando un meme
  //     try {
  //       const updatedMeme = await putMemes(editingMeme.id, newMeme); // Llama al servicio PUT
  //       setMemes(memes.map(meme => meme.id === editingMeme.id ? updatedMeme : meme)); // Actualiza la lista con el meme editado
  //       setEditingMeme(null); // Resetea el estado de edición
  //       setNewMeme({ title: '', url: '' });
  //     } catch (error) {
  //       console.error('Error al editar el meme:', error);
  //     }
  //   } else {
  //     // Si estamos agregando un nuevo meme
  //     try {
  //       const addedMeme = await postMemes(newMeme);
  //       setMemes([...memes, addedMeme]);
  //       setNewMeme({ title: '', url: '' });
  //     } catch (error) {
  //       console.error('Error al agregar el meme:', error);
  //     }
  //   }
  // };

  // const handleEdit = (meme) => {
  //   setEditingMeme(meme); // Guardamos el meme que estamos editando
  //   setNewMeme({ title: meme.title, url: meme.url }); // Rellenamos el formulario con los datos del meme a editar
  // };

 

  return (
    <div>
      {/* <h2>{editingMeme ? 'Editar Meme' : 'Lista de Memes'}</h2> */}
      
      {/* Formulario para agregar o editar memes */}
      {/* <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Título del meme"
          value={newMeme.title}
          onChange={(e) => setNewMeme({ ...newMeme, title: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="URL de la imagen"
          value={newMeme.url}
          onChange={(e) => setNewMeme({ ...newMeme, url: e.target.value })}
          required
        />
        <button type="submit">{editingMeme ? 'Actualizar Meme' : 'Agregar Meme'}</button>
        {editingMeme && <button type="button" onClick={() => setEditingMeme(null)}>Cancelar</button>}
      </form>
       */}
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {memes.map((meme) => (
          <div key={meme.id} style={{ margin: "10px", textAlign: "center" }}>
            <img
              src={meme.url}
              alt={meme.title}
              style={{ width: "200px", height: "200px", objectFit: "cover" }}
            />
            <p>{meme.title}</p>
            <button onClick={() => handleDelete(meme.id)}>Eliminar</button>
            <button onClick={() => handleEdit(meme)}>Editar</button> {/* Botón para editar */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Galery;