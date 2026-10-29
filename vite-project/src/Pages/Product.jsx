import React from 'react'
import { Link } from 'react-router-dom'

const Product = () => {

  const arr = [
    { id: "REACT001", course: "React", price: 1000, duration: "5 months" },
    { id: "NODE98", course: "Node", price: 2000, duration: "5 months" },
    { id: "MONOGO002", course: "MongoDB", price: 3000, duration: "5 months" },
    { id: "EXPRESS102", course: "Express", price: 4000, duration: "5 months" },
    { id: "JS012", course: "JavaScript", price: 5000, duration: "5 months" }
  ]


  return (
    <div>
      <h1>Our product</h1>
      <ul>
        {arr.map((data) => (
          <div key={data.id}>
            <li>
              <Link to={`/course/${data.id}`}> {data.course}</Link>{" "}
            </li>
          </div>
        ))}
      </ul>
    </div>
  )
}

export default Product
