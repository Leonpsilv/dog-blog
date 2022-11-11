import './index.css';
import { useState, useContext} from 'react';
import { UserContext } from '../../context/UserContext';

import Input from './Input';

const Login = () => {
  const [user, setUser] = useState();
  const [password, setPassword] = useState();

  const {userLogin} = useContext(UserContext);

  async function handleSubmit (event) {
    event.preventDefault();
    if(!user || !password) return;
    userLogin(user, password);
  }

  return (
    <div className="login anime-left">
      <h1 className='title'>Login</h1>
      <div className='form'>

        <label htmlFor='user'>Usuário</label>
        <Input
          type='text'
          name='user'
          id='user'
          className='form-input'
          placeholder='digite seu usuário'
          handleChage={({target}) => {setUser(target.value)}}
          value={user}
        />

        <label htmlFor='password'>Senha</label>
        <Input
          type='password'
          name='password'
          id='password'
          className='form-input'
          placeholder='digite sua senha'
          handleChage={({target}) => {setPassword(target.value)}}
          value={password}
        />


        <button
          className='form-btn'
          onClick={handleSubmit}
        >
          Entrar
        </button>

      </div>
    </div>
  )
}
  
export default Login;