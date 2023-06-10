import { useState } from "react"

import "./PasswordModal.css"

const PasswordModal = (props) => {

  const [currentPassword, setCurrentPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmNewPassword, setConfirmNewPassword] = useState("")

  const cancel = () => {
    props.cancelChange()
  }

  return (
    <main>
      <div className="password-modal">
        <h1>Trocar Senha</h1>
        <div className="password-modal-inputs">
          <form>
            <div>
              <label htmlFor="senha-atual">Senha atual</label>
              <input type="password" id="senha-atual" placeholder="Minha senha" onChange={(e) => setCurrentPassword(e.target.value)} />
            </div>
            <div>
              <label htmlFor="nova-senha">Nova senha</label>
              <input type="password" id="new-password" placeholder="Minha nova senha" onChange={(e) => setNewPassword(e.target.value)} />
            </div>
            <div>
              <label htmlFor="confirma-senha">Confirme sua nova senha</label>
              <input type="password" id="confirm-password" placeholder="Confirme sua nova senha" onChange={(e) => setConfirmNewPassword(e.target.value)} />
            </div>
          </form>
        </div>
        <div className="buttons">
          <button >Confirmar</button>
          <button onClick={cancel}>Cancelar</button>
        </div>
      </div>
    </main>
  )
}

export default PasswordModal