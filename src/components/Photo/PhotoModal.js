import './PhotoModal.css';

import { Link } from "react-router-dom";
import PhotoComments from "./PhotoComments";
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import PhotoDelete from './PhotoDelete';

const PhotoModal = ({data}) => {
  const {photo, comments} = data;
  const user = useContext(UserContext);
  
  return (
    <div className="modal-photo">
      <div className="modal-photo-img"> <img src={photo.src} alt={photo.alt} /> </div>

      <div className="modal-details">
        <div>
          <p className="modal-author">
            {user.data && user.data.username == photo.author ?
            <PhotoDelete id={photo.id} />
            :
              <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
            }
            <span className="modal-views">{photo.acessos}</span>
          </p>
          
          <h1 className="title">
            {photo.title}
          </h1>

          <ul className='modal-attributes'>
            <li>{photo.peso} kg</li>
            {photo.idade > 1 ?
              <li>{photo.idade} anos</li>
              :
              <li>{photo.idade} ano</li>
            }
            
          </ul>
        </div>
      </div>
      <PhotoComments id={photo.id} comments={comments} className="modal-comments"/>
    </div>
  );
}

export default PhotoModal;