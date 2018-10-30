import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import './Map.css';

class Maps extends Component {
    state = {
        lat: 48.86092090955772,
        lng: 2.3303862391931456,
        zoom: 15
    }

    render() {
        const coordonate = this.props.huntplace
        const position = [coordonate.fields.geo_point_2d[0], coordonate.fields.geo_point_2d[1]]
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