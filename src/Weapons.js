import React from 'react';
import './style/App.css';

class Weapons extends React.Component {

	constructor() {
		super();
	

		this.state = {
		  showMenu: false,
		  imgSrc: null
		}

	}

	
	showMenu = () => {
		this.setState({showMenu: !this.state.showMenu})
	}

	loadSable = () => {
		this.setState({imgSrc: './img/sand.png'})
	}

	loadMarionette = () => {
		this.setState({imgSrc: './img/marionette.jpg'})
	}

	loadCouteau = () => {
		this.setState({imgSrc: './img/couteau-beurre.jpg'})
	}

	loadLancePierres = () => {
		this.setState({imgSrc: './img/lance-pierre.jpg'})
	}

	loadMartinet = () => {
		this.setState({imgSrc: './img/martinet.jpg'})
	}

	loadDague = () => {
		this.setState({imgSrc: './img/dague.jpg'})
	}

	loadEpee = () => {
		this.setState({imgSrc: './img/epee.jpg'})
	}

	loadPiege = () => {
		this.setState({imgSrc: './img/piege-a-loups.jpg'})
	}

	loadFusil = () => {
		this.setState({imgSrc: './img/fusil.jpg'})
	}

	render() {


		return(
			<div>
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
							{this.state.imgSrc !== null && <img src={require(`${this.state.imgSrc}`)} className="weaponsImg"/>}
						</div>
						
						
					</div>
				) 
				: (
					null
					)
				}
			</div>
		)
	}
}


export default Weapons