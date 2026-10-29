import React from 'react'
import BlockGov from './BlockGov'

const DistrictGov = ({money}) => {
  return (
    <div>
      <h1>This is DistrictGov Component</h1>
      <BlockGov money={money}/>
    </div>
  )
}

export default DistrictGov
