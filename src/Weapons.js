import React from 'react';
import Select from 'react-select';

class Weapons extends React.Component {

	constructor() {
		super();
		
		this.state = {
		  showMenu: false,
		}

		this.showMenu = this.showMenu.bind(this);
		this.closeMenu = this.closeMenu.bind(this)
	}

	showMenu(event) {
		event.preventDefault()
		this.setState({showMenu:true}, () => {
			document.addEventListener('click',this.closeMenu)
		})
	}

	closeMenu(){
		this.setState({showMenu: false}, () => {
			document.addEventListener('click', this.closeMenu)
		})
	} 
	
	render() {

		const WeaponsList = [

		]

		return(
			<div>
				<button onClick={this.showMenu}>
					Selectionne ton arme
				</button>
				{
				this.state.showMenu 
				? (
				<div className="menu">
					<button>Sable</button>
					<button>Couteau à beurre</button>
					<button>Lance-pierres</button>
					<button>Martinet</button>
					<button>Dague</button>
					<button>Réplique d'épée médiévale</button>
					<button>Piège à loup</button>
					<button>Fusil d'assault silencieux</button>
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