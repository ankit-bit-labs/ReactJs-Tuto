import React from 'react'

const Person2 = ({name,age,salary,ram}) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Salary: {salary}</p>
      <p>RAM: {ram}</p>
    </div>
  )
}

export default Person2
