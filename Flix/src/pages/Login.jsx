import './Login.css'
import image from './../images/google.svg'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <main>

      <div className="login">
        <h1>Entrar</h1>
        <hr />
        <div className="login_inputs">
          <div>
            <label for="email" >Email</label>
            <input type="text" id='email' placeholder='Insira seu endereço de email' />
          </div>
          <div>
            <label for="senha" >Senha</label>
            <input type="text" id='senha' placeholder='Insira sua senha' />
          </div>
        </div>
        <div className='buttons'>
          <Link to='/home'><button>Entrar</button></Link>
          <button><img src={image} alt="" srcset="" />Continuar com o Google</button>
        </div>
        <hr />
        <p>Novo Usuário?</p>
        <Link to='/cadastro'><p>Criar nova conta</p></Link>
      </div>
    </main>
  )
}

export default Login