import React, { useState } from 'react'
import AdharContext from './AdharContext'

const AdharState = (props) => {

   const name="ankit";
   const Adhar = 10;
   const dollar = 36
   const[counter,setCounter] = useState(0)

  return (
   <AdharContext.Provider
    value ={{
        name,
        dollar,
        Adhar,
        counter,
        setCounter,
    }}
   
   >
    {props.children}
   </AdharContext.Provider>
  )
}

export default AdharState
