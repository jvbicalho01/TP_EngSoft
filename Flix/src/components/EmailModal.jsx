import { useState } from "react"

import "./EmailModal.css"

const EmailModal = (props) => {

  const [email, setEmail] = useState('')

  const cancel = () =>{
    props.cancelChange()
  }

  return (
    <main>
      <div className="email-modal">
        <h1>Trocar Email</h1>
        <div className="email-modal-inputs">
          <form>
            <div>
              <label htmlFor="endereco-email">Email</label>
              <input type="email" id="email" placeholder="meuemail@gmail.com" onChange={(e)=>setEmail(e.target.value)} />
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

export default EmailModal