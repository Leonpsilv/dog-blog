import './index.css';
import { useContext } from 'react';
import { ReactComponent as DogsHeader } from "../../assets/dogs.svg";
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';

const Header = () => {
  const { data } = useContext(UserContext);

  return (
    <nav className='header'>
      <Link to='/'> <DogsHeader className='dog-header'/> </Link>
      {data ?
      (<Link to='/eu' className='link-header'>{data.username}</Link>)
      :
      (<Link to='/login' className='link-header'>Login / Criar </Link>)}
      
    </nav>
  )
}

export default Header;