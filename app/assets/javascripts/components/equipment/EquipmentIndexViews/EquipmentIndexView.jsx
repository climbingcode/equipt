Equipt.views.EquipmentIndexView = class EquipmentIndexView extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		
		const equipmentList = this.props.equipment || [];

		let EquipmentItemView   = Equipt.views.EquipmentItemView;
		let EquipmentSearchView = Equipt.views.EquipmentSearchView;
		
		var equipmentListing = [];

		for (let i = 0; i < equipmentList.length; i++) {
			let equipment 	  = equipmentList[i];
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