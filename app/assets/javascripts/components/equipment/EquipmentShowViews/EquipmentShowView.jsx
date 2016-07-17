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

		return (
			<div className="equipment-show-wrapper">
				<Link to="equipmentIndex">
					<div className="mask"></div>
				</Link>
				<div className="modal">
					<div className="close pull-right">
						<Link to="equipmentIndex">
							<i className="fa fa-times-circle" aria-hidden="true"></i>
						</Link>
					</div>
					<div className="modal-dialog">						
						<div className="equipment-info-links">
							{tabOptions.map(function(tabName, i) {
								return 	<div 	className="col-sm-4" 
												key={`equipment-tab-${i}`}>
											<Link 	to={`equipment${tabName}`}
													params={{ id: equipmentId }}>
													{tabName}
											</Link>
										</div>
							})}
						</div>
						<div className="container col-sm-12">
							<RouteHandler equipment={equipment}/>
						</div>
					</div>
				</div>
			</div>
		)
	}

}