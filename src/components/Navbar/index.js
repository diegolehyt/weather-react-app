import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import "./style.css";

const styles = {
  navB: {
    fontFamily: "'Russo One', sans-serif"
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
function Navbar(props) {

  const [result, setResult] = useState("")
  const [search, setSearch] = useState([])
  const [cities, setCities] = useState([])

  const handleInputChange = event => {
    // console.log(event.target.value)
    setSearch(event.target.value)
    // this.setState({ search: event.target.value, results: [] });
  };
  useEffect(() => {
    if(localStorage.getItem('LScities') !== null) {
      let savedCities = localStorage.getItem('LScities')
      savedCities = JSON.parse(savedCities)
      setCities(savedCities)
      props.onSearch(savedCities)
    }
    else {
      setCities([])
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('LScities', JSON.stringify(cities));
    props.onSearch(cities)
    // console.log(cities)
  }, [cities])

  const handleFormSubmit = event => {
    event.preventDefault();

    setCities(localStorage.getItem('LScities'))
    setCities(cities.concat(search))

    localStorage.setItem('searchedCity', search);
  };
  
  return (
    <nav className="navbar navbar-expand navbar-dark fixed-top scrolling-navbar font-weight-bolder">
      <div className="container">
        <Link className="navbar-brand" to="/" style={styles.navB}><img src="https://raw.githubusercontent.com/diegolehyt/weather-react-app/master/images/logo.png" width="40px" height="40px" tabindex="-1" style={styles.imgB} alt="logo"/>Weather</Link>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">

          <ul className="navbar-nav mr-auto smooth-scroll">
            <li className="nav-item">
        
              <h6 className="text-center text-white">{props.currentD}/{props.currentM}{" "}<i className="fas fa-calendar text-white" aria-hidden="true"></i></h6>
              
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
