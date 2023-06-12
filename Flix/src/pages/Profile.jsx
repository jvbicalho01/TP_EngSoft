import { FiTrash2 } from 'react-icons/fi'
import { BsFillPencilFill } from 'react-icons/bs'
import './Profile.css'

function Profile(props) {
  return (
    <div className='btn-profile'>
      {props.name} 
      <div>
        <BsFillPencilFill /><FiTrash2 />
      </div>
    </div>
  )
}

export default Profile