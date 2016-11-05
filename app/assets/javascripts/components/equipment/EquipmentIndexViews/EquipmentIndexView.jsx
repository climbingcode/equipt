Equipt.views.EquipmentIndexView = class EquipmentIndexView extends React.Component {

	static propType = {
		equipment: React.PropTypes.object.isRequired
	}	

	render() {
		
		const EquipmentItemView   = Equipt.views.EquipmentItemView;
		const EquipmentSearchView = Equipt.views.EquipmentSearchView;
		const CampFireView 		  = Equipt.views.campFireView
		
		let equipment = this.props.equipment || [];

		let waitingForOrLoading;

		if (this.props.showLoader) {
			waitingForOrLoading =   <div className="equipment-ajax-loader-wrapper">
										<CampFireView/>
									</div>;
		} else if (!equipment.length) {
			waitingForOrLoading = <h3>No Matching Equipment Found</h3>
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
				{ waitingForOrLoading }
				<RouteHandler/>	
			</div>
		)
		
	}

}