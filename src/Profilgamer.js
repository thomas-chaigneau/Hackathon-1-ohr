import React, { Component} from 'react';
import './style/Profilgamer.css';

class Profilgamer extends Component {
    render() {
        return (
            <div className='profilgamer-container' >
                <h3>Votre profil de voleur de bonbon</h3>
                <img src="https://svgsilh.com/svg_v2/152866.svg" alt="avatar du personage" />
                <p>{this.props.pseudo || 'My Pseudo'}</p>
                <p>{this.props.category || 'no category' }</p>
            </div>
        );
    };
}
export default Profilgamer;
