Equipt.views.OwnersShowView = class OwnersShowView extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {

		let EquipmentAvailabilityView = Equipt.views.EquipmentAvailabilityView;
		let ModalView = Equipt.views.ModalView;

		let modalParams = {
			userId: this.props.userId
		}
		
		return (
			<ModalView closeTo="ownersIndex" params={modalParams}>
				<EquipmentAvailabilityView { ...this.props }/>
			</ModalView>
		)
	}

};