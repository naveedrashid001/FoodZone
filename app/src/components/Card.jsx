import React from 'react';
import './Card.css';

function Card({ name, price, text, image }) {
  const imageUrl = `http://localhost:9000${image}`;
  // console.log({name})
  return (
    <div className="custom-card">
      <div className="row g-0 align-items-center">
        {/* Image takes 35% width */}
        <div className="col-4">
          <img src={imageUrl} alt={name} style={{ width: '100%', borderRadius: '8px' }} />
        </div>

        {/* Content on the right side (heading, description, price) */}
        <div className="col-8 d-flex flex-column justify-content-between p-2">
          <div>
            <h3 className="mb-0">{name}</h3>
          </div>
          <p className="card-text">{text}</p>

          {/* Button at the bottom left */}
          <button className="btn btn-primary btn-sm">${price}</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
