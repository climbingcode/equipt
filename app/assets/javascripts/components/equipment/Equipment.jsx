class Equipment extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			equipment: []
		}
	}

	componentWillMount() {
		getEquipment();
	}

	componentDidMount() {
		EquipmentStore.addChangeListener(this._onChange.bind(this));
	}
  	
  	componentWillUnMount() {
    	EquipmentStore.addChangeListener(this._onChange.bind(this));
  	}

  	_onChange() {
  		this.setState({
  			equipment: EquipmentStore.getEquipment()
  		});
  	}

	render() {
		return (
			<div className="equiptment-wrapper">
				<EquipmentIndex equipment={this.state.equipment}/>
			</div>
		)
	}

}