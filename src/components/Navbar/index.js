import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import "./style.css";

const styles = {
  navB: {
    fontFamily: "'Trade Winds', cursive"
  },
  imgB: {
    marginRight: "10px"
  },
  margintop: {
    marginTop: '20%'
  },
  buttonS: {
    marginLeft: '20px',
    marginTop: '0px',
    fontWeight: 'bold',
    width: '10px'
  },
  searchS: {
    color: 'gold',
    fontWeight: 'bold',
    fontSize: '20px'
  },
  formS: {
    // marginLeft: '80px',
    marginTop: '10%'
  }
}

// Depending on the current path, this component sets the "active" className on the appropriate navigation link item
function Navbar() {

  const [result, setResult] = useState("")
  const [search, setSearch] = useState("")

  const handleInputChange = event => {
    console.log(event.target.value)
    setSearch(event.target.value)
    // this.setState({ search: event.target.value, results: [] });
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    // const results = players.filter(friend => friend.fullName.toUpperCase() === this.state.search.toUpperCase() || friend.lastName.toUpperCase() === this.state.search.toUpperCase() || friend.name.toUpperCase() === this.state.search.toUpperCase() )
    // this.setState({ results: results });
  };
  return (
    <nav className="navbar navbar-expand navbar-dark fixed-top scrolling-navbar font-weight-bolder">
      <div className="container">
        <Link className="navbar-brand" to="/" style={styles.navB}><img src="https://raw.githubusercontent.com/diegolehyt/Portfolio-v2.0/master/images/logo.png" width="40px" height="40px" tabindex="-1" style={styles.imgB} alt="logo"/>Weather</Link>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">

          <ul className="navbar-nav mr-auto smooth-scroll">
            <li className="nav-item">
              <Link className={
                window.location.pathname === "/about"
                  ? "nav-link act"
                  : "nav-link"
              } to="/about" data-offset="90">Today</Link>
            </li>
        
          </ul>

          {/* <!-- Social Icon  --> */}
          <ul className="navbar-nav nav-flex-icons">
            <li className="nav-item">
              <form className="form-inline ml-auto" >
                <div className="md-form my-0">
                  <input onChange={handleInputChange} className="form-control" type="text" placeholder="Search" aria-label="Search"/>
                </div>
                <button onClick={handleFormSubmit} href="#!" className="btn btn-outline-white btn-md my-0 ml-sm-2" type="submit">
                  <i class="fas fa-search text-white" aria-hidden="true"></i>
                </button>
              </form>
            </li>
    
          </ul>

        </div>

      </div>
    </nav>

  );
}

export default Navbar;
