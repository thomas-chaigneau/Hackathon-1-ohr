import React, { Component } from 'react';
import axios from 'axios';
import Maps from './Maps';

class Chantier extends Component {
    state = {
        localisation: []
    }

    getPlacesChantier = () => {
        axios
            .get(`https://opendata.paris.fr/api/records/1.0/search/?dataset=chantiers-perturbants&rows=400&facet=cp_arrondissement`)
            .then(response => this.setState({ localisation: response.data.records, isLoading : false}))
    }

    componentDidMount () {
        this.getPlacesChantier()
    }

    render() {
        if(this.props.arrondissement === '') return <div></div>
        else {
            let AllSite = this.state.localisation
            let Sitebyborough = AllSite.filter(item => item.fields.cp_arrondissement === parseInt(this.props.arrondissement))
            let OneSite = Sitebyborough[Math.floor(Math.random()*Sitebyborough.length)]
            return <Maps huntplace={OneSite} />
        }
    }
}
export default Chantier
