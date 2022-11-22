import { PHOTO_DELETE } from '../../api';
import useFetch from '../../Hooks/useFetch';
import './PhotoDelete.css';

const PhotoDelete = ({id}) => {
  const {request, loading} = useFetch();

  async function handleClick () {
    const confirm = window.confirm('Tem certeza que deseja apagar o post?');
    if(confirm) {
        const {url, options} = PHOTO_DELETE(id);  
        const { response } = await request(url, options);
    
        if(response.ok) window.location.reload();
    }
  }
  return (
    <>
    {loading ?
      <button className='photo-delete-btn' disabled> Apagando... </button>  
    :
      <button className='photo-delete-btn' onClick={handleClick}> Apagar </button>
    }
    </>
  );
}

export default PhotoDelete;