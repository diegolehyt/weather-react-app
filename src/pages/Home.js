import React, { useState, useEffect } from 'react'
import Navbar from "../components/Navbar";
import Intro from "../components/Intro";
import Video from "../components/Video";
import Mask from "../components/Mask";
import Container from "../components/Container";
import CityBlock from "../components/CityBlock";
// import { Link } from "react-router-dom";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage,
MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn } from "mdbreact";


const styles = {
  headerB: {
    fontFamily: "'Heebo', sans-serif" 
  },
  headerC: {
    fontFamily: "'Trade Winds', cursive" 
  },
  view: {
    position: 'relative',
    overflow: 'hidden'
  },
  vidddeo: {
    position: 'fixed',
    maxHeight: '100%',
    minWidth: '100%'
  },
  sec: {
    marginTop: '20%',
    height: '100%'
  },
  sic: {
    maxHeight: '100%'
  },
  margintop: {
    marginTop: '8%'
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
  },
  todayT: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: '200px',
    marginBottom: '-50px'
  },
  todayO: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: '50px'
  },
  cities: {
    width: '100%'
  }
}

function Home() {

  const [cities, setCities] = useState([])
  const [city, setCity] = useState("")
  const [searchedCity, setSearchedCity] = useState("")
  const [currentD, setCurrentD] = useState("")
  const [currentM, setCurrentM] = useState("")
  const [localS, setLocalS] = useState(false)

  //Today
  const [tempMax, setTempMax] = useState("")
  const [tempMin, setTempMin] = useState("")
  const [temp, setTemp] = useState("")
  const [icon, setIcon] = useState("")
  const [weather, setWeather] = useState("")
  const [cityName, setCityName] = useState("")
  const [humidity, setHumidity] = useState("")
  const [wind, setWind] = useState("")
  const [country, setCountry] = useState("")

  //day 1
  const [tempMax1, setTempMax1] = useState("")
  const [temp1, setTemp1] = useState("")
  const [icon1, setIcon1] = useState("")
  const [desc1, setDesc1] = useState("")
  const [currentD1, setCurrentD1] = useState("")

  //day 2
  const [tempMax2, setTempMax2] = useState("")
  const [temp2, setTemp2] = useState("")
  const [icon2, setIcon2] = useState("")
  const [desc2, setDesc2] = useState("")
  const [currentD2, setCurrentD2] = useState("")

  //day 3
  const [tempMax3, setTempMax3] = useState("")
  const [temp3, setTemp3] = useState("")
  const [icon3, setIcon3] = useState("")
  const [desc3, setDesc3] = useState("")
  const [currentD3, setCurrentD3] = useState("")

  //day 4
  const [tempMax4, setTempMax4] = useState("")
  const [temp4, setTemp4] = useState("")
  const [icon4, setIcon4] = useState("")
  const [desc4, setDesc4] = useState("")
  const [currentD4, setCurrentD4] = useState("")

  //day 5
  const [tempMax5, setTempMax5] = useState("")
  const [temp5, setTemp5] = useState("")
  const [icon5, setIcon5] = useState("")
  const [desc5, setDesc5] = useState("")
  const [currentD5, setCurrentD5] = useState("")

  //day 6
  const [tempMax6, setTempMax6] = useState("")
  const [temp6, setTemp6] = useState("")
  const [icon6, setIcon6] = useState("")
  const [desc6, setDesc6] = useState("")
  const [currentD6, setCurrentD6] = useState("")

  const getCities = (citiesNames) => {
    setCities(citiesNames)
    if (citiesNames.length !== 0) {
      setLocalS(true)
      getForecast()

    }
  
  };

  const getForecast = () => {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${localStorage.getItem('searchedCity')}&appid=a20945d7ff2c1d7b2d2fb96e4f52ee9f`)
    .then(function (response) {
      return response.json();
    })
    .then(function (res) {
      console.log(res)

      // day 0
      setTempMax6(Math.ceil((res.list[0].main.temp_max) - 273))
      setTemp6(Math.floor((res.list[0].main.temp) - 275))
      setIcon6(res.list[0].weather[0].icon)
      setDesc6(res.list[0].weather[0].description)

      // day 1
      setTempMax1(Math.ceil((res.list[7].main.temp_max) - 273))
      setTemp1(Math.floor((res.list[7].main.temp_min) - 275))
      setIcon1(res.list[7].weather[0].icon)
      setDesc1(res.list[7].weather[0].description)

      // day 2
      setTempMax2(Math.ceil((res.list[15].main.temp_max) - 273))
      setTemp2(Math.floor((res.list[15].main.temp_min) - 275))
      setIcon2(res.list[15].weather[0].icon)
      setDesc2(res.list[15].weather[0].description)

      // day 3
      setTempMax3(Math.ceil((res.list[23].main.temp_max) - 273))
      setTemp3(Math.floor((res.list[23].main.temp_min) - 275))
      setIcon3(res.list[23].weather[0].icon)
      setDesc3(res.list[23].weather[0].description)

      // day 4
      setTempMax4(Math.ceil((res.list[31].main.temp_max) - 273))
      setTemp4(Math.floor((res.list[31].main.temp_min) - 275))
      setIcon4(res.list[31].weather[0].icon)
      setDesc4(res.list[31].weather[0].description)

      // day 5
      setTempMax5(Math.ceil((res.list[39].main.temp_max) - 273))
      setTemp5(Math.floor((res.list[39].main.temp_min) - 275))
      setIcon5(res.list[39].weather[0].icon)
      setDesc5(res.list[39].weather[0].description)

    });
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${localStorage.getItem('searchedCity')}&appid=a20945d7ff2c1d7b2d2fb96e4f52ee9f`)
    .then(function (response) {
      return response.json();
    })
    .then(function (res) {
      console.log(res)
      // Today
      setTempMin(Math.floor((res.main.temp_min) - 273))
      setTempMax(Math.ceil((res.main.temp_max) - 273))
      setTemp(Math.ceil((res.main.temp) - 273))
      setIcon(res.weather[0].icon)
      setWeather(res.weather[0].description)
      setCityName(res.name)
      setHumidity(res.main.humidity)
      setWind(res.wind.speed)
      setCountry(res.sys.country)
    });
  };

  const getCity = (cityData) => {
    setCity(cityData)
    // console.log(cityData)
    // console.log(cities)
  };

  useEffect(()=> {
    //time variables
    let currentDate = new Date();
    let cDate = currentDate.getDate();
    let cMonth = currentDate.getMonth() + 1;
    // let cYear = currentDate.getFullYear();
    // let currentDay = cDate + '/' + cMonth + '/' + cYear;
    setCurrentD(cDate)
    setCurrentD1(cDate + 2)
    setCurrentD2(cDate + 3)
    setCurrentD3(cDate + 4)
    setCurrentD4(cDate + 5)
    setCurrentD5(cDate + 6)
    setCurrentD6(cDate + 1)


    setCurrentM(cMonth)
    // if (currentD !== ""){
  
    //   setCurrentD(currentD.toString())
    //   setCurrentD(currentD.substr(0, 10))
    //   console.log("*************************date")
    //   console.log(currentD)
    // }
  }, [])

  useEffect(() => {
    
    // console.log(city)
    if(localStorage.getItem('clickedCity') !== null) {
      fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${localStorage.getItem('clickedCity')}&appid=a20945d7ff2c1d7b2d2fb96e4f52ee9f`)
      .then(function (response) {
        return response.json();
      })
      .then(function (res) {
        console.log(res)
  
        // day 0
        setTempMax6(Math.ceil((res.list[0].main.temp_max) - 273))
        setTemp6(Math.floor((res.list[0].main.temp_min) - 275))
        setIcon6(res.list[0].weather[0].icon)
        setDesc6(res.list[0].weather[0].description)

        // day 1
        setTempMax1(Math.ceil((res.list[7].main.temp_max) - 273))
        setTemp1(Math.floor((res.list[7].main.temp_min) - 275))
        setIcon1(res.list[7].weather[0].icon)
        setDesc1(res.list[7].weather[0].description)
  
        // day 2
        setTempMax2(Math.ceil((res.list[15].main.temp_max) - 273))
        setTemp2(Math.floor((res.list[15].main.temp_min) - 275))
        setIcon2(res.list[15].weather[0].icon)
        setDesc2(res.list[15].weather[0].description)
  
        // day 3
        setTempMax3(Math.ceil((res.list[23].main.temp_max) - 273))
        setTemp3(Math.floor((res.list[23].main.temp_min) - 275))
        setIcon3(res.list[23].weather[0].icon)
        setDesc3(res.list[23].weather[0].description)
  
        // day 4
        setTempMax4(Math.ceil((res.list[31].main.temp_max) - 273))
        setTemp4(Math.floor((res.list[31].main.temp_min) - 275))
        setIcon4(res.list[31].weather[0].icon)
        setDesc4(res.list[31].weather[0].description)
  
        // day 5
        setTempMax5(Math.ceil((res.list[39].main.temp_max) - 273))
        setTemp5(Math.floor((res.list[39].main.temp_min) - 275))
        setIcon5(res.list[39].weather[0].icon)
        setDesc5(res.list[39].weather[0].description)
  
      });

      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${localStorage.getItem('clickedCity')}&appid=a20945d7ff2c1d7b2d2fb96e4f52ee9f`)
      .then(function (response) {
        return response.json();
      })
      .then(function (res) {
       
        // Today
        setTempMin(Math.floor((res.main.temp_min) - 273))
        setTempMax(Math.ceil((res.main.temp_max) - 273))
        setTemp(Math.ceil((res.main.temp) - 273))
        setIcon(res.weather[0].icon)
        setWeather(res.weather[0].description)
        setCityName(res.name)
        setHumidity(res.main.humidity)
        setWind(res.wind.speed)
        setCountry(res.sys.country)
      });
    }


  }, [city])

  return (
    <>
      <Navbar onSearch={getCities} currentD={currentD} currentM={currentM}/>
      <Intro>
          
        <Video/>
        <Mask>
          <Container>
            {
              localS
              ?
              <div className="container">
      

                <div className="scrollbar scrollbar-primary row flex-row flex-nowrap mt-4 pb-4" style={styles.cities}>
                  {
                    cities.map(city => (
                      <CityBlock city={city} onCity={getCity}/>
                    ))
                  }
        
                </div>

                <div className="row d-flex justify-content-center flex-row flex-nowrap mt-4 pb-4" style={styles.cities}>
          
                  <div className="col-12">
                    <p className="text-center" style={styles.todayT}>{temp}°</p>
                    <h2 className="text-center"><span className="font-weight-bold">{tempMax}°</span> / {tempMin}°</h2>
                    <h4 className="text-center">{weather}<img src={"HTTPS://openweathermap.org/img/wn/" + icon + ".png"}/></h4>
                    
                  </div>
                  
                </div>
       
                <div className="row text-black" style={{ marginTop: "20%" }}>
                  <div className="col-md-12 col-lg-12">
                    
                    <div className="row">

                      <h4 className="text-left col-4">{wind}{" "}m/s{" "}<i className="fas fa-wind text-white" aria-hidden="true"></i></h4>
                      <h4 className="text-center col-4">{cityName},{" "}{country}{" "}<i className="fas fa-map-marker-alt text-white" aria-hidden="true"></i></h4>
                      <h4 className="text-right col-4">{humidity}%{" "}<i className="fas fa-water text-white" aria-hidden="true"></i></h4>
                    </div>
                  
                  </div>
                  <div className="col-md-12 col-lg-12" style={{ marginTop: "5%" }}>
                  
                    <div className="row">
                      <hr className="hr-light my-4 w-75 style-two" />
                      <h5 className="text-left col-4">{currentD6}/{currentM}</h5>
                      <h5 className="text-center col-4">{desc6}<img src={"HTTPS://openweathermap.org/img/wn/" + icon6 + ".png"}/></h5>
                      <h5 className="text-right col-4"><span className="font-weight-bold">{tempMax6}°</span> / {temp6}°</h5>
                    </div>
                    <hr className="hr-light my-4 w-75 style-two" />
                  </div>

                  <div className="col-md-12 col-lg-12">
                    <div className="row">

                      <h5 className="text-left col-4">{currentD1}/{currentM}</h5>
                      <h5 className="text-center col-4">{desc1}<img src={"HTTPS://openweathermap.org/img/wn/" + icon1 + ".png"}/></h5>
                      <h5 className="text-right col-4"><span className="font-weight-bold">{tempMax1}°</span> / {temp1}°</h5>
                    </div>
                    <hr className="hr-light my-4 w-75 style-two" />
                  </div>
                  <div className="col-md-12 col-lg-12">
                    <div className="row">

                      <h5 className="text-left col-4">{currentD2}/{currentM}</h5>
                      <h5 className="text-center col-4">{desc2}<img src={"HTTPS://openweathermap.org/img/wn/" + icon2 + ".png"}/></h5>
                      <h5 className="text-right col-4"><span className="font-weight-bold">{tempMax2}°</span> / {temp2}°</h5>
                      
                    </div>
                    <hr className="hr-light my-4 w-75 style-two" />
                  </div>
                  
                  <div className="col-md-12 col-lg-12">
                    <div className="row">
                      
                      <h5 className="text-left col-4">{currentD3}/{currentM}</h5>
                      <h5 className="text-center col-4">{desc3}<img src={"HTTPS://openweathermap.org/img/wn/" + icon3 + ".png"}/></h5>
                      <h5 className="text-right col-4"><span className="font-weight-bold">{tempMax3}°</span> / {temp3}°</h5>
                    </div>
                    <hr className="hr-light my-4 w-75 style-two" />
                  </div>
                  <div className="col-md-12 col-lg-12">
                    <div className="row">

                      <h5 className="text-left col-4">{currentD4}/{currentM}</h5>
                      <h5 className="text-center col-4">{desc4}<img src={"HTTPS://openweathermap.org/img/wn/" + icon4 + ".png"}/></h5>
                      <h5 className="text-right col-4"><span className="font-weight-bold">{tempMax4}°</span> / {temp4}°</h5>
                    </div>
                    <hr className="hr-light my-4 w-75 style-two" />
                  </div>
                  <div className="col-md-12 col-lg-12">
                    <div className="row">

                      <h5 className="text-left col-4">{currentD5}/{currentM}</h5>
                      <h5 className="text-center col-4">{desc5}<img src={"HTTPS://openweathermap.org/img/wn/" + icon5 + ".png"}/></h5>
                      <h5 className="text-right col-4"><span className="font-weight-bold">{tempMax5}°</span> / {temp5}°</h5>
                    </div>
                    <hr className="hr-light my-4 w-75 style-two" />
                  </div>
                
                </div>
              </div>
              :
              <div className="container">
                <div className="row" style={{ marginTop: "20%" }}>
                  <div className="col-12 text-center text-white">
                    <h2>NO CITIES</h2>
                  </div>
                </div>
              </div>

            }
        
          </Container>
        </Mask>
      </Intro>
    </>
  );
}

export default Home;
