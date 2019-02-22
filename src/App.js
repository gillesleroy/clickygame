import React, { Component } from 'react';
// import OmdbContainer from "./components/OmdbContainer";
// import Main from "./components/Main";
import './App.css';
import Static from './static/';
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
  render() {
    return (
        <div className="static">
          <Static />
        </div>
    );
  }
}

export default App;