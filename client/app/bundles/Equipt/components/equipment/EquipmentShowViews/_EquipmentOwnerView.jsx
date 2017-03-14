Equipt.views.EquipmentOwnerView = class EquipmentOwnerView extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {

		const MapView = Equipt.views.mapView;
		const EquipmentRatingView = Equipt.views.EquipmentRatingsView;
		const StarRating = Equipt.controllers.StarRating;

		let equipment = this.props.equipment || {};
		let owner 	  = equipment.owner || {};
		let ratings   = owner.ratings || [];

		return (
			<div className="equipment-owner-container">
				<MapView position={{ lat: owner.lat || 0, lng: owner.lng || 0 }}/>
				<h6>{`${owner.firstname} ${owner.lastname}`}</h6>
				<StarRating rating={ owner.review_score }/>
				<h6>Owners Reviews</h6>
				<EquipmentRatingView ratings={ ratings }/>
			</div>
		)
	}
}