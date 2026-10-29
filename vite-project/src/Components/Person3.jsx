import React from 'react'

const Person3 = ({name,age,panCard,price}) => {
    
  return (
    <div style={{border:"2px solid black", width:"400px", margin:"20px auto", padding:"20px"}}>
      <h1>Name : {name}</h1>
      <p>{age > 18 ? "You can drive" : "You cannot drive"}</p>
      <p>{panCard == true ? <h1>You can open a bank account</h1> : <h1>You cannot open a bank account</h1>}</p>
      <h2>{(price == 100) && <h2>You can open</h2>}</h2>
    </div>
  )
}

export default Person3
