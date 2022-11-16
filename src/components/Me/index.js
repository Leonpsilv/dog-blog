import './index.css';

import { ReactComponent as AddPost } from "../../Assets/adicionar.svg";
import { ReactComponent as Logoff } from "../../Assets/sair.svg";
import { ReactComponent as Stats } from "../../Assets/estatisticas.svg";
import { ReactComponent as Feed } from "../../Assets/feed.svg";
import NavItem from './NavItem';

const Me = () => {

  return (
    <div className='my-page'>
      <div className='mp-header'>
        <h1 className='title'>Minha conta</h1>

        <nav className='mp-nav'>
          <NavItem url='' id='feed' className='mp-nav-item' content={<Feed />} />
          <NavItem url='' id='stats' className='mp-nav-item' content={<Stats />} />
          <NavItem url='' id='add-post' className='mp-nav-item' content={<AddPost />} />
          <NavItem url='' id='logoff' className='mp-nav-item' content={<Logoff />} />
        </nav>
      </div>  
    </div>
  )
}

export default Me;