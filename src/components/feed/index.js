import './index.css';
import FeedModal from './components/FeedModal';
import FeedPhotos from './components/FeedPhotos';
import { useState } from 'react';

const Feed = () => {
  const [modal, setModal] = useState(null);
  return (
    <div className="feed">
      {modal && 
        <FeedModal photo={modal} setModal={setModal}/>
      }
      <FeedPhotos setModal={setModal} />
    </div>
  )
}
  
export default Feed;