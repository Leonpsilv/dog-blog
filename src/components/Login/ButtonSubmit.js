import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

const ButtonSubmit = ({
    text,
    className,
    id,
    data
}) => {
  const {userLogin} = useContext(UserContext);
  const userData = data;

  function handleSubmit (login) {
    if (id === 'login'){
      if (!login.user || !login.password) return

      userLogin(login.user, login.password)
    }
    if (id === 'register') {
      console.log('register');
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