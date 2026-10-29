import React from 'react'
import './laptop.css'

const Laptop = ({Brand, Model, Price, RAM, Storage}) => {

//  const obj = {
//   backgroundColor: "lightgray",
//   padding: "20px",
//   margin: "20px auto",
//   border: "2px solid gray",
//   marginBottom: "20px",
//   marginRight: "20px",
//   width: "400px",
//   textAlign: "center"

//  }

  return (
    <div className="laptop-card">  
      <h2>{Brand} {Model}</h2>
      <p>Price: ${Price}</p>
      <p>RAM: {RAM}</p>
      <p>Storage: {Storage}</p>
    </div>
  )
}

export default Laptop
