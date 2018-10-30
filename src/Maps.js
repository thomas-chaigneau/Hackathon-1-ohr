import React, { Component } from 'react'
//import L from 'leaflet'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

import './Map.css'

class Maps extends Component {

    state = {
        lat: 48.8490723,
        lng: 2.3526001999999835,
        zoom: 15
    }
    render() {
        const position = [this.state.lat, this.state.lng]
        return (
            <div className='Map-container'>
                <p>Map affichage</p>
                <Map className="map" center={position} zoom={this.state.zoom}>
                    <TileLayer
                        attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
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