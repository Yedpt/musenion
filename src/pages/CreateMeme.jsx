import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";


// Función para hacer el POST
const postMemes = async (data) => {
  try {
    const response = await axios.post("http://localhost:3000/musenion", data); ç
    return response.data;
  } catch (error) {
    console.error("Error al postear el meme:", error);
    throw error;
  }
};

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
const CreateMeme = () => {
  return (
    <div>
      
    </div>
  )
}

export default CreateMeme

