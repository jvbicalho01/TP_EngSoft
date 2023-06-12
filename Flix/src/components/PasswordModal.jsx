import { useState } from "react"
import { updatePassword } from "firebase/auth"
import { auth } from '../firebase'


import "./PasswordModal.css"

const PasswordModal = (props) => {

  const [newPassword, setNewPassword] = useState("")
  const [confirmNewPassword, setConfirmNewPassword] = useState("")

  const cancel = () => {
    props.cancelChange()
  }

  const onPasswordUpdate = (event) => {
    event.preventDefault()

    if (newPassword === confirmNewPassword) {
      updatePassword(auth.currentUser, newPassword)
      .then(() => {
        alert("Senha alterada com sucesso.")
        props.cancelChange()
      })
    } else {
      alert("As senhas não coincidem.")
    }
  }

  return (
    <main>
      <div className="password-modal">
        <h1>Trocar Senha</h1>
        <div className="password-modal-inputs">
          <form>
            <div>
              <label htmlFor="nova-senha">Nova senha</label>
              <input type="password" id="new-password" required placeholder="Minha nova senha" onChange={(event) => setNewPassword(event.target.value)} />
            </div>
            <div>
              <label htmlFor="confirma-senha">Confirme sua nova senha</label>
              <input type="password" id="confirm-password" required placeholder="Confirme sua nova senha" onChange={(event) => setConfirmNewPassword(event.target.value)} />
            </div>
          </form>
        </div>
        <div className="buttons">
          <button onClick={onPasswordUpdate}>Confirmar</button>
          <button onClick={cancel}>Cancelar</button>
        </div>
      </div>
    </main>
  )
}

export default PasswordModal