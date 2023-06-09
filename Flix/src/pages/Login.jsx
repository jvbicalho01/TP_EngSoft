import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import { auth, provider } from '../firebase'

import image from './../images/google.svg'

import './Login.css'

const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onLogin = (e) => {
    e.preventDefault()
    
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user
        navigate("/home")
        console.log(user)
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        console.log(errorCode, errorMessage)
        alert(errorCode, errorMessage)
      })
  }

  const onGoogleAuth = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user
        navigate("/home")
        console.log(user)
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code
        const errorMessage = error.message
        console.log(errorCode, errorMessage)
        alert(errorCode, errorMessage)
    })
  }

  return (
    <main>
      <div className="login">
        <h1>Entrar</h1>
        <hr />
        <div className="login_inputs">
          <form>
          <div>
            <label htmlFor="endereco-email">Email</label>
            <input type="email" id="email" required placeholder='Insira seu endereço de email' onChange={(e)=>setEmail(e.target.value)}/>
          </div>
          <div>
            <label htmlFor="senha">Senha</label>
            <input type="password" id="senha" required placeholder='Insira sua senha' onChange={(e)=>setPassword(e.target.value)}/>
          </div>
          </form>
        </div>
        <div className='buttons'>
          <button onClick={onLogin}>Entrar</button>
          <button onClick={onGoogleAuth}><img src={image}/>Continuar com o Google</button>
        </div>
        <hr />
        <p>Novo Usuário?</p>
        <Link to='/cadastro'><p>Criar nova conta</p></Link>
      </div>
    </main>
  )
}

export default Login