import { useState } from "react"
import { updateEmail } from "firebase/auth"
import { auth } from '../firebase'


import "./EmailModal.css"

const EmailModal = (props) => {

  const [email, setEmail] = useState('')

  const cancel = () => {
    props.cancelChange()
  }

  const onEmailUpdate = (event) => {
    event.preventDefault()

    updateEmail(auth.currentUser, email)
      .then(() => {
        alert("E-mail alterado com sucesso.")
        props.cancelChange()
      })
  }

  return (
    <main>
      <div className="email-modal">
        <h1>Trocar Email</h1>
        <div className="email-modal-inputs">
          <form>
            <div>
              <label htmlFor="endereco-email">Email</label>
              <input type="email" id="email" placeholder="meuemail@gmail.com" onChange={(event) => setEmail(event.target.value)} />
            </div>
          </form>
        </div>
        <div className="buttons">
          <button onClick={onEmailUpdate}>Confirmar</button>
          <button onClick={cancel}>Cancelar</button>
        </div>
      </div>
    </main>
  )
}

export default EmailModal