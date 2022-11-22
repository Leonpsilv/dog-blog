const PhotoComments = ({id, comments}) => {
  return (
    <ul className="modal-comments">
      {comments.map((data, index) => (
        <li key={index}><strong>{data.comment_author}:</strong> {data.comment_content}</li>
      ))}
    </ul>
  );
}

export default PhotoComments;