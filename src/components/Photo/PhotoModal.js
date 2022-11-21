import './PhotoModal.css';

import { Link } from "react-router-dom";
import PhotoComments from "./PhotoComments";

const PhotoModal = ({data}) => {
  const {photo, comments} = data;
  return (
    <div className="modal-photo">
      <div className="modal-photo-img"> <img src={photo.src} alt={photo.alt} /> </div>

      <div className="modal-details">
        <div>
          <p className="modal-author">
            <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
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