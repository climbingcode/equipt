class Equipment extends React.Component {

	constructor(props) {
		super(props);
	}

	componentWillMount() {
		getEquipment();
	}

	render() {
		return (
			<div className="equiptment-wrapper">
				<h1>Equipment</h1>
			</div>
		)
	}

}