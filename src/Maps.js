import React, { Component } from 'react'
//import L from 'leaflet'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

import './Map.css'

class Maps extends Component {

    state = {
        lat: 48.8490723,
        lng: 2.3526001999999835,
        zoom: 18,
        itinerary: null,
    requestDone: false,
    isLoaded: false,
    counter: 0
    }
    render() {
        const position = [this.state.lat, this.state.lng]
        return (
            <div className='Map-container'>
                <p>Map affichage</p>
                <Map className="map" center={position} zoom={this.state.zoom}>
                    <TileLayer
                        attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                        url="https://tile.thunderforest.com/spinal-map/{z}/{x}/{y}.png?apikey=debe4121bd754e9aa0642ae656ef10f4"
                    />
                    <Marker position={position}>
                    <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                    </Marker>
                </Map>
            </div>
        );
    }
}

export default Maps;