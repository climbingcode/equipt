Equipt.views.EquipmentInfoView = class EquipmentInfoView extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {

		let Slider = Equipt.views.Slider;

		let equipment = this.props.equipment || {};
		let images    = this.props.equipment.images || [];

		return (
			<div className="equipment-info-view">
				<h5>{equipment.brand}</h5>
				<Slider images={images}/>
			</div>
		)
	}
}