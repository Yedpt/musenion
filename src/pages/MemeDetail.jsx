import styled from 'styled-components';
import { useForm } from 'react-hook-form';


function Form() {
  const {register, handleSubmit, formState: {errors}} = useForm();

  console.log(errors)

  const onSubmit = handleSubmit((data) => {
    console.log(data);

  });

  return (
    
    <PageContainer>
        {/* <Nav/> */}
        <TitlePage>Contáctanos</TitlePage>
        <FormContainer onSubmit={onSubmit}>

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
        <Input
          type="file"
          id="files"
          {...register("files")}
        />

          <Label htmlFor="terms">Acepto términos y condiciones.</Label>
          <Input type="checkbox" id="terms" {...register("terms")} />

          <SubmitButton type="submit">Enviar</SubmitButton>
        </FormContainer>
        {/* <Footer/> */}
    </PageContainer>
    
  )
}

  const PageContainer = styled.body`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100vh;  /* 100% de la altura de la ventana */
      width: 100vw;   /* 100% del ancho de la ventana */
      margin: 0;
      background-color: #e9ecef;
  `;

  const TitlePage = styled.h2`
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      color: #0C2849;
      margin-top: 1px;
      margin-bottom: 20px;
      font-size: 24px;
  `

  const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    max-width: 60%;
    max-height: 80%;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    background-color: white;
  `;
  const Label = styled.label`
  margin-bottom: 8px;
  font-weight: bold;
  color: black;
  font-size: 16px;
  `;

  const Input = styled.input`
  margin-bottom: 12px;
  padding: 10px;
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
  margin-bottom: 12px;
  padding: 20px;
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
  const SubmitButton = styled.button`
    
  `;
  const Advise = styled.span`
  color: red;
  `;

  
  

export default Form;
