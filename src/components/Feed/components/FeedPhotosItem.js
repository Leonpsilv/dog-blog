import "../css/FeedPhotosItem.css";

const FeedPhotosItem = ({photo, className}) => {
  return (
    <li className="photo-feed">
      <img src={photo.src} key={photo.id} alt={photo.title} className={className}/>
      <span className="views-feed">{photo.acessos}</span>
    </li>
  );
}
  
  export default FeedPhotosItem