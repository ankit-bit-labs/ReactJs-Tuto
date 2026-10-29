import React, { useEffect, useState } from 'react'
import Movie from './movieZone/Movie';
import UseEffect from './Components/UseEffect';
import FetchDataAPI from './Components/FetchDataAPI';
import Form from './Components/Form';
import MultipleInputHandling from './Components/MultipleInputHandling';
import Meal from './Food_Recipe/Meal';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom' 
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Product from './Pages/Product';
import Team from './Pages/Team';
import Course_Details from './Pages/Course_Details';
import NabBar from './Pages/NabBar';
import Dasboard from './Pages/Dasboard';
import Profile from './Pages/Profile';
import IndianGov from './Home/IndianGov';
import StateGov from './Home/StateGov';
import DistrictGov from './Home/DistrictGov';
import BlockGov from './Home/BlockGov';
import PanchaGov from './Home/PanchaGov';
import People from './Home/People';


const App = () => {
  const money =1000;


  return (
    <div>
      {/* <Form /> */}
      {/* <MultipleInputHandling /> */}
      {/* <Meal /> */}

     <Router>
      <NabBar/>
      <Routes>
       
        <Route path='/' element={<IndianGov money={money}/>} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/team' element={<Team />} />
        <Route path='/course' element={<Product />} />
        <Route path='/course/:id' element={<Course_Details />} />
        <Route path='/meal' element={<Meal/>}/>
        <Route path='/dasboard'element={<Dasboard/>}/>
        <Route path='/profile' element={<Profile/>}/>
      </Routes>
     </Router>

       
    </div>
  );
};

export default App;

