import './index.css';

import UserHeader from './UserHeader';
import { Routes, Route } from 'react-router-dom';
import Feed from '../Feed/index';
import UserPhotoPost from './UserPhotoPost';
import UserStats from './UserStats';


const Me = () => {

  return (
    <div className='my-page'>
      <UserHeader />
        <Routes>
          <Route path="/" element={ <Feed /> } />
          <Route path="/stats" element={ <UserStats /> } />
          <Route path="/add" element={ <UserPhotoPost /> } />
        </Routes>
    </div>
  )
}

export default Me;