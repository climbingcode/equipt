Equipt.views.EquipmentItemView = class EquipmentItemView extends React.Component {

	static propType = {
		equipment: React.PropTypes.object.isRequired
	}	

	render() {

		let equipment = this.props.equipment;

		let image = equipment.images.length ? equipment.images[0].file.url : '/assets/equipment-default.png';

		return(
			<div className="equipment-container col-lg-4 col-md-6 col-xs-12">
				<Link to="equipmentAvailability" params={{ id: equipment.id }}>
					<div className="well">
						<h2>{equipment.equipment_name && equipment.equipment_name.capitalize()}</h2>
						<h4>{equipment.brand}</h4>
						<h5>{equipment.model}</h5>
						<img className="img-responsive center-block" src={image}/>
						<p>Deposit: ${ equipment.desposit_amount }</p>
						<p>Price Per Day: ${ equipment.price_per_day }</p>
						<p>Price Per Week: ${ equipment.proce_per_week }</p>
					</div>
				</Link>	
			</div>
		)
	}

}

Equipt.views.EquipmentItemView.contextTypes = {
	router: React.PropTypes.func.isRequired
};