class EquipmentItem extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {

		var equipment = this.props.equipment;

		return(
			<div className="equipment-container col-xs-3">
				<h3>{equipment.brand}</h3>
				<p>{equipment.equipment_name}</p>
				<h5>{equipment.model}</h5>

				<p>Price Per Day: ${ equipment.price_per_week }</p>
				<p>Deposit: ${ equipment.desposit_amount }</p>
			</div>
		)
	}

}