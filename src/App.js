import React, { Component } from 'react';
import PlacesList from './PlacesList';

import Weapons from './Weapons';
import Pseudo from './Pseudo';
import Age from './Age';
import './style/App.css';

class App extends Component {
  render() {
    return (

      <div>
        <div className='containerleft'>
          <h3>Bonbon Brackeur</h3>
          <p>Appli pour vieux - Vol des Bonbons des jeunes</p>
          <h6>Attention à vos dentiers</h6>
          <PlacesList options={{
            appId: "plDJWR60RSUR",
            apiKey: "4c54577cf398c44f9baef26dff187f04",
            language: "fr",
            countries: ["fr"],
            type: "address",
            insideBoundingBox: "48.896, 2.394, 48.84, 2.25",
            useDeviceLocation: false,
            aroundLatLngViaIP: false
            // Other options from https://community.algolia.com/places/documentation.html#options
          }} />
          <Pseudo />
          <Age />
          <Weapons /> 
        </div>
      </div>
    );
  }
}

export default App;
