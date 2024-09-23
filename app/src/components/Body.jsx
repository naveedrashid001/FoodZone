import React, { useState, useEffect } from 'react';
import './MainBody.css';
import Card from './Card';

// import axios from 'axios';


function Body() {
  const [foodData, setFoodData] = useState([]);
  const [loading, setLoading] = useState(true);


  // Fetch data from the server
  useEffect(() => {
    fetch('http://localhost:9000')
      .then((response) => response.json())
      .then((data) => {
        setFoodData(data);
        setLoading(false); // Add this line
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false); // Add this line to handle errors
      });
  
      // console.log(foodData);

    // If you're using axios
    // axios.get('http://localhost:9000')
    //   .then((response) => setFoodData(response.data))
    //   .catch((error) => console.error('Error fetching data:', error));
  }, []);
  console.log(foodData);

  return (
    <div className='main'>
      {loading ? ( // Use a conditional operator
        <div className='text-white'>Loading...</div>
      ) : (
        <div className='AllCard mt-3'>
          {foodData.map((item, index) => (
            <Card
              key={index}
              name={item.name}
              price={item.price}
              text={item.text}
              image={item.image}
              type={item.type}
            />
          ))}
        </div>
      )}
    </div>
  );
  
}

export default Body;
