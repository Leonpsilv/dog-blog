import '../css/FeedModal.css';

import useFetch from '../../../Hooks/useFetch';
import { PHOTO_GET } from '../../../api';
import Loading from '../../../Helper/Loading';
import Error from '../../../Helper/Error';
import { useEffect } from 'react';
import PhotoModal from '../../Photo/PhotoModal';

const FeedModal = ({photo, setModal}) => {
  const {data, error, loading, request} = useFetch();
  
  useEffect(() => {
    const {url, options} = PHOTO_GET(photo.id);
    request(url, options);
  }, [request, photo.id]);

  function handleOutsideClick (event) {
    if(event.target === event.currentTarget) setModal(null);
  }

  return (
    <div className="feed-modal" onClick={handleOutsideClick}>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoModal data={data} />}
    </div>
  );
}

export default FeedModal