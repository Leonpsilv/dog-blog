import Input from '../Login/Input';
import ButtonSubmit from '../Login/ButtonSubmit';
import useForm from '../../Hooks/useForm';

const Register = () => {
  const username = useForm();
  const password = useForm('password');
  const email = useForm('email');
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
            value={username.value}

            {...username}
          />
          
          <label htmlFor='email'>Email</label>
          <Input
            type='text'
            name='email'
            id='email'
            className='form-input'
            placeholder='digite seu email'
            value={email.value}

            {...email}
          />

          <label htmlFor='password'>Senha</label>
          <Input
            type='password'
            name='password'
            id='password'
            className='form-input'
            placeholder='digite sua senha'
            value={password.value}

            {...password}
          />

          <ButtonSubmit
            className='form-btn'
            text="Cadastrar"
            id="register"
            data={{username, password, email}}
          /> 
      </div>
    </div>
  );
}

export default Register;