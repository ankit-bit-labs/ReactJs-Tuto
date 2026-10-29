import React from 'react'
import Person from './Components/Person'
import Superman from './Components/Superman'
import Product from './Components/Product'
import Person2 from './Components/Person2'
import Person3 from './Components/Person3'
import Laptop from './Components/Laptop'
import Events from './Components/Events'
import Count from './Components/Count'
import ShowProduct from './Components/ShowProduct'
import Fillter from './Components/Fillter'


const Home = () => {
  return (
    <div>
       <>
    <div>
    
      {/* <h2>Add a new thing</h2>
    <Person/>
    <Superman/> */}
      {/* <Product name="Iphone" price={1000} color="Black" RAM="128GB" />
      <Product name="Samsung Galaxy" price={800} color="White" RAM="256GB" /> */}   
      {/* <Product name="Google Pixel" price={700} color="Blue" RAM="128GB" /> */} 
     </div>
     <div>
      {/* <Person2 name = "Thor" age = {25} salary = {50000} />
      <Person2 name = "Batman" age = {25} salary = {80000} />
      <Person2 name = "Superman" age = {25} salary = {100000} />
      <Person2 name = "Spiderman" age = {25} salary = {70000} />
      <Person2 name = "Ironman" age = {25} salary = {90000} />
      <Person2 name = "Hulk" age = {25} salary = {60000} ram = "ram"/>   */}
     </div>
     <div>
      {/* <Person3 name = "John Doe" age = {54} panCard = {true} price = {100} /> */}
     </div>
     <div>
       {/* <Laptop Brand = "Dell" Model = "XPS 13" Price = {1200} RAM = "16GB" Storage = "512GB SSD" />
       <Laptop Brand = "Apple" Model = "MacBook Pro" Price = {2000} RAM = "16GB" Storage = "1TB SSD" /> 
       <Laptop Brand = "HP" Model = "Spectre x360" Price = {1500} RAM = "16GB" Storage = "512GB SSD" /> */}
     </div>
     <div>
       {/* <Events />  */}
     </div>
     <div>
       {/* <Count /> */}
     </div>
     <div>
        <ShowProduct /> 
     </div>
     <div>
      <Fillter />
     </div>
    </>
    </div>
  )
}

export default Home
