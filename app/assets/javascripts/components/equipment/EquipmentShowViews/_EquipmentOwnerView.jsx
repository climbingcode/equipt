class EquipmentOwnerView extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {

		var owner = this.props.equipment.user;
		if (!owner) return(<div></div>);

		return (
			<h5>{`${owner.firstname.capitalize()} ${owner.lastname.capitalize()}`}</h5>
		)
	}
}