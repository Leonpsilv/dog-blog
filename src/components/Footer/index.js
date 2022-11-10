import { ReactComponent as DogsHeader } from "../../Assets/dogs.svg";
import './index.css';

const Footer = () => {
  return (
    <footer className="footer">
      <DogsHeader className='dog-footer'/>
      <p>Dogs Blog. Alguns Direitos reservados.</p>
    </footer>
  )
}

export default Footer;