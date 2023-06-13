import { useState } from 'react';
import './ProfileModal.css'

function ProfileModal({ open, setOpen, profiles, setProfiles }) {
  const [profileName, setProfileName] = useState("");

  function add() {
    setProfiles([...profiles, profileName]);
    setProfileName("");
  }

  

  if (!open) {
    return null;
  }
  return (
    <div className='overlay' onClick={() => (open = false)}>
      <div className='profileModal'>
        <div className='modalHeader'>
          <h3>Adicionar Perfil</h3>
        </div>
        <div className='modalBody'>
          <label htmlFor="profileName">Nome:</label>
          <input type="text" name="" id="profileName" onChange={(e) => setProfileName(e.target.value)} value={profileName} required />
          <div>
            <legend>Perfil Infantil:</legend>
            <fieldset>
              <div>
                <label htmlFor="sim">Sim</label>
                <input type="radio" name="escolha" id="" value="sim" />
              </div>
              <div>
                <label htmlFor="sim">Não</label>
                <input type="radio" name="escolha" id="" value="não" />
              </div>
            </fieldset>
          </div>
        </div>
        <div className='modalFooter'>
          <button className='btn-add' onClick={() => { add(); setOpen(false) }}>Adicionar</button>
          <button className='btn-cancel' onClick={() => setOpen(false)}>Cancelar</button>
        </div>
      </div>
    </div>
  )
}

export default ProfileModal