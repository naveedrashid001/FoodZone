import React, { useState, useEffect } from 'react';
import './MainBody.css';
import Card from './Card';

// import axios from 'axios';


function Body() {
  const [foodData, setFoodData] = useState([]);

  // Fetch data from the server
  useEffect(() => {
    // Using fetch (or you can use Axios)
    fetch('http://localhost:9000')
      .then((response) => response.json())
      .then((data) => setFoodData(data))
      .catch((error) => console.error('Error fetching data:', error));

    // If you're using axios
    // axios.get('http://localhost:9000')
    //   .then((response) => setFoodData(response.data))
    //   .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className='main'>
      <div className='AllCard'>
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
    </div>
  );
}

export default Body;
