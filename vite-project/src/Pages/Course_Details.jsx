import React from 'react'
import { useParams , Link , useLocation} from 'react-router-dom'

const Course_Details = () => {
    const arr = [
    { id: "REACT001", course: "React", price: 1000, duration: "5 months" },
    { id: "NODE98", course: "Node", price: 2000, duration: "5 months" },
    { id: "MONOGO002", course: "MongoDB", price: 3000, duration: "5 months" },
    { id: "EXPRESS102", course: "Express", price: 4000, duration: "5 months" },
    { id: "JS012", course: "JavaScript", price: 5000, duration: "5 months" }
  ]
  console.log(useLocation());
 
    // console.log(useParams())
    const{id} = useParams()
     const location = useLocation();


    const course_detail = arr.filter((data)=> data.id == id)
    // console.log(course_detail)

  return (
   <>
    <div>
      <h1>WELLCOME AGAIN</h1>
      <h2>course id  = {id}</h2>
      <p>course name = {course_detail[0].course}</p>

      {location.pathname != "/course/REACT001" && (
        <>
      <p>Course Duration = {course_detail[0].duration}</p>
      <p>Course Price ={course_detail[0].price}</p>
      </>
     )}


    </div>
    <button><Link to ={`/course`} style={{textDecoration:"none",color:"black"}}>All courses</Link></button>
   </> 
  )
}

export default Course_Details
