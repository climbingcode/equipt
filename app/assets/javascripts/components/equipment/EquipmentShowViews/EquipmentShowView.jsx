class EquipmentShowView extends React.Component {

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
    	rentEquipment(equipmentId, {
    		rental: {			
	    		pickup_date: RentalStore.getRentalDates().start.format(),
				dropoff_date: RentalStore.getRentalDates().end.format(),
				pick_up_time: RentalStore.getRentalTime(),
				rental: RentalStore.getRental()
    		}
    	});
    	this.context.router.transitionTo('equipmentConfirmation', {
    		id: equipmentId
    	});
    }

	render() {

		
		let equipment   = EquipmentStore.getEquipment();
		
		if (this.props.rentalDates) {
			let datesObj 	=  RentalStore.getRentalDates();
			var rentalDates = `Rent from ${datesObj.start.format()} till ${datesObj.end.format()}`;
		}

		return (
			<div className="equipment-show-wrapper">
				<Link to="equipmentIndex">
					<div className="mask"></div>
				</Link>
				<div className="modal">
					<div className="modal-top-container col-sm-12">
						<div className="col-sm-2">
							<button className="btn btn-success" 
									disabled={rentalDates ? false : true}
									onClick={this.rentEquipment.bind(this)}>
									Rent
							</button>
						</div>
						<h4 className="rental-dates-header col-sm-8">{rentalDates}</h4>
						<div className="close col-sm-2">
							<Link to="equipmentIndex">
								<i className="fa fa-times-circle pull-right" 
								   aria-hidden="true">
								</i>
							</Link>
						</div>
					</div>
					<div className="modal-dialog">						
						<EquipmentTabsView equipment={equipment}/>
						<div className="container col-sm-12">
							<RouteHandler equipment={equipment} 
										  rentalDates={this.props.rentalDates}
										  rentalTime={this.props.rentalTime}
										  rental={this.props.rental}/>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

EquipmentShowView.contextTypes = {
	router: React.PropTypes.func.isRequired
};