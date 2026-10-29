import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

const FetchDataAPI = () => {
  const [APIdata, SetAPIdata] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos");
      const data = await response.json();
      SetAPIdata(data);
      console.log(data);


    };
    fetchData();

  }, [])
  return (
    <div>
      {APIdata.map((data) => (
        <div key={data.id}
          style={{
            backgroundColor: "blue",
            color: "white",
            margin: "10px",
            padding: "10px",
            borderRadius: "10px"
          }}>
          <h3>{data.title}</h3>
        </div>
      ))}
    </div>
  );
}


export default FetchDataAPI 
