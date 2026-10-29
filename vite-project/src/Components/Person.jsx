import React from 'react'

function Person() {

const name = "Ankit"
   const age = 34
   const person = {
    name: "Ankit",
    age: 34,
    address: "Delhi"
   }
   const product = {
    name: "Iphone",
    price: 1000,
    color: "Black"
   }

  return (
    <div>
       <>
    <div>
      App
      <h1>1+2
      </h1>
      <h3>{1 + 2}</h3>
      <h2>name = {person.name}</h2>
      <p>age = {person.age}</p>
      <p>address = {person.address}</p>
    </div>
    <div>
      <h2>Product Details</h2>
      <p>name = {product.name}</p>
      <p>price = {product.price}</p>
      <p>color = {product.color}</p>
      <p>Well</p>
    </div>
    </>
    </div>
  )
}

export default Person
