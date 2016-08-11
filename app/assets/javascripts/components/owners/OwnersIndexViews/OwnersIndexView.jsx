class OwnersIndexView extends React.Component {

	constructor(props) {
		super(props);
	}

	render()  {

		var equipmentListing = [];

		for (var i = 0; i < this.props.equipment.length; i++) {
			let equipment 	  = this.props.equipment[i];
			let equipmentItem = <OwnersEquipmentItemView 
									key={`equipment_${equipment.id}`} 
									equipment={equipment}/>;
			equipmentListing.push(equipmentItem);
		}

		return (
			<div className="owners-equipment-wrapper">
				<div>
					<Link
						to="equipmentCreate"
						params={{id: AuthStore.getUserId()}}
						>Add Equipment
					</Link>
				</div>
				{equipmentListing}
			</div>
		)

	}

}