import React, { useState, useEffect } from 'react'
import Navbar from "../components/Navbar";
import Intro from "../components/Intro";
import Video from "../components/Video";
import Mask from "../components/Mask";
import Container from "../components/Container";
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
  }
}

function Home() {


  return (
    <>
      <Navbar />
      <Intro>
          
        <Video/>
        <Mask>
          <Container>
            <div className="container">
    

              <div className="scrollbar scrollbar-primary row flex-row flex-nowrap mt-4 pb-4">
        
        
                <div className="col-4" style={styles.margintop}>
                  <div className="card white-text rgba-blue-light mb-3"  style={{maxWidth: '18em'}}>
                    <div className="card-header gradient-card-header rgba-blue-light">City Name</div>
                    <div className="card-body row">
                      
                      <div className="col-6">
                        <img src="HTTPS://openweathermap.org/img/wn/04d.png"/>
                        <p>broken clouds</p>
                      </div>
                      <div  className="col-6">
                        <p className="card-text text-white" style={styles.todayO}>20°</p>
                      </div>
                      
                    </div>
                  </div>
                </div>
                <div className="col-4" style={styles.margintop}>
                  <div className="card white-text rgba-blue-light mb-3"  style={{maxWidth: '18em'}}>
                    <div className="card-header gradient-card-header rgba-blue-light">City Name</div>
                    <div className="card-body row">
                      
                      <div className="col-6">
                        <img src="HTTPS://openweathermap.org/img/wn/04d.png"/>
                        <p>broken clouds</p>
                      </div>
                      <div  className="col-6">
                        <p className="card-text text-white" style={styles.todayO}>20°</p>
                      </div>
                      
                    </div>
                  </div>
                </div>
                <div className="col-4" style={styles.margintop}>
                  <div className="card white-text rgba-blue-light mb-3"  style={{maxWidth: '18em'}}>
                    <div className="card-header gradient-card-header rgba-blue-light">City Name</div>
                    <div className="card-body row">
                      
                      <div className="col-6">
                        <img src="HTTPS://openweathermap.org/img/wn/04d.png"/>
                        <p>broken clouds</p>
                      </div>
                      <div  className="col-6">
                        <p className="card-text text-white" style={styles.todayO}>20°</p>
                      </div>
                      
                    </div>
                  </div>
                </div>
                <div className="col-4" style={styles.margintop}>
                  <div className="card white-text rgba-blue-light mb-3"  style={{maxWidth: '18em'}}>
                    <div className="card-header gradient-card-header rgba-blue-light">City Name</div>
                    <div className="card-body row">
                      
                      <div className="col-6">
                        <img src="HTTPS://openweathermap.org/img/wn/04d.png"/>
                        <p>broken clouds</p>
                      </div>
                      <div  className="col-6">
                        <p className="card-text text-white" style={styles.todayO}>20°</p>
                      </div>
                      
                    </div>
                  </div>
                </div>
                <div className="col-4" style={styles.margintop}>
                  <div className="card white-text rgba-blue-light mb-3"  style={{maxWidth: '18em'}}>
                    <div className="card-header gradient-card-header rgba-blue-light">City Name</div>
                    <div className="card-body row">
                      
                      <div className="col-6">
                        <img src="HTTPS://openweathermap.org/img/wn/04d.png"/>
                        <p>broken clouds</p>
                      </div>
                      <div  className="col-6">
                        <p className="card-text text-white" style={styles.todayO}>20°</p>
                      </div>
                      
                    </div>
                  </div>
                </div>
              
              </div>

              <div className="row d-flex justify-content-center flex-row flex-nowrap mt-4 pb-4">
        
                <div className="col-12" >
                  <p className="text-center" style={styles.todayT}>20°</p>
                  <h2 className="text-center">20° / 16°</h2>
                </div>
          
                {/* <div className="col-md-8 col-sm-12" >
                  <ul class="list-group text-left">
                    <div class="list-group-item rgba-black-slight">tomorrow </div>
                    <div class="list-group-item rgba-black-slight">tomorrow </div>
                  </ul>
                </div> */}
  
              </div>
              <div className="row text-black font-weight-bold">

                <hr className="hr-light my-4 w-75 style-two" />
                <div className="col-md-12 col-lg-12">
                  <div className="row">

                    <div className="text-left col-4">tomorrow</div>
                    <div className="text-center col-4"><img src="HTTPS://openweathermap.org/img/wn/04d.png"/>icon</div>
                    <div className="text-right col-4">24 / 28</div>
                  </div>
                  <hr className="hr-light my-4 w-75 style-two" />
                </div>
                <div className="col-md-12 col-lg-12">
                  <div className="row">

                    <div className="text-left col-4">tomorrow</div>
                    <div className="text-center col-4"><img src="HTTPS://openweathermap.org/img/wn/04d.png"/>icon</div>
                    <div className="text-right col-4">24 / 28</div>
                  </div>
                  <hr className="hr-light my-4 w-75 style-two" />
                </div>
                <div className="col-md-12 col-lg-12">
                  <div className="row">

                    <div className="text-left col-4">tomorrow</div>
                    <div className="text-center col-4"><img src="HTTPS://openweathermap.org/img/wn/04d.png"/>icon</div>
                    <div className="text-right col-4">24 / 28</div>
                  </div>
                  <hr className="hr-light my-4 w-75 style-two" />
                </div>
                <div className="col-md-12 col-lg-12">
                  <div className="row">

                    <div className="text-left col-4">tomorrow</div>
                    <div className="text-center col-4"><img src="HTTPS://openweathermap.org/img/wn/04d.png"/>icon</div>
                    <div className="text-right col-4">24 / 28</div>
                  </div>
                  <hr className="hr-light my-4 w-75 style-two" />
                </div>
                <div className="col-md-12 col-lg-12">
                  <div className="row">

                    <div className="text-left col-4">tomorrow</div>
                    <div className="text-center col-4"><img src="HTTPS://openweathermap.org/img/wn/04d.png"/>icon</div>
                    <div className="text-right col-4">24 / 28</div>
                  </div>
                  <hr className="hr-light my-4 w-75 style-two" />
                </div>
                <div className="col-md-12 col-lg-12">
                  <div className="row">

                    <div className="text-left col-4">tomorrow</div>
                    <div className="text-center col-4"><img src="HTTPS://openweathermap.org/img/wn/04d.png"/>icon</div>
                    <div className="text-right col-4">24 / 28</div>
                  </div>
                  <hr className="hr-light my-4 w-75 style-two" />
                </div>
              
              </div>
            </div>
          </Container>
        </Mask>
      </Intro>
    </>
  );
}

export default Home;
