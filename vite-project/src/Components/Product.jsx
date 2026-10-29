import React from 'react'

const Product = ({ name, price, color, RAM }) => {// Do not use props.name, props.price, props.color, props.RAM directly in the return statement. Instead, destructure the props object to extract the values and then use them in the return statement.

  return (
    <div>
      <h2>Product Details</h2>
      <p>name : {name}</p>
      <p>price : {price}</p>
      <p>color : {color}</p>
      <p>RAM : {RAM}</p>
    </div>
  )
}

export default Product
