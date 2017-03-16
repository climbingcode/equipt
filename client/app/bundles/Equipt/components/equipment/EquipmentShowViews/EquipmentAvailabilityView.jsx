import React from 'react';

class EquipmentAvailabilityView extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {

		const RentalsCreateController = Equipt.controllers.RentalsCreateController;
		
		let equipment = this.props.equipment;

		return (
			<div className="equipment-availability-container">
				<RentalsCreateController equipment={equipment}/>
			</div>
		)
	}

}

export { EquipmentAvailabilityView };