import "../css/FeedPhotos.css";
import { useEffect, useState } from "react";

import useFetch from '../../../Hooks/useFetch';
import { PHOTOS_GET } from "../../../api";
import Loading from '../../../Helper/Loading';
import Error from '../../../Helper/Error';
import FeedPhotosItem from './FeedPhotosItem';

const FeedPhotos = () => {
  const {data, loading, error, request} = useFetch();
  
  useEffect(() => {
    async function fetchPhotos () {
      const {url, options} = PHOTOS_GET({ page: 1, total: 6, user: 0 });
      const {json} = await request(url, options);
    }
    fetchPhotos();
  }, [request]);

  if(error) return <Error error={error} />
  if(loading) return <Loading />
  return (
    <ul className="feed-photos anime-left">
        {data && data.map(photo => (
            <FeedPhotosItem photo={photo} className="photo-item"/>
        )
        )}
    </ul>
  );
}
  
  export default FeedPhotos