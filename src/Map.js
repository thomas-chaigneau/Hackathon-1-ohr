import React, { Component } from 'react'
import L from 'leaflet'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

//import './Map.css'

class SimpleMap extends Component{
            
    state = {
        lat: 48.678,
        lng: 2.33,
        zoom: 14,
    }
    render(){
        const position = [this.state.lat, this.state.lng]
        return(
            <div className='Map-container'>
                <Map className="map" center={position} zoom={this.state.zoom}>
                   
                    <Marker position={position}>
                   
                    </Marker>
                </Map>
            </div>
        );
    }
}

export default SimpleMap;