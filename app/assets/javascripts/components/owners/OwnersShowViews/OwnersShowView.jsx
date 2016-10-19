Equipt.views.OwnersShowView = class OwnersShowView extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {

		const OwnersEquipmentScheduleView = Equipt.views.OwnersEquipmentScheduleView;
			
		return (
			<OwnersEquipmentScheduleView { ...this.props }/>
		)
	}

};