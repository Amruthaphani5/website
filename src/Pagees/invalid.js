


import React from 'react'
import { useNavigate } from 'react-router-dom'


function Invalidscreen() {
  const navigate=useNavigate()
const changing = ()=>{
  navigate("/")
}

  return (
    <div>
      <p>Invalidscreen</p>
      <button onClick={changing}>Back to Home page</button>
    </div>
  )
}

export default Invalidscreen
