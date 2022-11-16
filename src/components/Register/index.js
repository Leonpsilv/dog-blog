// css from ../Login/index.css
import { useState } from 'react';
import Input from '../Login/Input';
import ButtonSubmit from '../Login/ButtonSubmit';

const Register = () => {
  const [user, setUser] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  return (
    <div className="login anime-left">
      <section className='logo'></section>
      <div className='form'>
        <h1 className='title'>Cadastre-se</h1>
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
          
          <label htmlFor='email'>Email</label>
          <Input
            type='text'
            name='email'
            id='email'
            className='form-input'
            placeholder='digite seu email'
            handleChage={({target}) => {setEmail(target.value)}}
            value={email}
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
            text="Cadastrar"
            id="register"
            data={{user, password, email}}
          /> 
      </div>
    </div>
  );
}

export default Register;