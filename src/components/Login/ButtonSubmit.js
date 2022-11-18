import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

const ButtonSubmit = ({
    text,
    className,
    id,
    data // data
}) => {
  const {userLogin, userRegister, error, loading} = useContext(UserContext);

  function handleSubmit (data) {
    if (id === 'login'){
      const {username, password} = data
      if(!username.validate() || !password.validate()) return;
      userLogin(username.value, password.value);
    }

    if (id === 'register') {
      const {username, password, email} = data
      if(!username.validate() || !password.validate() || !email.validate()) return;
      userRegister(username.value, password.value, email.value);
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
        onClick={() => handleSubmit(data)}
      >
        {text}
      </button>
    )}

    {error && <p className='msg-error'>{error}</p>}
    </>
  )
};

export default ButtonSubmit;