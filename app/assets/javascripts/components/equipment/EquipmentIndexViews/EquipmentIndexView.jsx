class EquipmentIndexView extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {

		var equipmentListing = [];

		for (var i = 0; i < this.props.equipment.length; i++) {
			let equipment 	  = this.props.equipment[i];
			let equipmentItem = <EquipmentItemPartial 
									key={`equipment_${equipment.id}`} 
									equipment={equipment}/>;
			equipmentListing.push(equipmentItem);
		}

		return (
			<div className="equipment-wrapper">
				{equipmentListing}
			</div>
		)
		
	}


}