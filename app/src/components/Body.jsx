import React, { useState, useEffect } from 'react';
import './MainBody.css';
import Card from './Card';

function Body({ searchTerm, selectedCategory }) {
  const [foodData, setFoodData] = useState([]);
  const [loading, setLoading] = useState(true);

  // console.log(foodData);


  useEffect(() => {
    fetch('http://localhost:9000')
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setFoodData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  // Filter the food data based on search term and selected category
  const filteredData = foodData.filter((item) => {
    const matchesSearchTerm = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || item.type === selectedCategory;
    return matchesSearchTerm && matchesCategory;
  });

  return (
    <>
    <div className='main'>
      {loading ? (
        <div className='text-white'>Loading...</div>
      ) : (
        <div className='AllCard mt-3'>
          {filteredData.map((item, index) => (
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

</>
      );
}

export default Body;
