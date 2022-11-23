import './index.css';

import { ReactComponent as AddPost } from "../../Assets/adicionar.svg";
import { ReactComponent as Logoff } from "../../Assets/sair.svg";
import { ReactComponent as Stats } from "../../Assets/estatisticas.svg";
import { ReactComponent as Feed } from "../../Assets/feed.svg";
import NavItem from './NavItem';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../context/UserContext';
import { useLocation } from 'react-router-dom';



const UserHeader = () => {
  const { userLogout } = useContext(UserContext);
  const [title, setTitle] = useState('Minha conta');
  const location = useLocation();

  useEffect(() => {
    if(location.pathname === '/eu/') setTitle('Minha conta');
    if(location.pathname === '/eu/stats') setTitle('Estatísticas');
    if(location.pathname === '/eu/add') setTitle('Adicionar Post');
    
  }, [location]);

  return (
      <div className='mp-header'>
        <h1 className='title'>{title}</h1>

        <nav className='mp-nav'>
          <NavItem url='/eu/' id='feed' className='mp-nav-item' content={<Feed />} />
          <NavItem url='/eu/stats' id='stats' className='mp-nav-item' content={<Stats />} />
          <NavItem url='/eu/add' id='add-post' className='mp-nav-item' content={<AddPost />} />
          <Logoff onClick={userLogout} className='mp-nav-item logoff' />
        </nav>
      </div>  
  )
}

export default UserHeader;