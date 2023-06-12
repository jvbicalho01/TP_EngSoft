import Profile from './Profile'
import './ProfileManager.css'
import { Link } from "react-router-dom";

function ProfileManager() {
  let array = ["Perfil 1", "Perfil 2", "Infantil"];


  return (
    <main>
      <div className="profileManager">
        <h1>Quem está assistindo?</h1>
        <div className='profiles'>
          {array.map((elem) => (
            <Link key={elem} to="/home">
              <Profile  name={elem} />
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}

export default ProfileManager