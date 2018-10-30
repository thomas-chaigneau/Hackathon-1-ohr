import React, { Component } from 'react';


class Pseudo extends Component {
    constructor(props) {
        super(props);
        this.state = {name: ""};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
    handleChange(event) {
            this.setState({name: event.target.value});
      }
    
    handleSubmit(event) {
        alert('You are' + this.state.name + '????');
        event.preventDefault();
      }
    
      render() {
        return (
            <div>
    
              <form onSubmit={this.handleSubmit}>
                <label htmlFor="name"> Your Pseudo</label>
                <input 
                    id="name" 
                    type="text" 
                    value={this.state.value} 
                    onChange={this.handleChange}/>
                <input type="submit" value="Submit" />
              </form>
    
          <h1>{this.state.name}</h1></div>
        );
      }
    }

export default Pseudo;