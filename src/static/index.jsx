import React from 'react';
import "../styles/Main.css";
import "../styles/Bootstrap.css";
// import "../img";

const Static = () => {
  return ( 
    <div>
      <header className="default-header">
      <div className="container">
        <div className="header-wrap">
          <div className="header-top d-flex justify-content-between align-items-center">
            <div className="logo">
              <a href="#home"><img src={require('../img/logo.png')} alt="" /></a>
            </div>
            <div className="main-menubar d-flex align-items-center">
              <nav className="hide">
                <a href="#home">Home</a>
                <a href="#functionalities">Functionalities</a>
                <a href="#speaker">Speaker</a>
                <a href="#upcoming">Upcoming event</a>
              </nav>
              <div className="menu-bar"><span className="lnr lnr-menu"></span></div>
            </div>
          </div>
        </div>
      </div>
      </header>

      <section className="events-area section-gap" id="upcoming">
      <div className="container">
        <div className="row no-padding">
          <div className="col-lg-3 col-sm-3">
            <div className="single-events row no-padding">
              <div className="col-lg-4 image">
                <img className="image-card" src={require('../img/e1.jpg')} alt=""/>
              </div>
            </div>
            <div className="single-events row no-padding">
              <div className="col-lg-4 image">
                <img className="image-card" src={require('../img/e2.jpg')} alt=""/>
              </div>
            </div>
            <div className="single-events row no-padding">
              <div className="col-lg-4 image">
                <img className="image-card" src={require('../img/e3.jpg')} alt=""/>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-3">
            <div className="single-events row no-padding">
              <div className="col-lg-4 image">
                <img className="image-card" src={require('../img/e4.jpg')} alt=""/>
              </div>
            </div>
            <div className="single-events row no-padding">
              <div className="col-lg-4 image">
                <img className="image-card" src={require('../img/e5.jpg')} alt=""/>
              </div>
            </div>
            <div className="single-events row no-padding">
              <div className="col-lg-4 image">
                <img className="image-card" src={require('../img/e6.jpg')} alt=""/>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-3">
            <div className="single-events row no-padding">
              <div className="col-lg-4 image">
                <img className="image-card" src={require('../img/1bdf4be788d4796bf15561337bafb497.jpg')} alt=""/>
              </div>
            </div>
            <div className="single-events row no-padding">
              <div className="col-lg-4 image">
                <img className="image-card" src={require('../img/2bb22a6e9313ae7d232331dcb9fd5468')} alt=""/>
              </div>
            </div>
            <div className="single-events row no-padding">
              <div className="col-lg-4 image">
                <img className="image-card" src={require('../img/2dfebe55adf68d0e6d2400d9cfa25a82')} alt=""/>
              </div>
            </div>
          </div>  
          <div className="col-lg-3 col-sm-3">
            <div className="single-events row no-padding">
              <div className="col-lg-4 image">
                <img className="image-card" src={require('../img/3e1444b2f88e5a2fb1a57213d7e5a124')} alt=""/>
              </div>
            </div>
            <div className="single-events row no-padding">
              <div className="col-lg-4 image">
                <img className="image-card" src={require('../img/5beb18022e21dd9a301acb21f7a0700d')} alt=""/>
              </div>
            </div>
            <div className="single-events row no-padding">
              <div className="col-lg-4 image">
                <img className="image-card" src={require('../img/ea303722edd954002915db2a1b8add36')} alt=""/>
              </div>
            </div>
          </div>                  
        </div>
      </div>
      </section>
    </div>
   );
}
 
export default Static;
