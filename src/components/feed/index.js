import './index.css';
import FeedModal from './components/FeedModal';
import FeedPhotos from './components/FeedPhotos';

const Feed = () => {
  return (
    <div className="feed">
      <FeedModal />
      <FeedPhotos />
    </div>
  )
}
  
export default Feed;