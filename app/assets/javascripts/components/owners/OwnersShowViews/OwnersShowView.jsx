Equipt.views.OwnersShowView = class OwnersShowView extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {

		const EquipmentAvailabilityView = Equipt.views.EquipmentAvailabilityView;
			
		return (
			<EquipmentAvailabilityView { ...this.props }/>
		)
	}

};