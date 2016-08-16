Equipt.views.EquipmentInfoView = class EquipmentInfoView extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {

		var equipment = this.props.equipment;

		return (
			<h5>{equipment.brand}</h5>
		)
	}
}