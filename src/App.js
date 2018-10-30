import React, { Component } from 'react';
import PlacesList from './PlacesList';
import Pseudo from './Pseudo';
import Age from './Age';
import Weapon from './Weapon';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <PlacesList />
        <Pseudo />
        <Age />
        <Weapon />
        
      </div>
    );
  }
}

export default App;
