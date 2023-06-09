import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi"
import { auth } from '../firebase'
import { signOut } from 'firebase/auth'


import "./Navbar.css"

const Navbar = () => {

  const [search, setSearch] = useState("")
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if(!search){
      return
    }

    navigate(`/search?q=${search}`)
    setSearch("")
  }

  const handleLogout = () => {               
    signOut(auth).then(() => {
      navigate("/");
      console.log("Signed out successfully")
    }).catch((error) => {
      const errorCode = error.code
      const errorMessage = error.message
      console.log(errorCode, errorMessage)
      alert(errorCode, errorMessage)
    });
}

  return (
    <nav className='navbar'>
      <h2>
        <Link to="/home"><BiCameraMovie /> Flix</Link>
      </h2>
      <form onSubmit={handleSubmit}>
        <button type='submit'>
          <BiSearchAlt2 />
        </button>
        <input
          type="text"
          placeholder='Busque um filme'
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
      </form>
      <button onClick={handleLogout} id='logoutBtn'>Logout</button>
    </nav>
  )
}

export default Navbar