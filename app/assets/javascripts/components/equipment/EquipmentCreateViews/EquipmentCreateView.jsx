Equipt.views.EquipmentCreateView = class extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {

		let EquipmentCreateFormView = Equipt.views.EquipmentCreateFormView;

		let userId = this.props.userId;

		return (
			<div className="add-equipment-wrapper">
				<Link 	to="ownersIndex" 
					 	params={{userId: userId}}
					 	className="btn btn-success">
						Your added Equipment
				</Link>
				<EquipmentCreateFormView/>
			</div>
		)

	}

}