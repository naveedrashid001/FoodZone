import React from 'react';
import logo from "../images/logo.svg";

function Header({ setSearchTerm, setSelectedCategory }) {
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="container-fluid">
      <div className="row align-items-center" style={{ padding: '20px 10px', backgroundColor: '#323334' }}>
        <div className="col-12 col-md-6 d-flex justify-content-center justify-content-md-start ">
          <img src={logo} alt="logo" style={{ maxHeight: '80px' }} />
        </div>
        <div className="col-12 col-md-6 d-flex justify-content-center justify-content-md-end">
          <input
            type="text"
            placeholder="Search Food..."
            className="form-control border-danger"
            style={{ maxWidth: '300px', backgroundColor: '#323334', color: 'white' }}
            onChange={handleSearchChange}
          />
        </div>
      </div>
      <div className="row justify-content-center" style={{ padding: '0 10px', backgroundColor: '#323334' }}>
        <div className="col-12 d-flex justify-content-center flex-wrap mb-5">
          <button className="btn btn-danger me-2" onClick={() => setSelectedCategory('All')}>All</button>
          <button className="btn btn-danger me-2" onClick={() => setSelectedCategory('breakfast')}>Breakfast</button>
          <button className="btn btn-danger me-2" onClick={() => setSelectedCategory('lunch')}>Lunch</button>
          <button className="btn btn-danger" onClick={() => setSelectedCategory('dinner')}>Dinner</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
