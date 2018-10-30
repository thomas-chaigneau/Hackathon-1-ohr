import React, { Component } from 'react';
import PlacesList from './PlacesList';
// import Pseudo from './Pseudo';
// import Age from './Age';
import Weapons from './Weapons';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PlacesList />
        {/* <Pseudo />
        <Age /> */}
        <Weapons />
        
      </div>
    );
  }
}

export default App;
