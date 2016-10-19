Equipt.views.EquipmentCreateView = class extends React.Component {

	render() {

		const EquipmentCreateFormView = Equipt.views.EquipmentCreateFormView;

		return (
			<div className="add-equipment-wrapper">
				<EquipmentCreateFormView { ...this.props } />
			</div>
		)

	}

}