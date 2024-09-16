import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { useState } from "react";
import axios from "axios";

const PageContainer = styled.div`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100vw;
      margin: 0;
      // background: linear-gradient(to bottom, #FFDC59, #E2730C);
  `;

  const TitlePage = styled.h2`
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      color: #0C2849;
      margin-top: 20px;
      font-size: 24px;
  `

  const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    max-width: 80%;
    max-height: 90%;
    padding: 20px;
    margin-bottom: 40px;
    margin-top: 30px;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    background-color: #ffffff6e;
  `;

  const Label = styled.label`
  width: 90%;
  margin-bottom: 8px;
  font-weight: bold;
  color: black;
  font-size: 12px;
  `;

  const Input = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 12px;
  padding: 5px;
  width: 90%;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  background: white;
  color: gray;

  &:focus {
    border-color: yellow;
    outline: none;
  }
  `;

  const TextArea = styled.textarea`
  width: 90%;
  margin-bottom: 12px;
  padding: 30px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  background: white;
  color: gray;
  font-size: 16px;

  &:focus {
    border-color: yellow;
    outline: none;
  }
  `;

  const SearchFiles = styled.input`
  
  `;

  const Conditions = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    width: 90%;
    padding: 10px;
    font-size: 12px;
  `;

  const AcceptButton = styled.input`
  
  `;

  const SubmitButton = styled.button`
  width: 90%;
  padding: 5px;
  border-radius: 5px;
  `;

  const Advise = styled.span`
  color: red;
  `;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* Fondo semitransparente */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  width: 90%;
  max-width: 400px;
  text-align: center;
`;

const CloseButton = styled.button`
  margin-top: 20px;
  padding: 10px;
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #c82333;
  }
`;


function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [successMessage, setSuccessMessage] = useState("");
  const [showModal, setShowModal] = useState(false);

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("https://jsonplaceholder.typicode.com/posts", data);
      setSuccessMessage(`Hola ${data.nombre}, gracias por ponerte en contacto con nosotros. En breve, recibirás respuesta.`);
      setShowModal(true);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    
    <PageContainer>
        <TitlePage>Contáctanos</TitlePage>
        <FormContainer onSubmit={handleSubmit(onSubmit)}>

          <Label htmlFor="nombre">Nombre</Label>
          <Input 
          type="text"
          id="nombre" 
          {...register("nombre",{
            required: true
          })
        } />
        {
          errors.nombre && <Advise>Espacio requerido.</Advise>
        }
        
        <Label htmlFor="surname">Apellidos</Label>
          <Input 
          type="text"
          id="surname" 
          {...register("surname",{
            required: true
          })
        } />
        {
          errors.surname && <Advise>Espacio requerido.</Advise>
        }


          <Label htmlFor="correo">Correo</Label>
          <Input type="email" id="correo" {...register("correo", {
            required: {
              value: true,
              message: "El correo es un campo requerido."
            },
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, /*expresión regular*/
              message: "El correo no es válido."
            }

          })} />

          {
            errors.correo && <Advise>{errors.correo.message}</Advise>
          }

          <Label htmlFor="message">Mensaje</Label>
          <TextArea
          type="text"
          id="message" 
          {...register("message",{
            required: true
          })
        } />
        {
          errors.message && <Advise>Espacio requerido.</Advise>
        }

        <Label htmlFor="files">📎</Label>
        <SearchFiles
          type="file"
          id="files"
          {...register("files")}
        />
        <Conditions>
          <Label htmlFor="terms">Acepto términos y condiciones.</Label>
          <AcceptButton type="checkbox" id="terms" {...register("terms")} />
        </Conditions>

          <SubmitButton type="submit">Enviar</SubmitButton>
        </FormContainer> 
        {showModal && (
        <ModalOverlay>
          <ModalContent>
            {successMessage && <p>{successMessage}</p>}
            <CloseButton onClick={closeModal}>Cerrar</CloseButton>
          </ModalContent>
        </ModalOverlay>
      )}
    </PageContainer>
    
  )
}


export default Contact;
