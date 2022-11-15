import './index.css';
import { useState, useContext} from 'react';

import Input from './Input';
import ButtonSubmit from './ButtonSubmit';
import ButtonRedirect from './ButtonRedirect';
import { Link } from 'react-router-dom';

const Login = () => {
  const [user, setUser] = useState();
  const [password, setPassword] = useState();

  return (
    <div className="login anime-left">
      <div className='logo'></div>
        <div className='form'>
          <h1 className='title'>Login</h1>

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

          <ButtonSubmit
            className='form-btn'
            text="Entrar"
            id="login"
            data={{user, password}}
          /> 
          
          <Link to='/login/perdeu' className='lost-password'>Esqueceu a senha? </Link>

          <div className='register'>
            <h2 className='register-title'>Cadastre-se</h2>
            <p>Ainda não possui conta? Cadastre-se no site</p>
            <ButtonRedirect
              className='form-link'
              text="Cadastrar"
              id="register"
              url="/login/cadastrar"
            />
          </div>
        </div>
    </div>
  )
}
  
export default Login;