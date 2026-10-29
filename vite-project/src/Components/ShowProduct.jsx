import React from 'react'

const ShowProduct = () => {

    let products = [
        {id:1, name:"Iphone", price:1000, color:"Black", RAM:"128GB"},
        {id:2, name:"Samsung Galaxy", price:800, color:"White", RAM:"256GB"},
        {id:3, name:"Google Pixel", price:700, color:"Blue", RAM:"128GB"},
        {id:4, name:"OnePlus", price:600, color:"Red", RAM:"128GB"},
        {id:5, name:"Nokia", price:500, color:"Green", RAM:"64GB"},
    ]

  return (
    <div>
     {products.map((data) => (
        <div key = {data.id}>
            <h2>Name : {data.name}</h2>
            <p>Price : {data.price}</p>
            <p>Color : {data.color}</p>
            <p>RAM : {data.RAM}</p>
        </div>

     ))}
    </div>
  )
}

export default ShowProduct
