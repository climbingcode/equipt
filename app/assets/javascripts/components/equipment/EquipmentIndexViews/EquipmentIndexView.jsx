Equipt.views.EquipmentIndexView = class EquipmentIndexView extends React.Component {

	static propType = {
		equipment: React.PropTypes.object.isRequired,
		pages: React.PropTypes.number.isRequired
	}	

	pageChange(page) {
		this.props.search.page = page;
		Equipt.actions.getEquipment(this.props.search);
	}

	render() {
		
		const EquipmentItemView    = Equipt.views.EquipmentItemView;
		const EquipmentSearchView  = Equipt.views.EquipmentSearchView;
		const CampFireView 		   = Equipt.views.campFireView
		const PaginationView 	   = Equipt.views.PaginationView; 
		
		let equipment = this.props.equipment || [];

		let waitingForOrLoading;

		if (this.props.showLoader) {
			waitingForOrLoading =   <div className="equipment-ajax-loader-wrapper">
										<CampFireView/>
									</div>;
		} else if (!equipment.length) {
			waitingForOrLoading = <h3>No Matching Equipment Found</h3>
		}

		let pagination = <PaginationView pages={ this.props.pages }
										 pageChange={ this.pageChange.bind(this) } />

		return (

			<div className="equipment-wrapper">
				<EquipmentSearchView search={ this.props.search }/>
				{ pagination }
				{
					equipment.map((equipment, index) => {
						return <EquipmentItemView 
									key={`equipment_${index}`} 
									equipment={equipment} />
					})
				}
				{ waitingForOrLoading }
				{ pagination } 
				<RouteHandler/>	
			</div>
		)
		
	}

}