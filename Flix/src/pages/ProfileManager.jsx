import Profile from './Profile'
import './ProfileManager.css'
import { Link } from "react-router-dom";
import Plus from './../images/Plus.svg'
import { useNavigate } from 'react-router-dom';
import Modal from './../components/ProfileModal'
import { useState } from 'react';

function ProfileManager() {
  const [profiles, setProfiles] = useState(["Perfil 1"]);
  const [openModal, setOpenModal] = useState(false);

  return (
    <main>
      <div className="profileManager">
        <h1>Quem está assistindo?</h1>
        <div className='profiles'>
          {profiles.map((elem) => (
            <Profile name={elem} key={elem} setProfiles={setProfiles} profiles={profiles}/>
          ))}
        </div>
        <button onClick={() => setOpenModal(true)}>
          <img src={Plus} alt="" srcset="" />
        </button>
        <Modal open={openModal} setOpen={setOpenModal} profiles={profiles} setProfiles={setProfiles} />
      </div>
    </main>
  )
}

export default ProfileManager