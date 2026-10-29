import React, { useState } from 'react'
import { useEffect } from 'react'
import './Serach.css'

const Meal = () => {
    const [mealData, setMealData] = useState([]);
    const [area , setArea] = useState('Chinese');
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        const fetchDataFromAPI = async () => {
            const api = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`);
            const data = await api.json();
            console.log(data.meals);

            setMealData(data.meals);
        };
        fetchDataFromAPI();
    }, [area])

    const handleInputChange = async(e) => {
        e.preventDefault();
        setInputValue(e.target.value);
        const api = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`);
        const data = await api.json();
        console.log(data.meals);
        setMealData(data.meals);
        setInputValue('');
      
    }


    return (
        <>
            <div className="my-3" style={{ width: "1000px", margin: "auto" }}>
                <div className="mx-auto text-center">
                    <button 
                     onClick={() => setArea("Chinese")}
                        className="btn-solid btn-styled theme-primary mx-3 ">Chinese</button>
                    <button 
                     onClick={() => setArea("India")}
                        className="btn-solid btn-styled theme-accent mx-3">Indian</button>
                    <button 
                     onClick={() => setArea("Canadian")}
                        className="btn-solid btn-styled theme-success mx-3">Canadian</button>
                    <button 
                     onClick={() => setArea("Japanese")}
                        className="btn-solid btn-styled theme-warning mx-3">Japanese</button>
                    <button 
                    onClick={() => setArea("Thai")}
                        className="btn-solid btn-styled theme-info mx-3">Thai</button>
                    <button 
                    onClick={() => setArea("British")}
                        className="btn-solid btn-styled theme-inverse mx-3">British</button>
                    <button 
                    onClick={() => setArea("Russian")}
                        className="btn-solid btn-styled theme-secondary mx-3">Russian</button>
                </div>
            </div>

           <form className="text-center" style={{marginTop:"2rem"}} onSubmit={handleInputChange}>
            <input type = "text" placeholder="Search for a meal..." onChange={(e)=>setInputValue(e.target.value)} />
           </form>


            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
                {mealData.map((meal) => (
                    <div key={meal.idMeal}>
                        <img src={meal.strMealThumb} alt={meal.strMeal} style={{ width: '220px', borderRadius: '10px', border: '2px solid #ccc' }} />
                        <h5>{meal.strMeal}</h5>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Meal
