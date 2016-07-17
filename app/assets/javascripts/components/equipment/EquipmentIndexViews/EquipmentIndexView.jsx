class EquipmentIndexView extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {

		var equipmentListing = [];

		for (var i = 0; i < this.props.equipments.length; i++) {
			let equipment 	  = this.props.equipments[i];
			let equipmentItem = <EquipmentItemView 
									key={`equipment_${equipment.id}`} 
									equipment={equipment}/>;
			equipmentListing.push(equipmentItem);
		}

		return (
			<div className="equipment-wrapper">
				<EquipmentSearchView/>
				{equipmentListing}
			</div>
		)
		
	}


}