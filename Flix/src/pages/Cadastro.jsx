import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase'

import './Cadastro.css'

const Cadastro = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [cardNumber, setCardNumber] = useState("")
  const [cardCVC, setCardCVC] = useState("")

  const onSubmit = async (event) => {
    event.preventDefault()
    
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user
        navigate("/")
        alert("Conta criada!")
        console.log(user)
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        console.log(errorCode, errorMessage)
        alert(errorCode, errorMessage)
      })
  }

  return (
    <main>
      <div className="cadastro">
        <h1>Bem vindo(a) ao Flix</h1>
        <h2>Aproveite o primeiro mês grátis</h2>
        <div className="cadastro_inputs">
          <form>
            <div>
              <label htmlFor="endereco-email">Qual seu email?</label>
              <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} required placeholder='ex: fulano@abc.com' />
            </div>
            <div>
              <label htmlFor="senha">Defina uma senha:</label>
              <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} required placeholder='Nova senha' />
            </div>
            <div>
              <label htmlFor="cartao-numero">Número do cartão:</label>
              <input type="text" required placeholder='0000 0000 0000 0000' maxLength={16} value={cardNumber} onChange={(event) => setCardNumber(event.target.value)}/>
            </div>
            <div>
              <label htmlFor="validade">Validade (mês/ano):</label>
              <input type="text" required placeholder='MM/YY' />
            </div>
            <div>
              <label htmlFor="cod-seguranca">Código de Segurança:</label>
              <input type="text" required placeholder='000' maxLength={3} onChange={(event) => setCardCVC(event.target.value)}/>
            </div>
          </form>
        </div>
        <button type="submit" onClick={onSubmit}>Cadastrar</button>
        <p>Se não pretende criar uma nova conta, você pode <Link to='/'>fazer login com outro e-mail.</Link></p>
      </div>
    </main>
  )
}

export default Cadastro