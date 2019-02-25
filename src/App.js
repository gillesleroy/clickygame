import React, { Component } from 'react';
import _ from 'lodash';
import "./styles/Main.css";
import "./styles/Bootstrap.css";
// import OmdbContainer from "./components/OmdbContainer";
// import Main from "./components/Main";
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
    imagesClicked:[]
  };

  // handleIncrement increments this.state.count by 1
  handleIncrement = () => {
    // We always use the setState method to update a component's state
    this.setState({ count: this.state.count + 1,
                    header: "You guessed correctly!"
     });
    this.shuffleArray();
  };

  reset = () => {
    // We always use the setState method to update a component's state
    console.log(this.state.count);
    var currentCount = this.state.count;
    this.setState({ topCount: currentCount,
                    count: 0,
                    header: "You guessed incorrectly!",
                    imagesClicked:[]
                  });
    // this.setState({ count: 0 });
    this.shuffleArray();
  };

  shuffleArray = () => {
      this.setState(currentState => {
        return {imagesArray:_.shuffle(currentState.imagesArray)}
      })
  }
  // this.setState(prevState => ({
  //   myArray: [...prevState.myArray, "new value"]
  // }))
  imageClickedAdd = event => {
  // handleClick = event => {
    // console.log(event.target.name);
    const name = event.target.name;
    var isPresent = false;
    // console.log(event.target.value);
    this.setState(currentState => {
      for (var i=0;i<currentState.imagesClicked.length;i++)
      {
        // console.log(currentState.imagesClicked[i]);
        // console.log(name);
        if(currentState.imagesClicked[i] === name)
        {
          // console.log("Same"); 
          isPresent = true;    
          break;    
        }
        // else {
        //   console.log("Not Same");           
        // }
      }

      if (!isPresent) {
        this.handleIncrement();  
      }
      else {
        this.reset();
      }
    
      return {imagesClicked: [...currentState.imagesClicked,name]}
    })
    console.log(this.state);
  }

  // handleInputChange = event => {
  //   const name = event.target.name;
  //   const value = event.target.value;
  //   this.setState({
  //     [name]: value
  //   });
  // };


  // getImages = () => {
  //   this.setState({ results: images })
  //   // API.search(query)
  //   //   .then(res => this.setState({ results: res.data.data }))
  //   //   .catch(err => console.log(err));
  // };

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
                {/* <a href="#home"><img src={require('../img/logo.png')} alt="" /></a> */}
                <a href="#home"><h2>Clicky Game</h2></a>
              </div>
              <div className="d-flex align-items-center">
                <h2>{this.state.header}</h2>
              </div>
              <div className="logo">
                <h3>Score: <span>{this.state.count}</span> | Top Score: <span>0</span></h3>
              </div>
              {/* <button className="btn btn-primary" onClick={this.handleIncrement}>
               Increment
              </button> */}
            </div>
          </div>
        </div>
        </header>

        <section className="events-area section-gap" id="upcoming">
         <div className="container">
          <div className="row no-padding">
        {
          _.map(this.state.imagesArray, (imgSrc,i) => <ImageCard key={i} imgSrc={imgSrc} count={this.state.count} imageClickedAdd={this.imageClickedAdd} handleIncrement={this.handleIncrement} />)
        }
        {/* <ImageCard count={this.state.count} handleIncrement={this.handleIncrement} /> */}
         {/* <ImageCard imgSrc={this.state.imagesArray[0]} count={this.state.count} handleIncrement={this.handleIncrement} */}
         {/* /> */}
          </div>
         </div>
        </section>
        </div>

    );
  }
}

export default App;