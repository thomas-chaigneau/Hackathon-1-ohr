import React, { Component } from 'react'
import axios from 'axios'

class Chantier extends Component {

    state = {
        localisation: []
    }

    getPlacesChantier = () => {
        axios
            .get(`https://opendata.paris.fr/api/records/1.0/search/?dataset=chantiers-perturbants&rows=400`)
            .then(response => this.setState({ localisation: response.data.records }))
    }

    componentDidMount = () => {
        this.getPlacesChantier()
    }

    render() {
        if(this.props.arrondissement === '')
        return (
            <div>place is comming....
                { 
                    /*this.state.localisation.map(
                        (element, index) =>
                            <div key={index}>
                                <h2>{element.fields.voie}</h2>
                            </div>
                    )*/
                    
                    }
            </div>
        )

        else {
            let alea = Math.floor(Math.random()*this.state.localisation.length);
            // tutu = tutu.fields.voie
            return (
                <div> 
                    {this.state.localisation.filter(item => item.fields.cp_arrondissement = this.props.arrondissement).filter((item, id) => id === alea).map(
                            (element, index) =>
                                <div key={index}>
                                    <h2>{element.fields.voie}</h2>
                                    <h4>{element.fields.cp_arrondissement}</h4>
                                </div>)}  
                </div>
            )
        }
    }
}
export default Chantier
