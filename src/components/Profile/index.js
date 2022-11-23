import './index.css';

import Feed from "../Feed/index";
import { useParams } from 'react-router-dom';

const Profile = () => {
  const {user} = useParams();
  return (
    <div className="container-profile">
      <h1 className='title'>{user}</h1>
      <Feed user={user}/>
    </div>
  );
}

export default Profile;
