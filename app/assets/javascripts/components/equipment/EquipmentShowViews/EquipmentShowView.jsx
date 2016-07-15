class EquipmentShowView extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {

		let equipment = this.props.equipment;

		return (
			<div className="modal equipment-show-wrapper">
				<div className="modal-dialog">
					<div className="close pull-right">
						<Link to="equipmentIndex">
							<i className="fa fa-times-circle" aria-hidden="true"></i>
						</Link>
					</div>
					<h2>{ equipment.equipment_name }</h2>
					<p>{ equipment.description }</p>
				</div>
			</div>
		)
	}

}