import React from 'react';

class Weapons extends React.Component {

	constructor() {
		super();
	

		this.state = {
		  showMenu: false,
		  imgSrc: null
		}

		// this.showMenu = this.showMenu.bind(this)
		// this.closeMenu = this.closeMenu.bind(this)
	}

	// showMenu(event) {
	// 	event.preventDefault()
	// 	this.setState({showMenu:true}, () => {
	// 		document.addEventListener('click',this.closeMenu)
	// 	})
	// }

	// closeMenu(){
	// 	this.setState({showMenu: false}, () => {
	// 		document.addEventListener('click', this.showMenu)
	// 	})
	// } 
	
	showMenu = () => {
		this.setState({showMenu: !this.state.showMenu})
	}


	// changeImg = () => {
	// 	this.setState({})
	// }

	render() {


		return(
			<div>
				<button onClick={this.showMenu}>
					Selectionne ton arme
				</button>
				{
				this.state.showMenu !== null
				? (
				<div>
					<div className="menu">
						<button onClick={this.setState({imgSrc:'./img/sand.png'})}>Sable</button>
						<button onClick={this.setState({imgSrc:'./img/marionette.jpg'})}>Marionette</button>
						<button onClick={this.setState({imgSrc:'./img/couteau-beurre.jpg'})}>Couteau à beurre</button>
						<button onClick={this.setState({imgSrc:'./img/lance-pierre.jpg'})}>Lance-pierres</button>
						<button onClick={this.setState({imgSrc:'./img/martinet.jpg'})}>Martinet</button>
						<button onClick={this.setState({imgSrc:'./img/dague.jpg'})}>Dague</button>
						<button onClick={this.setState({imgSrc:'./img/epee.jpg'})}>Réplique d'épée médiévale</button>
						<button onClick={this.setState({imgSrc:'./img/piege-a-loups.jpg'})}>Piège à loup</button>
						<button onClick={this.setState({imgSrc:'./img/fusil.jpg'})}>Fusil d'assaut silencieux</button>
					</div>
					<div>
					{/* <img src={require(this.state.imgSrc)} /> */}
					{this.state.imgSrc !== null && <img src={require('./img/sand.png')} />}
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