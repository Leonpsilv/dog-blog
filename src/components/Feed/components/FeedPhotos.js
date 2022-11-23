import "../css/FeedPhotos.css";
import { useEffect } from "react";

import useFetch from '../../../Hooks/useFetch';
import { PHOTOS_GET } from "../../../api";
import Loading from '../../../Helper/Loading';
import Error from '../../../Helper/Error';
import FeedPhotosItem from './FeedPhotosItem';

const FeedPhotos = ({user, page, setModal, setInfinite}) => {
  const {data, loading, error, request} = useFetch();
  const total = 6
  
  useEffect(() => {
    async function fetchPhotos () {
      const {url, options} = PHOTOS_GET({ page, total, user });
      const {response, json} = await request(url, options);
      if(response && response.ok && json.length < total) setInfinite(false);
    }

    fetchPhotos();

  }, [request, user, setInfinite]);

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