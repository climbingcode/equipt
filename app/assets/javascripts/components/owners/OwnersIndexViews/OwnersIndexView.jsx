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

		var noProducts = 	<Link 	to="equipmentCreate">
								<div className="equipment-container col-xs-4">
									<div className="equipment-add well">
										<i className="fa fa-plus fa-5"/>
										<h4>Click to Add equipment</h4>
									</div>
								</div>
							</Link>			

		return (
			<div className="owners-equipment-wrapper equipment-wrapper">
				{ equipmentListing }
				{ noProducts }
			</div>
		)

	}

}