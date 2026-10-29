import React, { useEffect, useState } from 'react'

const UseEffect = () => {

   const[counter,setCounter] = useState(0);
   useEffect (()=>{
    document.title = counter
     
       console.log("Run.....................")
      
   },[counter])
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={()=>setCounter(counter+1)}>Increse</button>
      <button onClick={()=>setCounter(counter-1)}>Decreese</button>
    </div>
  )
}

export default UseEffect
