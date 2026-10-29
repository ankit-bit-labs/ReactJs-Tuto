import React from 'react'
import People from './People'

const PanchaGov = ({money}) => {
  return (
    <div>
      <h1>This is PanchaGov component</h1>
      <People money={money}/>
    </div>
  )
}

export default PanchaGov
