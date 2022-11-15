import { Link } from 'react-router-dom';

const ButtonRedirect = ({
    text,
    className,
    id,
    url
}) => {
  return (
      <Link to={url}
        id={id}
        className={className}
    >
        {text}
      </Link>
  )
};

export default ButtonRedirect;