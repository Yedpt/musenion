import React from 'react'

const CreateMeme = () => {

  const [previewUrl, setPreviewUrl] = useState('');
  const [submitStatus, setSubmitStatus] = useState({ success: '', error: '' });

  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append('image', data.image[0]);
    formData.append('text', data.memeText);

    try {
      const response = await postMemes();

      if (response.ok) {
        setSubmitStatus({ success: 'Meme uploaded successfully!', error: '' });
        reset();
        setPreviewUrl('');
      } else {
        setSubmitStatus({ success: '', error: 'Failed to upload meme. Please try again.' });
      }
    } catch (error) {
      setSubmitStatus({ success: '', error: 'An error occurred. Please try again.' });
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreviewUrl(URL.createObjectURL(file));
    }
  };


  return (
    <div>
      
    </div>
  )
}

const Container = styled.div`
  background-color: #ffd966;
  padding: 20px;
  max-width: 100%;
  background: linear-gradient(to bottom, #FFDC59, #E2730C);

  @media (min-width: 768px) {
    max-width: 800px;
    margin: 0 auto;
  }
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    display: none;
  }
`;

const Title = styled.h2`
  color: #333;
  font-size: 20px;

  @media (min-width: 768px) {
    font-size: 24px;
  }
`;

const UploadArea = styled.div`
  @media (min-width: 768px) {
    display: flex;
    gap: 20px;
  }
`;

const ImagePreview = styled.div`
  width: 100%;
  height: 200px;
  background-color: #fff;
  border: 2px dashed #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    width: 300px;
    height: 300px;
    margin-bottom: 0;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (min-width: 768px) {
    flex: 1;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 8px;
`;

const Button = styled.button`
  background-color: #FFDA58;
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
  border-radius: 8px;

  @media (min-width: 768px) {
    background-color: #FFDA58;
    align-self: flex-start;
  }
`;

const ErrorMessage = styled.p`
  color: red;
`;

const SuccessMessage = styled.p`
  color: green;
`;


export default CreateMeme

