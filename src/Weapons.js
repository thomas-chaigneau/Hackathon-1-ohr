import React from 'react';
import './style/App.css';
import Profilgamer from './Profilgamer'

class Weapons extends React.Component {

	/*	constructor() {
			super();
	
	
			this.state = {
				showMenu: false,
				imgSrc: null
			}
	
		}*/
	
	
		showMenu = () => {
			this.setState({ showMenu: !this.state.showMenu })
		}
	
		loadSable = () => {
			this.setState({ imgSrc: './img/sand.png' })
		}
	
	/*	loadMarionette = () => {
			this.setState({ imgSrc: './img/marionette.jpg' })
		}
	
		loadCouteau = () => {
			this.setState({ imgSrc: './img/couteau-beurre.jpg' })
		}
	
		loadLancePierres = () => {
			this.setState({ imgSrc: './img/lance-pierre.jpg' })
		}
	
		loadMartinet = () => {
			this.setState({ imgSrc: './img/martinet.jpg' })
		}
	
		loadDague = () => {
			this.setState({ imgSrc: './img/dague.jpg' })
		}
	
		loadEpee = () => {
			this.setState({ imgSrc: './img/epee.jpg' })
		}
	
		loadPiege = () => {
			this.setState({ imgSrc: './img/piege-a-loups.jpg' })
		}
	
		loadFusil = () => {
			this.setState({ imgSrc: './img/fusil.jpg' })
		}*/
	constructor() {
		super();
		this.state = {
			selectedOption: 'ARmes',
			validateOption: ''
		};
		this.handleOptionChange = this.handleOptionChange.bind(this);
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
	}

	handleOptionChange(event) {
		this.setState({ selectedOption: event.target.value });
	};

	handleFormSubmit(event) {
		event.preventDefault();
		this.setState({ validateOption: this.state.selectedOption });
	}

	render() {


		return (


			<div>
				<form onSubmit={this.handleFormSubmit} className="weaponForm">
					<div className="weaponContainer">
						<h3>Votre arme</h3>
						<div>
							<label>
								<input type="radio" value="Sable" checked={this.state.selectedOption === 'Sable'} onChange={this.handleOptionChange} />
								Sable
							</label>
						</div>
						<div>
							<label>
								<input type="radio" value="Marionette" checked={this.state.selectedOption === 'Marionette'} onChange={this.handleOptionChange} />
								Marionette
							</label>
						</div>
						<div>
							<label>
								<input type="radio" value="Couteau à beurre" checked={this.state.selectedOption === 'Couteau à beurre'} onChange={this.handleOptionChange} />
								Couteau à beurre
							</label>
						</div>
						<div>
							<label>
								<input type="radio" value="Lance-pierres" checked={this.state.selectedOption === 'Lance-pierres'} onChange={this.handleOptionChange} />
								Lance-pierres
							</label>
						</div>
						<div>
							<label>
								<input type="radio" value="Martinet" checked={this.state.selectedOption === 'Martinet'} onChange={this.handleOptionChange} />
								Martinet
							</label>
						</div>
						<div>
							<label>
								<input type="radio" value="Dague" checked={this.state.selectedOption === 'Dague'} onChange={this.handleOptionChange} />
								Dague
							</label>
						</div>
						<div>
							<label>
								<input type="radio" value="Epée" checked={this.state.selectedOption === 'Epée'} onChange={this.handleOptionChange} />
								Epée
							</label>
						</div>
						<div>
							<label>
								<input type="radio" value="Piège à loup" checked={this.state.selectedOption === 'Piège à loup'} onChange={this.handleOptionChange} />
								Piège à loup
							</label>
						</div>
						<div>
							<label>
								<input type="radio" value="Fusil d'assaut" checked={this.state.selectedOption === 'Fusil d\'assaut'} onChange={this.handleOptionChange} />
								Fusil d'assaut
							</label>
						</div>
					</div>
					<button className="submitbutton" type="submit">Save</button>
				</form>
				<Profilgamer weapon={this.state.validateOption} />
			</div>

		)
	}
}


export default Weapons


/*	<div>
				<button onClick={this.showMenu}>
					Selectionne ton arme
				</button>
				{
				this.state.showMenu 
				? (
					<div>
						<div className="menu">
							<button onClick={this.loadSable}>Sable</button>
							<button onClick={this.loadMarionette}>Marionette</button>
							<button onClick={this.loadCouteau}>Couteau à beurre</button>
							<button onClick={this.loadLancePierres}>Lance-pierres</button>
							<button onClick={this.loadMartinet}>Martinet</button>
							<button onClick={this.loadDague}>Dague</button>
							<button onClick={this.loadEpee}>Réplique d'épée médiévale</button>
							<button onClick={this.loadPiege}>Piège à loup</button>
							<button onClick={this.loadFusil}>Fusil d'assaut silencieux</button>
						</div>
						<div>
							{this.state.imgSrc !== null && <img src={require(`${this.state.imgSrc}`)} className="weaponsImg" alt="illustration" />}
						</div>
						
						
					</div>
				) 
				: (
					null
					)
				}
			</div> */