Equipt.views.EquipmentIndexView = class EquipmentIndexView extends React.Component {

	static propType = {
		equipment: React.PropTypes.object.isRequired
	}	

	render() {
		
		const EquipmentItemView   = Equipt.views.EquipmentItemView;
		const EquipmentSearchView = Equipt.views.EquipmentSearchView;
		
		let equipment = this.props.equipment || [];

		let noMatchingEquipment;

		if (!equipment.length) {
			noMatchingEquipment = <h3>No Matching Equipment Found</h3>
		}

		return (

			<div className="equipment-wrapper">
				<EquipmentSearchView search={ this.props.search }/>
				{
					equipment.map((equipment, index) => {
						return <EquipmentItemView 
									key={`equipment_${index}`} 
									equipment={equipment}/>
					})
				}
				{ noMatchingEquipment }
				<RouteHandler/>	
			</div>
		)
		
	}

}