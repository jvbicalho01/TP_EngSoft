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
    <nav id='navbar'>
      <h2>
        <Link to="/home"><BiCameraMovie /> Flix</Link>
      </h2>
      <button onClick={handleLogout} id='logoutBtn'>Logout</button>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder='Busque um filme'
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <button type='submit'>
          <BiSearchAlt2 />
        </button>
      </form>
    </nav>
  )
}

export default Navbar