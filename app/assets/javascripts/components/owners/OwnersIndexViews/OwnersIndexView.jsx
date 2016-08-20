Equipt.views.OwnersIndexView = class extends React.Component {

	constructor(props) {
		super(props);
	}

	render()  {

		let OwnersEquipmentItemView = Equipt.views.OwnersEquipmentItemView;

		let equipmentListing = [];
		let userId = Equipt.stores.AuthStore.getUserId();

		for (var i = 0; i < this.props.equipment.length; i++) {
			let equipment 	  = this.props.equipment[i];
			let equipmentItem = <OwnersEquipmentItemView 
									key={`equipment_${equipment.id}`} 
									equipment={equipment}
									userId={userId} />;
			equipmentListing.push(equipmentItem);
		}

		return (
			<div className="owners-equipment-wrapper equipment-wrapper">
				<div>
					<Link   to="equipmentCreate"
							className="btn btn-success">
							Add Equipment
					</Link>
				</div>
				{equipmentListing}
			</div>
		)

	}

}