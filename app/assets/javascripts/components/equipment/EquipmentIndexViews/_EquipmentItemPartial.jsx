class EquipmentItemPartial extends React.Component {

	constructor(props) {
		super(props);
	}

	selectedEquipment(equipment) {
		let path = Constants.links.equipmentShow;
		this.context.router.transitionTo(path, {id: equipment.id});
	}

	render() {

		var equipment = this.props.equipment;

		return(
			<div className="equipment-container col-xs-4">
				<Link to="equipmentShow" params={{ id: equipment.id }}>
					<div className="well">
						<h2>{equipment.equipment_name.capitalize()}</h2>
						<h4>{equipment.brand}</h4>
						<img className="img-responsive center-block" src="/assets/equipment-default.png"/>
						<h5>{equipment.model}</h5>
						<p>Price Per Day: ${ equipment.price_per_day }</p>
						<p>Deposit: ${ equipment.desposit_amount }</p>
					</div>
				</Link>
			</div>
		)
	}

}

EquipmentItemPartial.contextTypes = {
	router: React.PropTypes.func.isRequired
};