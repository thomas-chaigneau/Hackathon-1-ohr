import React, { Component } from 'react';
import Profilgamer from './Profilgamer'



class Pseudo extends Component {
    constructor(props) {
        super(props);
        this.state = {name: "",
                      pseudo: ""};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
    handleChange(event) {
            this.setState({name: event.target.value});
      }
    
    handleSubmit(event) {
      this.setState({pseudo: this.state.name})
      event.preventDefault();
      }
    
      render() {
        return (
            <div>
              <form onSubmit={this.handleSubmit}>
                <input 
                    id="name"
                    className="form" 
                    type="text" 
                    value={this.state.value} 
                    onChange={this.handleChange}
                    placeholder="    Ton PSeudo de Guerre Vieille PEaux"/>
                <input className="submitbutton" type="submit" value="Envoie le paté Pépé" />
              </form>
              <Profilgamer pseudo={this.state.pseudo}/>
            </div>

        );
      }
    }

    // Pseudo.defaultProps = {pseudo: 'Gammmmmeur'};

export default Pseudo;