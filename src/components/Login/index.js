import './index.css';

const Login = () => {
  return (
    <div className="login anime-left">
      <h1 className='title'>Login</h1>
      <div className='form'>
        <label for='user'>Usuário</label>
        <input type='text' name='user' id='user' className='form-input'/>

        <label for='user'>Usuário</label>
        <input type='text' name='user' id='user' className='form-input'/>

        <button className='form-btn'>Entrar</button>
      </div>
    </div>
  )
}
  
export default Login;