import React from 'react'
import { useNavigate } from 'react-router-dom'

const Team = () => {
  const navigate = useNavigate();

  const home = () =>{
    navigate("/");
  }

  const goBack = () => {
    navigate(-1)
  }


  return (
    <div>
      <h1>Our team</h1>
      <button onClick={home}>Home</button>
      <button onClick={goBack}>Go back</button>
    </div>
  )
}

export default Team
