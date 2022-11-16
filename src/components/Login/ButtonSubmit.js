import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

const ButtonSubmit = ({
    text,
    className,
    id,
    data
}) => {
  const {userLogin, userRegister} = useContext(UserContext);
  const userData = data;

  function handleSubmit (userData) {
    if (!userData.user || !userData.password) return

    if (id === 'login'){
      userLogin(userData.user, userData.password);
    }

    if (id === 'register') {
      userRegister(userData.user, userData.password, userData.email);
    }
    return
  }

  return (
    <button
      className={className}
      id={id}
      onClick={() => handleSubmit(userData)}
    >
      {text}
    </button>
  )
};

export default ButtonSubmit;