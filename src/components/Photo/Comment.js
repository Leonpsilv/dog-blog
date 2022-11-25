import './css/Comment.css';
import { useState } from "react";
import { ReactComponent as DogsComment } from "../../assets/enviar.svg";
import { COMMENT_POST } from '../../api';
import useFetch from '../../hooks/useFetch';

const Comment = ({photoId, setNewComments}) => {
  const [value, setValue] = useState();
  const [textError, setTextError] = useState('');
  const {loading, error, request} = useFetch();
  
  function handleChange (event) {
      event.preventDefault();
      if(event.target.value.length < 71){
          setValue(event.target.value);
          setTextError('');
        }else{
            setTextError('Digite, no máximo, 70 caracteres! ');
        }
  }
    
  async function handleSubmit () {
    if(!value || textError) return;
    const id = photoId;
    const comment = value
    const {url, options} = COMMENT_POST(id, {comment});
    const { response, json } = await request(url, options);

    if(response.ok) {
        setValue('');
        setNewComments(comments => [...comments, json]);
    }
  }
  return (
    <div>
      <p className='msg-error photo-error'>{textError}</p>
      {error && <p className='msg-error photo-error'>{error}</p>}
      
      <div className='photo-comment'>
        <textarea
          id='comment'
          name='comment'
          value={value}
          onChange={handleChange}
          placeholder="Comente..."
          className="photo-text-comment"
        />
        {loading ?
          <DogsComment className='photo-btn-comment' />
        :
          <DogsComment className='photo-btn-comment' onClick={handleSubmit}/>
        }
      </div>
    </div>
  );
}

export default Comment;