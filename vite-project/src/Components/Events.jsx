import React from 'react'

const Events = () => {
const handleClick = () => {
  alert("Button clicked!");
}
const addition = (a) => {
  alert(a + 10);
}

  return (
    <div>
      <h1>WEare leraning Events</h1>
      <button onMouseOver={handleClick}>Click here</button>
      <button onClick={() => addition(2)}>Button 2</button>
    </div>
  )
}

export default Events
