import './index.css';
import FeedModal from './components/FeedModal';
import FeedPhotos from './components/FeedPhotos';
import { useEffect, useState } from 'react';

const Feed = ({user}) => {
  const [modal, setModal] = useState(null);
  const [pages, setPages] = useState([ 1 , 2 ]);
  const [infinite, setInfinite] = useState(true);

  useEffect(() => {
    let wait = false;

    function infiniteScroll () {
      if(infinite) {
        const scrollY = window.scrollY;
        const height = document.body.offsetHeight - window.innerHeight;
  
        if(scrollY > height * .95 && !wait) {
          setPages(pages => [...pages, pages.length + 1]);
          wait = true;
          setTimeout(() => { wait = false }, 500);
        } 
      }
    }

    window.addEventListener('wheel', infiniteScroll);
    window.addEventListener('scroll', infiniteScroll);

    return () => { // to clean event
      window.removeEventListener('wheel', infiniteScroll);
      window.removeEventListener('scroll', infiniteScroll);

    }
  }, [infinite]);

  return (
    <div className="feed">
      {modal && 
        <FeedModal photo={modal} setModal={setModal}/>
      }

      {pages.map(page => (
         <FeedPhotos
           user={user}
           key={page}
           page={page}
           setModal={setModal}
           setInfinite={setInfinite}
         />
      ))}
      {!infinite && <p className='feed-end'>Não existem mais postagens.</p>}
    </div>
  )
}
  
export default Feed;