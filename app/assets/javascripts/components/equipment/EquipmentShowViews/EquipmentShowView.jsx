Equipt.views.EquipmentShowView = class EquipmentShowView extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {

		let ModalView = Equipt.views.ModalView;
		let EquipmentTabsView = Equipt.views.EquipmentTabsView;

		let equipment   = this.props.equipment;

		return (
			<div className="col-sm-12">	
				<Link to="equipmentIndex">Back to equipment list</Link>					
				<EquipmentTabsView equipment={equipment}/>
				<RouteHandler equipment={ equipment }/>
			</div>
		)
	}
}