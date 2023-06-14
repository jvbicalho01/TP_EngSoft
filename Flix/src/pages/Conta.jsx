import { useState, useEffect } from 'react'

import { auth } from '../firebase'

import EmailModal from '../components/EmailModal'
import PasswordModal from '../components/PasswordModal'
import { useNavigate } from 'react-router-dom'

import "./Conta.css"

const Conta = () => {

  const [email, setEmail] = useState('')

  const setCurrentUser = () => {
    const currentUser = auth.currentUser

    setEmail(currentUser.email)
  }

  const [displayEmailChange, setDisplayEmailChange] = useState(false)
  const handleDisplayEmailChange = (e) => {
    e.preventDefault()
    setDisplayEmailChange(true)
  }

  const [displayPasswordChange, setDisplayPasswordChange] = useState(false)
  const handleDisplayPasswordChange = (e) => {
    e.preventDefault();
    setDisplayPasswordChange(true)
  }

  const cancelEmailChange = () => {
    setDisplayEmailChange(false)
  }

  const cancelPasswordChange = () => {
    setDisplayPasswordChange(false)
  }

  useEffect(() => {
    setCurrentUser()
  },)

  const navigate = useNavigate();

  return (
    <main>
      <div className="conta">
        <h1>Minha conta</h1>
        <div className="account-inputs">
          <form>
            <div>
              <label htmlFor="endereco-email">Email</label>
              <input type="email" id="email" placeholder="meuemail@gmail.com" value={email} disabled />
            </div>
            <div>
              <label htmlFor="senha">Senha</label>
              <input type="password" id="senha" value="********" disabled />
            </div>
          </form>
        </div>
        <div className="buttons">
          <button onClick={handleDisplayEmailChange}>Trocar Email</button>
          <button onClick={handleDisplayPasswordChange}>Trocar Senha</button>
          <button onClick={() => navigate("/")}>Cancelar Assinatura</button>
        </div>

        {displayEmailChange ?
          <div className="ModalEmail">
            <EmailModal cancelChange={cancelEmailChange} />
          </div> : null}

        {displayPasswordChange ?
          <div className="ModalPassword">
            <PasswordModal cancelChange={cancelPasswordChange} />
          </div> : null}
      </div>
    </main>

  )
}

export default Conta