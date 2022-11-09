import './index.css';
import { ReactComponent as DogsHeader } from "../../Assets/dogs.svg";

const Header = () => {
  return (
    <nav className='header'>
      <a href='/'><DogsHeader className='dog-header'/></a>
      <a href='/' className='link-header'>Login / Criar </a>
    </nav>
  )
}

export default Header;