import React, { useEffect, useState } from 'react';
import { getMemes, deleteMemes, postMemes } from '../services/MinionServices';

const Galery = () => {
  const [memes, setMemes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newMeme, setNewMeme] = useState({ title: '', url: '' }); // Estado para el nuevo meme

  useEffect(() => {
    const fetchMemes = async () => {
      try {
        const data = await getMemes(); // obtenemos los memes
        setMemes(data);
        setLoading(false);
      } catch (error) {
        console.error("Error al cargar memes:", error);
        setLoading(false);
      }
    };

    fetchMemes();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteMemes(id); // Llama al servicio de eliminación
      setMemes(memes.filter(meme => meme.id !== id)); // Filtra y actualiza la lista de memes
    } catch (error) {
      console.error(`Error al eliminar el meme con id ${id}:`, error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const addedMeme = await postMemes(newMeme); // Llama al servicio de POST
      setMemes([...memes, addedMeme]); // Actualiza la lista de memes con el nuevo meme
      setNewMeme({ title: '', url: '' }); // Reinicia el formulario
    } catch (error) {
      console.error('Error al agregar el meme:', error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Lista de Memes</h2>
      
      {/* Formulario para agregar nuevos memes */}
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Agregar Meme</button>
      </form>
      
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default Galery;