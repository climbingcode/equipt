class EquipmentItemView extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {

		var equipment = this.props.equipment;

		return(
			<div className="equipment-container col-xs-4">
				<Link to="equipmentAvailability" params={{ id: equipment.id }}>
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

EquipmentItemView.contextTypes = {
	router: React.PropTypes.func.isRequired
};