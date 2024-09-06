import React, { useEffect, useState } from 'react';
import { getMemes, deleteMemes } from '../services/MinionServices';

const Galery = () => {
  const [memes, setMemes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMemes = async () => {
      try {
        const data = await getMemes(); // recibimos getMemes que es la funcion/servicio que traera nuestras imagenes del db.json
        //console.log(data); // Verifica los datos en la consola
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

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Lista de Memes</h2>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {memes.map((meme) => (
          <div key={meme.id} style={{ margin: "10px", textAlign: "center" }}>
            <img
              src={meme.url}  /* Aquí cambias meme.image por meme.url */
              alt={meme.title}
              style={{ width: "200px", height: "200px", objectFit: "cover" }}
            />
            <p>{meme.title}</p>
            <button onClick={() => handleDelete(meme.id)}>Eliminar</button> {/* Botón para eliminar */}
          </div>
        ))}
      </div>
    </div>
  );
};


export default Galery
