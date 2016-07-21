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

	render() {

		let equipment   = this.props.equipment;
		let equipmentId = equipment.id ? equipment.id : 0;
		let tabOptions  = ['Availability', 'Info', 'Owner'];
		
		if (this.props.rentalDates.start) {
			let datesObj 	=  this.props.rentalDates;
			var rentalDates = `Rent from ${datesObj.start.format()} till ${datesObj.end.add('day', -1).format()}`;
		}

		return (
			<div className="equipment-show-wrapper">
				<Link to="equipmentIndex">
					<div className="mask"></div>
				</Link>
				<div className="modal">
					<div className="modal-top-container col-sm-12">
						<div className="col-sm-4">
							<button className="btn btn-success" 
									disabled={rentalDates ? false : true}>
									Rent
							</button>
						</div>
						<h4 className="col-sm-4">{rentalDates}</h4>
						<div className="close col-sm-4">
							<Link to="equipmentIndex">
								<i className="fa fa-times-circle pull-right" 
								   aria-hidden="true">
								</i>
							</Link>
						</div>
					</div>
					<div className="modal-dialog">						
						<div className="equipment-info-tabs tabs">
							{tabOptions.map(function(tabName, i) {
								return 	<Link to={`equipment${tabName}`}
											  params={{ id: equipmentId }}
											  key={`equipment-tab-${i}`}>
											<div className="col-sm-4 tab">
												{tabName}
											</div>
										</Link>
							})}
						</div>
						<div className="container col-sm-12">
							<RouteHandler equipment={equipment} 
										  rentalDates={this.props.rentalDates}/>
						</div>
					</div>
				</div>
			</div>
		)
	}

}