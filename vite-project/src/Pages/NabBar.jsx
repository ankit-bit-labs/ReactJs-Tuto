import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './NavBar.css'

const NabBar = () => {

  const [isLoggedin, setIsLoggedIn] = useState(false)
  const navigate = useNavigate()

  const logIn = () => {
    setIsLoggedIn(true)
    navigate('/dasboard')
  }

  const Logout = () => {
    setIsLoggedIn(false);
  }

  return (
    <div className='Nav'>
      <Link to={"/"} className="left links" >WDM</Link>
      <div className='right'>

        {isLoggedin && (
        <>
          <Link className='links' to={'/meal'}>Meal</Link>
          <Link className="links" to={'/course'}>Product</Link>
          <Link className='links' to={'/dasboard'}>Dasboard</Link>
          <Link className='links' to={'/profile'}>Profile</Link>
          <Link className="links" style={{ fontWeight: "bold", backgroundColor: "gray" }}
          onClick={Logout}
          >LogOut</Link>
        </>
        )}


        {!isLoggedin && (
        <>
          <Link className="links" to={'/'}>Home</Link>
          <Link className="links" to={'/team'}>Team</Link>
          <Link className="links" to={'/contact'}>Contact</Link>
          <Link className="links" style={{ fontWeight: "bold", backgroundColor: "gray" }}
          onClick={logIn}
          >Login</Link>
        </>
        )}


      </div>
    </div>
  )
}

export default NabBar
