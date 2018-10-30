import React, { Component } from 'react'
//import L from 'leaflet'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import './Map.css'

class Maps extends Component {
    state = {
        lat: 48.86092090955772,
        lng: 2.3303862391931456,
        zoom: 15
    }

    // componentWillMount() {
    //     this.setState({lat: this.props.huntplace.fields.geo_point_2d[0]})
    // }

    render() {
        console.log(this.props)
        const coordonate = this.props.huntplace
        console.log('lati',coordonate.fields.geo_point_2d[0])
        console.log('long',coordonate.fields.geo_point_2d[1])
        console.log('long',coordonate.fields.cp_arrondissement)
        // .fields.geo_point_2d
        // console.log(coordonate[0])
        // console.log(coordonate.fields.geo_point_2d[0])
        // console.log(coordonate.fields.geo_point_2d[0])
        // const { huntplace } = this.props;
        const position = [coordonate.fields.geo_point_2d[0], coordonate.fields.geo_point_2d[1]]
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