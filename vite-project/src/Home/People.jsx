import React, { useContext } from 'react'
import AdharContext from '../Context/AdharContext'

const People = ({money}) => {

    console.log(useContext(AdharContext));
   const data = useContext(AdharContext);
  
   
  return (
    <div>
      <h1>This people component = {money}</h1>
      <p>Adhar = {data.Adhar}</p>
      <p>Counter = {data.counter}</p>
       <button onClick={() => data.setCounter(data.counter + 1)}>
        Increase
      </button>
    </div>
  )
}

export default People
