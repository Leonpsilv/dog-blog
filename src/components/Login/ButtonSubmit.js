import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

const ButtonSubmit = ({
    text,
    className,
    id,
    data
}) => {
  const {userLogin, userRegister, error, loading} = useContext(UserContext);
  const userData = data;

  function handleSubmit (userData) {
    if (id === 'post') {
      console.log('botao postar foto');
      return;
    }

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
    <>
    {loading ? (
      <button
        className={className}
        id={id}
        disabled
      >
        Carregando...
      </button>
      ):(
      <button
        className={className}
        id={id}
        onClick={() => handleSubmit(userData)}
      >
        {text}
      </button>
    )}

    {error && <p className='msg-error'>{error}</p>}
    </>
  )
};

export default ButtonSubmit;