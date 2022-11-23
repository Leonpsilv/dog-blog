import './index.css';

import UserHeader from './UserHeader';
import { Routes, Route } from 'react-router-dom';
import Feed from '../Feed/index';
import UserPhotoPost from './UserPhotoPost';
import UserStats from './UserStats';
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';


const Me = () => {
  const { data } = useContext(UserContext);

  return (
    <div className='my-page'>
      <UserHeader />
      <div className='my-page-body'>
        <Routes>
          <Route path="/" element={ <Feed user={data.id} /> } />
          <Route path="/stats" element={ <UserStats /> } />
          <Route path="/add" element={ <UserPhotoPost /> } />
        </Routes>
      </div>
    </div>
  )
}

export default Me;