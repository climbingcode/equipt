Equipt.views.EquipmentShowView = class EquipmentShowView extends React.Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		var componentContainer = ReactDOM.findDOMNode(this);
        var loader = document.createElement('div');
        loader.className = "loader";
        componentContainer.appendChild(loader);
	}

	componentWillReceiveProps() {
        var loader = document.getElementsByClassName('loader')[0];
        if (loader) loader.parentNode.removeChild(loader);
    }

    rentEquipment() {
    	
    	let equipmentId = this.props.equipment.id;

    	Equipt.actions.rentEquipment(equipmentId, {
    		pickup_date:  this.props.rentalDates.start.format(), 
    		dropoff_date: this.props.rentalDates.end.format(), 
    		pick_up_time: this.props.rentalTimes
    	});
 
    }

	render() {

		let ModalView = Equipt.views.ModalView;
		let EquipmentTabsView = Equipt.views.EquipmentTabsView;

		let equipment   = this.props.equipment;
		let takenNotice = null;
		
		if (this.props.rentalDates) {
			let datesObj 	=  Equipt.stores.RentalStore.getRentalDates();
			var rentalDates = `Rent from ${datesObj.start.format()} till ${datesObj.end.format()}`;
		}

		if (this.props.errors && this.props.errors.dates_are_taken) {
			takenNotice = 	<div className="alert-danger">
								<h2>{this.props.errors.dates_are_taken}</h2>
							</div>
		}

		return (

			<ModalView closeTo="equipmentIndex">
				<div className="equipment-show-wrapper">	
					<div className="col-sm-2">
						<button className="btn btn-success" 
								disabled={rentalDates ? false : true}
								onClick={this.rentEquipment.bind(this)}>
								Rent
						</button>
					</div>
					<h4 className="rental-dates-header col-sm-8">{rentalDates}</h4>
				</div>
				<div className="modal-dialog">						
					<EquipmentTabsView equipment={equipment}/>
					{takenNotice}
					<div className="container col-sm-12">
						<RouteHandler equipment={equipment} 
									  rentalDates={this.props.rentalDates}
									  rentalTime={this.props.rentalTime}
									  rental={this.props.rental}/>
					</div>
				</div>
			</ModalView>

		)
	}
}

Equipt.views.EquipmentShowView.contextTypes = {
	router: React.PropTypes.func.isRequired
};