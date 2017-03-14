Equipt.views.EquipmentInfoView = class EquipmentInfoView extends React.Component {

	constructor(props) {
		super(props);
	}

	getDefaultImage() {
		return [
			{
				file: {
					url: Constants.styles.defaultEquiptmentImage
				}
			}
		]
	}

	render() {

		const Slider 			   = Equipt.views.Slider;
		const EquipmentRatingsView = Equipt.views.EquipmentRatingsView;

		let equipment = this.props.equipment || {};
		let images    = this.props.equipment.images || [];

		if( !images.length ) images = this.getDefaultImage();
			

		return (
			<div className="equipment-info-view">
				<Slider images={ images } 
						speed={ 500 }
						slideWidth={ 500 }/>
				<div className="equipment-info-container">
					<b>Name</b>
					<p>{ equipment.equipment_name }</p>
					<b>Brand</b>
					<p>{ equipment.brand }</p>					
					<b>Model</b>
					<p>{ equipment.model }</p>
					<b>Age</b>
					<p>{ equipment.age }</p>
					<b>Description</b>
					<p>{ equipment.description }</p>
					<EquipmentRatingsView ratings={ equipment.ratings }/>
				</div>
			</div>
		)
	}
}