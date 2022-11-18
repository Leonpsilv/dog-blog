import './css/UserPhotoPost.css';

import Input from '../Login/Input';
import ButtonSubmit from '../Login/ButtonSubmit';
import useForm from '../../Hooks/useForm';
import { useEffect, useState } from 'react';
import useFetch from '../../Hooks/useFetch';
import { PHOTO_POST } from '../../api';
import { useNavigate } from 'react-router-dom';

const UserPhotoPost = () => {
  const navigate = useNavigate();

  const name = useForm();
  const age = useForm('number');
  const mass = useForm('number');
  const [img, setImg] = useState({});

  const {data, loading, error, request} = useFetch();

  useEffect(() => {
    if(data) navigate('/eu');
  }, [data, navigate]);

  async function handleSubmit (event) {
    event.preventDefault();
    if(!name.validate() || !mass.validate() || !age.validate()) return;
    const formData = new FormData();
    formData.append('img', img.raw);
    formData.append('nome', name.value);
    formData.append('idade', age.value);
    formData.append('peso', mass.value);

    const token = window.localStorage.getItem('token');
    const {url, options} = PHOTO_POST(formData, token);

    request(url, options);
  }

  async function handleImgChange ({target}) {
    setImg({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0]
    });
  }
  return (
    <section className='user-add-post'>
      <form onSubmit={handleSubmit} className='form-post'>
        <label htmlFor='name'>Nome</label>
        <Input
          type='text'
          name='name'
          id='name'
          className='form-input'
          placeholder='digite o nome do pet'
          value={name.value}

          {...name}
        />

        <label htmlFor='idade'>Idade</label>
        <Input
          type='number'
          name='idade'
          id='idade'
          className='form-input'
          placeholder='digite a idade do pet'
          value={age.value}

          {...age}
        />

        <label htmlFor='peso'>Peso</label>
        <Input
          type='number'
          name='peso'
          id='peso'
          className='form-input'
          placeholder='digite o peso(kg) do pet'
          value={mass.value}

          {...mass}
        />

        <input type='file' name='img' id='img' 
          onChange={handleImgChange}
          className='user-post-file'
        />

        {loading ?
          <button disabled className='form-btn'>Enviando...</button>
          : 
          <ButtonSubmit
            className='form-btn'
            text="Enviar"
            id="post"
          />
        }

        
      </form>

      <div>
        {
          img.preview &&
          <div
          className='img-preview'
          style={{backgroundImage:`url(${img.preview})`}}
          >
          </div>
        }
      </div>
    </section>
  );
}

export default UserPhotoPost;