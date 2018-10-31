import React, { Component } from 'react';
import './style/Profilgamer.css';

class Profilgamer extends Component {
    render() {

        return (
            <div className='profilgamer-container' >
                <h3>Votre profil de voleur de bonbon</h3>
                <img src="https://svgsilh.com/svg_v2/152866.svg" alt="avatar du personage" />
                <p>{this.props.pseudo !== '' ? this.props.pseudo : 'My Pseudo'}</p><br />
                <p>{this.props.category !== '' ? this.props.category : 'No category'}</p>
            </div>
        );
    };
}
export default Profilgamer;
