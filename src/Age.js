import React, { Component } from 'react';
import Profilgamer from './Profilgamer'

class Age extends Component {
  constructor() {
    super();
      this.state = {selectedOption: 'Catégorie',
                    validateOption: ''};
      this.handleOptionChange = this.handleOptionChange.bind(this);
      this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleOptionChange(event) {
    this.setState({selectedOption: event.target.value});
  };

  handleFormSubmit(event) {
    event.preventDefault();
    this.setState({validateOption: this.state.selectedOption});
}

    render() {
      return (
        <div>
              <form onSubmit={this.handleFormSubmit} className="ageForm">
                <div className="ageContainer">
                  <h3>Votre âge</h3>
                  <div>
                    <label>
                      <input type="radio" value="Septuagénaire" checked={this.state.selectedOption === 'Septuagénaire'} onChange={this.handleOptionChange} />
                      Septuagénaire
                    </label>
                  </div>
                  <div>
                    <label>
                      <input type="radio" value="Octogénaires" checked={this.state.selectedOption === 'Octogénaires'} onChange={this.handleOptionChange}/>
                      Octogénaires
                    </label>
                  </div>
                  <div>
                    <label>
                      <input type="radio" value="Nonagénaire" checked={this.state.selectedOption === 'Nonagénaire'} onChange={this.handleOptionChange}/>
                      Nonagénaire
                    </label>
                  </div>
                  <div>
                    <label>
                      <input type="radio" value="Centenaires" checked={this.state.selectedOption === 'Centenaires'} onChange={this.handleOptionChange}/>
                      Centenaires
                    </label>
                  </div>
                </div>
                <button className="submitbutton" type="submit">Save</button>
              </form>
              <Profilgamer category={this.state.validateOption} />
        </div>
      );
    }
  }

export default Age;

// category