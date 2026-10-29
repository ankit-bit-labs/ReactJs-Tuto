import React, { useState } from 'react'

const Count = () => {
 
const [counter, setCounter] = useState(10);


 const increse = () => {
    // counter++;
    setCounter(counter + 1);
    console.log(counter);
 }
 const decrese = () => {
    // counter--;
    setCounter(counter - 1);
    console.log(counter);
 }

  return (
    <div>
      <p>Count: {counter}</p>
      <button onClick={increse}>Increase</button>
      <button onClick={decrese}>Decrease</button>
    </div>
  )
}

export default Count
