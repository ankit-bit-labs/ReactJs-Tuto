import React, { useState } from 'react'
import { movies } from './data.js'

const Movie = () => {
  const [moviesData, setMoviesData] = useState(movies);
  const filterByCatagory = (cat) =>{
    setMoviesData(movies.filter((data)=>data.category == cat))
  }

  return (
    <>
      <div className="my-3" style={{width:"1000px", margin:"auto"}}>
        <div className="mx-auto text-center">
        <button onClick={()=> setMoviesData(movies)}
        className="btn-solid btn-styled theme-primary mx-3 ">All</button>
        <button onClick={()=> filterByCatagory("Action")}
        className="btn-solid btn-styled theme-accent mx-3">Action</button>
        <button onClick={()=> filterByCatagory("Thriller")}
        className="btn-solid btn-styled theme-success mx-3">Thriller</button>
        <button onClick={()=> filterByCatagory("Animation")}
        className="btn-solid btn-styled theme-warning mx-3">Animation</button>
        <button onClick={()=> filterByCatagory("Horror")}
        className="btn-solid btn-styled theme-info mx-3">Horror</button>
        <button onClick={()=> filterByCatagory("Drama")}
        className="btn-solid btn-styled theme-inverse mx-3">Drama</button>
        <button onClick={()=> filterByCatagory("Sci-Fi")}
        className="btn-solid btn-styled theme-secondary mx-3">Sci-Fi</button>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "2rem",
          width: "1300px",
          maxWidth: "auto",
          marginTop: "1.5rem",
          margin: "auto",
          marginTop: "3.5rem",
          
        }}

      >
        {moviesData.map((movie) => (
          <div key={movie.id} style={{ maxWidth: "280px", textAlign: "center" }}>
            <div style={{ padding: "10px" }} className='hoverEffect'>
              <img src={movie.poster_path} alt="" style={{
                width: "200px",
                height: "280px",
                borderRadius: "10px",
                border: "1px solid yellow"
              }} />
            </div>
            <div className="text-center" style={{marginLeft:"5.9rem"}}>
            <h5>{movie.title}</h5>
            <p>{movie.release_date}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Movie;
