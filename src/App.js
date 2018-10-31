import React, { Component } from 'react';
import PlacesList from './PlacesList';
import Weapons from './Weapons';
import Pseudo from './Pseudo';
import Age from './Age';
import Header from './Header';
import './style/App.css';
import { Grid } from '@material-ui/core';


class App extends Component {
    render() {
        return (

            <Grid container>
                <Header />

                <div className='containerleft'>
                    <h3>Trouver votre lieux de chasse</h3>
                    <PlacesList options={{
                        appId: "plDJWR60RSUR",
                        apiKey: "4c54577cf398c44f9baef26dff187f04",
                        language: "fr",
                        countries: ["fr"],
                        type: "address",
                        insideBoundingBox: "48.896, 2.394, 48.84, 2.25",
                        useDeviceLocation: false,
                        aroundLatLngViaIP: false
                    }} />

                    <h3>Personnaliser votre profil</h3>
                    <Pseudo />
                    <Age />
                    <Weapons />
                </div>


            </Grid>
        );
    };
}

export default App;
