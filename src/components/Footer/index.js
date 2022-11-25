import { ReactComponent as DogsFooter } from "../../assets/dogs.svg";
import './index.css';

const Footer = () => {
  return (
    <footer className="footer">
      <DogsFooter className='dog-footer'/>
      <p>Dogs Blog. Alguns Direitos reservados.</p>
    </footer>
  )
}

export default Footer;