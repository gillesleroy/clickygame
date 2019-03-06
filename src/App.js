import React, { Component } from 'react';
import _ from 'lodash';
import "./styles/Main.css";
import "./styles/Bootstrap.css";

import ImageCard from "./components/ImageCard";
import './App.css';
// import Static from './static/';
// import logo from './logo.svg';
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <Main />
//         <div className="static">
//           <Static />
//         </div>
//       </div>
//     );
//   }
// }
const shuffle = (array) => _.shuffle(array);
const increment = (currentCount) => currentCount + 1;
class App extends Component {

  state = {
    result: {},
    header: "Click an image to begin",
    count: 0,
    topCount: 0,
    imagesArray: [
      require('./img/e1.jpg'),
      require('./img/e2.jpg'),
      require('./img/e3.jpg'),
      require('./img/e4.jpg'),
      require('./img/e5.jpg'),
      require('./img/e6.jpg'),
      require('./img/i1.jpg'),
      require('./img/i2.jpg'),
      require('./img/i3.jpg'),
      require('./img/i4.jpg'),
      require('./img/i5.jpg'),
      require('./img/i6.jpg')      
    ],
    imagesClicked: {}
  };

  imageClickedAdd = event => {
  // handleClick = event => {
    // console.log(event.target.name);
    const name = event.target.name;
    // var stateNow = ...this.state;
    const imagesClicked = this.state.imagesClicked;
    if (imagesClicked.hasOwnProperty(name)){
      // this.reset();
      var currentCount = this.state.count;
      // console.log("current count=",currentCount);
      if (currentCount <= this.state.topCount){
        currentCount = this.state.topCount;
      }
      this.setState(currentState =>  { 
              return {topCount: currentCount,
                      count: 0,
                      header: "You guessed incorrectly!",
                      imagesClicked:[],
                      imagesArray: _.shuffle(currentState.imagesArray) 
                      }                   
                    });     
    }
    else {
      this.setState(currentState => {
        return {
          imagesClicked: {...currentState.imagesClicked,[name]:1},
          count: this.state.count + 1,
          header: "You guessed correctly!",
          imagesArray: _.shuffle(currentState.imagesArray)
        }
      })
    }
  };

  render() {
    return (
        // <div className="static">
        //   <Static />
        // </div>
        <div>
        <header className="default-header">
        <div className="container">
          <div className="header-wrap">
            <div className="header-top d-flex justify-content-between align-items-center">
              <div className="logo">
                <a href="#home"><h2>Clicky Game</h2></a>
              </div>
              <div className="d-flex align-items-center">
                <h2>{this.state.header}</h2>
              </div>
              <div className="logo">
                <h3>Score: <span>{this.state.count}</span> | Top Score: <span>{this.state.topCount}</span></h3>
              </div>
            </div>
          </div>
        </div>
        </header>

        <section className="events-area section-gap" id="upcoming">
         <div className="container">
          <div className="row no-padding">
        {
          // _.map(this.state.imagesArray, (imgSrc,i) => <ImageCard key={i} imgSrc={imgSrc} count={this.state.count} imageClickedAdd={this.imageClickedAdd} handleIncrement={this.handleIncrement} />)
          _.map(this.state.imagesArray, (imgSrc,i) => <ImageCard key={i} imgSrc={imgSrc} imageClickedAdd={this.imageClickedAdd} />)
        }
          </div>
         </div>
        </section>
        </div>

    );
  }
}

export default App;