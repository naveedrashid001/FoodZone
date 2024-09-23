import React from 'react';
import logo from "../images/logo.svg";

function Header() {
  return (
    <div className="container-fluid">
      {/* Row for logo and input */}
      <div className="row align-items-center" style={{ padding: '20px 10px', backgroundColor: '#323334' }}>
        {/* Logo on the left */}
        <div className="col-12 col-md-6 d-flex justify-content-center justify-content-md-start ">
          <img src={logo} alt="logo" style={{ maxHeight: '80px' }} />
        </div>

        {/* Search input on the right */}
        <div className="col-12 col-md-6 d-flex justify-content-center justify-content-md-end">
          <input
            type="text"
            placeholder="Search Food..."
            className="form-control border-danger"
            style={{ maxWidth: '300px', backgroundColor: '#323334', color: 'white' }} 
          />
        </div>
      </div>

      {/* Row for buttons */}
      <div className="row justify-content-center" style={{ padding: '0 10px', backgroundColor: '#323334' }}>
        <div className="col-12 d-flex justify-content-center flex-wrap mb-5">
          <button className="btn btn-danger me-2">All</button>
          <button className="btn btn-danger me-2">Breakfast</button>
          <button className="btn btn-danger me-2">Lunch</button>
          <button className="btn btn-danger">Dinner</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
