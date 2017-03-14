Equipt.views.EquipmentItemView = class EquipmentItemView extends React.Component {

	static propType = {
		equipment: React.PropTypes.object.isRequired
	}	

	render() {

		const StarRating = Equipt.controllers.StarRating;

		let equipment = this.props.equipment;

		let image = equipment.primary_image || Constants.styles.defaultEquiptmentImage;

		return(
			<div className="equipment-container col-lg-4 col-md-6 col-xs-12">
				<Link to="equipmentAvailability" params={{ id: equipment.id }}>
					<div className="product-container">

						<div className="primary-image-container">
							<img className="img-responsive center-block" src={image}/>
						</div>

						<div className="product-info-container">
							<h3>{equipment.equipment_name && equipment.equipment_name.capitalize()}</h3>
							<h4>Brand: {equipment.brand}</h4>
							<h4>Model: {equipment.model}</h4>

							<div className="product-prices-container">
								<p>Deposit: ${ equipment.desposit_amount }</p>
								<p>Price Per Day: ${ equipment.price_per_day }</p>
								<p>Price Per Week: ${ equipment.price_per_week }</p>
							</div>

							<div className="product-ratings-container">
								<StarRating rating={ Math.round(equipment.review_score) }/>
							</div>

						</div>

					</div>
				</Link>	
			</div>
		)
	}

}

Equipt.views.EquipmentItemView.contextTypes = {
	router: React.PropTypes.func.isRequired
};