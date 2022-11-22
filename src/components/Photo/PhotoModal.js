import './css/PhotoModal.css';

import { Link } from "react-router-dom";
import PhotoComments from "./PhotoComments";
import { useContext, useState } from 'react';
import { UserContext } from '../../context/UserContext';
import PhotoDelete from './PhotoDelete';
import Comment from './Comment';

const PhotoModal = ({data}) => {
  const user = useContext(UserContext);
  const {photo, comments} = data;
  const [newComments, setNewComments] = useState(comments);
  
  return (
    <div className="modal-photo">
      <div className="modal-photo-img"> <img src={photo.src} alt={photo.alt} /> </div>

      <div className="modal-details">
        <div>
          <p className="modal-author">
            {user.data && user.data.username === photo.author ?
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
      <PhotoComments comments={newComments} className="modal-comments"/>
      {user.data && <Comment userData={user.data} photoId={photo.id} setNewComments={setNewComments}/>}
      
    </div>
  );
}

export default PhotoModal;