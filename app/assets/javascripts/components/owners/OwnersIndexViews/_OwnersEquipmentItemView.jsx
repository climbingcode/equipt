Equipt.views.OwnersEquipmentItemView = class extends React.Component {

	static contextTypes = {
		router: React.PropTypes.func.isRequired
	}

	constructor(props) {
		super(props);
	}

	delete(e) {
		e.preventDefault();
		e.stopPropagation();
		let equipment = this.props.equipment;		
		Equipt.actions.deleteEquipment(equipment.id);
	}

	edit(e) {
		e.preventDefault();
		e.stopPropagation();
		let equipment = this.props.equipment;
		this.context.router.transitionTo('equipmentEdit', {
			id: equipment.id
		});
	}

	render() {

		var equipment = this.props.equipment;
		let userId 	  = this.props.userId;

		let linkParams = {	
							equipmentId: equipment.id,
							userId: userId
						};

		return(
			<div className="equipment-container col-xs-4">
				<Link to="ownersShow" params={linkParams}>
					<div className="well">
						<h2>{equipment.equipment_name && equipment.equipment_name.capitalize()}</h2>
						<h4>{equipment.brand}</h4>
						<img className="img-responsive center-block" src="/assets/equipment-default.png"/>
						<h5>{equipment.model}</h5>
						<p>Price Per Day: ${ equipment.price_per_day }</p>
						<p>Deposit: ${ equipment.desposit_amount }</p>
						<i  className="fa fa-pencil-square-o fa-3" 
							aria-hidden="true"
							onClick={ this.edit.bind(this) }></i>
						<i 	className="fa fa-trash fa-3" 
							aria-hidden="true"
							onClick={ this.delete.bind(this) }></i>
					</div>
				</Link>
			</div>
		)
	}

}