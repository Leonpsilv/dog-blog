import "../css/FeedPhotosItem.css";

const FeedPhotosItem = ({photo, className, setModal}) => {
  function handleCLick () {
    setModal(photo);
  }

  return (
    <li className="photo-feed" onClick={handleCLick}>
      <img src={photo.src} key={photo.id} alt={photo.title} className={className}/>
      <span className="views-feed">{photo.acessos}</span>
    </li>
  );
}
  
  export default FeedPhotosItem