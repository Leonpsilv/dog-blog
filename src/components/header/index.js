import './index.css';
import { ReactComponent as DogsHeader } from "../../Assets/dogs.svg";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className='header'>
      <Link to='/'> <DogsHeader className='dog-header'/> </Link>
      <Link to='/login' className='link-header'>Login / Criar </Link>
    </nav>
  )
}

export default Header;