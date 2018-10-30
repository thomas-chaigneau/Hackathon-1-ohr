import React, { Component } from 'react'
import axios from 'axios'

class Chantier extends Component {

    state = {
        localisation: []
    }

    getPlacesChantier = () => {
        let arrondissement = this.props.arrondissement
        axios
            .get(`https://opendata.paris.fr/api/records/1.0/search/?dataset=chantiers-perturbants&q=${arrondissement}&rows=10&sort=cp_arrondissement`)
            //.then(response => console.log(response.data.records))
            .then(response => this.setState({ localisation: response.data.records }))
    }

    componentDidMount = () => {
        this.getPlacesChantier()
    }

    render() {
        
        if(this.state.localisation.length === 0)
            console.log("loading")
        else{
            let tutu = this.state.localisation[Math.floor(Math.random()*this.state.localisation.length)];
            console.log(tutu.fields.voie)
        }
        console.log('PROPS', this.props)    
        
       //console.log(tutu.fields);
        return (
            <div>
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
    }
}

export default Chantier
