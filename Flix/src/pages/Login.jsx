import './Login.css'
import image from './../images/google.svg'

const Login = () => {
  return (
    <main>

      <div className="login">
        <h1>Entrar</h1>
        <hr />
        <label for="email" >Email</label>
        <input type="text" id='email' placeholder='Insira seu endereço de email'/>
        <label for="senha" >Senha</label>
        <input type="text" id='senha' placeholder='Insira sua senha' />
        <div className='buttons'>
          <button>Entrar</button>
          <button><img src={image} alt="" srcset="" />Continuar com o Google</button>
        </div>
        <hr />
        <p>Novo Usuário?</p>
        <p><a href="">Criar nova conta</a></p>
      </div>
    </main>
  )
}

export default Login