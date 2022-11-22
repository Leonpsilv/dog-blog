const PhotoComments = ({comments}) => {
  return (
    <ul className="modal-comments">
      {comments.map(data => (
        <li key={data.comment_ID}><strong>{data.comment_author}:</strong> {data.comment_content}</li>
      ))}
    </ul>
  );
}

export default PhotoComments;