import React, { Component } from 'react';

function ImageCard(props) {
// render () {
  // console.log(props.imgSrc);
  // console.log('../img/e1.jpg');
  // const imageProp = require(props.imgSrc);
  // const a = '../img/e1.jpg';
  // const imageProp = props.imgSrc;
  // const imageProp = require(a);
  // const imageProp = require('../img/e1.jpg');
  // if ('../img/e1.jpg' === props.imgSrc){
  //   console.log("equal");
  // }
  // else {
  //   console.log("Not equal");
  // }
  // console.log(imageProp);
  return (
    // <section className="events-area section-gap" id="upcoming">
    // <div className="container">
    //   <div className="row no-padding">
        <div className="col-lg-3 col-sm-3">

           <div className="single-events row no-padding">
              <div className="col-lg-4 image"  >
              {/* <div className="col-lg-4 image" onClick={props.handleIncrement} > */}
                {/* <img className="image-card" src={require(props.imgSrc)} alt=""/> */}
                {/* <img className="image-card" src={require('../img/e1.jpg')} alt=""/> */}
                <img className="image-card" name={props.imgSrc} onClick={props.imageClickedAdd} src={props.imgSrc} alt={props.idx} />
              </div>
            </div>

        </div>
    //   </div>
    // </div>  
    // </section>      
    // <div className="card text-center">
    //   <div className="card-header">
    //     <h2>{props.heading}</h2>
    //   </div>
    //   {/* <div className="card-body">{props.meals.map(meal => <MovieDetail />)}</div> */}
    //   <div className="card-body">{props.children}</div>
    // </div>
  );
//  }
}

export default ImageCard;
