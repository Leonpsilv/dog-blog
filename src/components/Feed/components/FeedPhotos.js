import "../css/FeedPhotos.css";
import { useEffect } from "react";

import useFetch from '../../../Hooks/useFetch';
import { PHOTOS_GET } from "../../../api";
import Loading from '../../../Helper/Loading';
import Error from '../../../Helper/Error';
import FeedPhotosItem from './FeedPhotosItem';

const FeedPhotos = ({setModal}) => {
  const {data, loading, error, request} = useFetch();
  
  useEffect(() => {
    async function fetchPhotos () {
      const {url, options} = PHOTOS_GET({ page: 1, total: 10, user: 0 });
      await request(url, options);
    }
    fetchPhotos();
  }, [request]);

  if(error) return <Error error={error} />
  if(loading) return <Loading />
  return (
    <ul className="feed-photos anime-left">
        {data && data.map((photo, index) => (
            <FeedPhotosItem photo={photo} key={index} className="photo-item" setModal={setModal}/>
        )
        )}
    </ul>
  );
}
  
  export default FeedPhotos