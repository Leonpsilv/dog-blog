import { Link } from 'react-router-dom';

const NavItem = ({
    url,
    content,
    id,
    className
}) => {
  return (
    <Link to={url} id={id} className={className}>{content}</Link>
  )
}
  
export default NavItem;