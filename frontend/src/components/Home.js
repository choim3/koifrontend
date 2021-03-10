import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from 'react-bootstrap/Carousel'
import a from '../imgs/a.jpg'
import b from '../imgs/b.jpg'
import c from '../imgs/c.jpg'
import fresh from '../imgs/fresh.jpg'
import sushi from '../imgs/sushi.jpg'
import about from '../imgs/about.jpg'
import logo from '../imgs/logo.png'


class Home extends Component {
  render() {
    return (
      <div>
      <img className='logo' src={logo}/>
      <Carousel>
      <Carousel.Item className="carousel-overlay" interval={3000}>
        <img
          className="d-block w-100"
          src={a}
          alt="First slide"
        />
        <Carousel.Caption className="Carousel-Caption">
          <h3>Hours</h3>
          <p>Dine-In Monday-Friday 5:00pm-9:00pm </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel-overlay" interval={3000}>
      <div>
        <img
          className="d-block w-100"
          src={b}
          alt="Second slide"
        />
        </div>
        <Carousel.Caption className="Carousel-Caption">
          <h3>Specials</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel-overlay" interval={3000}>
        <img
          className="d-block w-100"
          src={c}
          alt="Third slide"
        />
        <Carousel.Caption className="Carousel-Caption">
          <h3>Lorem</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>


    <section id="info" className="py-3 aboutSection">
      <div className="container">
        <div className="row">
          <div className="col-md-6 align-self-center">
            <h3 className="bold-white about-us bold-c-font">About Us</h3>
            <p className='text-white c-font'> Koibito of Lacey, WA is proud to offer the best in the Asian art of Sushi. Our family owned restaurant features some of the best Sushi in the Thurston County area. Our chefs are masters in the art of creating Sushi with exciting new twists that is sure to please any Sushi lover. Jerry, new owner of Koibito of Lacey, is dedicated to creating a fun and inviting atmosphere where families and friends can enjoy the best quality in Japanese and Chinese cuisine. Jerry left a promising career in technology to peruse a passion that his family has shared for over 20 years. He is a pioneer of Japanese restaurants in Washington from his first restaurant that he started in Federal Way to Port Angeles where his business became a household name among Sushi lovers. You can only expect the best quality of Sushi at Koibito of Lacey. Jerry trained at a premier Sushi Academy in California but don't be surprised by his personal touch either. Jerry's sushi creations are a favorite among many. It's always a treat at Koibito of Lacey. Come and enjoy the experience! </p>
            <a className="btn btn-outline-danger btn-lg">Learn More</a>
          </div>
          <div className="col-md-6 about-overlay">
            <img src={about} alt="" className="img-fluid"/>
          </div>
        </div>
      </div>
    </section>


    <section className='hero'> </section>
    <section id="home-heading" className="p-5">
      <div className="dark-overlay">
        <div className="row">
          <div className="col">
            <div className="container pt-5">
              <h1 className="center-menu bold-c-font" >Menu</h1>
              <p className="d-none d-md-block"></p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="info" className="py-3 aboutSection">
      <div className="container">
        <div className="row">
          <div className="col-md-6 align-self-center our-menu-overlay">
          <img src={fresh} alt="" className="img-fluid"/>
          </div>
          <div className="col-md-6 about-overlay">
            <h3 className="bold-white our-menu-section bold-c-font">Our Menu</h3>
            <p className='text-white c-font'> We bring you the freshest, best quality seafood that is available. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.  </p>
            <a href='menu' className="btn btn-outline-danger btn-lg">View Menu</a>
          </div>
        </div>
      </div>
    </section>

    <section className='hero2'> </section>
    <section id="home-heading2" className="p-5">
      <div className="dark-overlay">
        <div className="row">
          <div className="col">
            <div className="container pt-5">
              <h1 className="center-menu bold-c-font"> Delivery </h1>
              <p className="d-none d-md-block"></p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="info" className="py-3 aboutSection">
      <div className="container">
        <div className="row">
          <div className="col-md-6 align-self-center our-menu-overlay">
          <img src={sushi} alt="" className="img-fluid"/>
          </div>
          <div className="col-md-6 about-overlay">
            <h3 className="bold-white our-menu-section bold-c-font">Feeling Lazy?</h3>
            <p className='text-white c-font'> We all have those days, where we want to stay home and just don't feel like cooking. Well, we've got you covered! We are now on DoorDash! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.  </p>
            <a href='https://www.doordash.com/store/koibito-one-at-lacey-lacey-568343/en-US' target="_blank" className="btn btn-outline-danger btn-lg">Order Delivery!</a>
          </div>
        </div>
      </div>
    </section>

    <div className='footer'>
    </div>


    </div>
    );
  }
}

export default Home;
