Equipt.views.EquipmentItemView = class EquipmentItemView extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {

		var equipment = this.props.equipment;

		let image = equipment.images.length ? equipment.images[0].file.url : '/assets/equipment-default.png';

		return(
			<div className="equipment-container col-xs-4">
				<Link to="equipmentAvailability" params={{ id: equipment.id }}>
					<div className="well">
						<h2>{equipment.equipment_name && equipment.equipment_name.capitalize()}</h2>
						<h4>{equipment.brand}</h4>
						<img className="img-responsive center-block" src={image}/>
						<h5>{equipment.model}</h5>
						<p>Price Per Day: ${ equipment.price_per_day }</p>
						<p>Deposit: ${ equipment.desposit_amount }</p>
					</div>
				</Link>
			</div>
		)
	}

}

Equipt.views.EquipmentItemView.contextTypes = {
	router: React.PropTypes.func.isRequired
};