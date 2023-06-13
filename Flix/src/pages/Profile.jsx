import { FiTrash2 } from 'react-icons/fi'
import { BsFillPencilFill } from 'react-icons/bs'
import './Profile.css'
import { Link } from 'react-router-dom'

function Profile({ name, profiles, setProfiles, key }) {
  function deleteProfile() {
    setProfiles(profiles.filter(elem => elem != name))
  }


  return (

    <div className='btn-profile'>
      <Link to="/home" className='profile'>
        {name}
      </Link>
      <div>
        {/* <button>
          <BsFillPencilFill />
        </button> */}

        <button onClick={() => deleteProfile()}>
          <FiTrash2 />
        </button>
      </div>
    </div>
  )
}

export default Profile