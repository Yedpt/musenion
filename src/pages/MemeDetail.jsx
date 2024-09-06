import styled from 'styled-components';
import { useForm } from 'react-hook-form';


function Form() {
  const {register, handleSubmit, formState: {errors}} = useForm();

  console.log(errors)

  const onSubmit = handleSubmit((data) => {
    console.log(data);

  });

  const FormContainer = styled.form`
   
  `;
  const Label = styled.label`
  
  `;
  const Input = styled.input``;
  const SubmitButton = styled.button``;
  
  return (
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
      errors.nombre && <span>Espacio requerido.</span>
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
      errors.surname && <span>Espacio requerido.</span>
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
        errors.correo && <span>{errors.correo.message}</span>
      }

      <Label htmlFor="message">Mensaje</Label>
      <Input 
      type="text"
       id="message" 
       {...register("message",{
        required: true
       })
    } />
    {
      errors.message && <span>Espacio requerido.</span>
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
    
  )
}

export default Form;
