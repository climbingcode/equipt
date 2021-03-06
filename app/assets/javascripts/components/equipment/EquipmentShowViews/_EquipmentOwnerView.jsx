Equipt.views.EquipmentOwnerView = class EquipmentOwnerView extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {

		let equipment = this.props.equipment || {};
		let owner 	  = equipment.owner;

		if (!owner) return(<div></div>);

		return (
			<div className="equipment-owner-container">
				<h5>{`${owner.firstname.capitalize()} ${owner.lastname.capitalize()}`}</h5>
				<h6>Owners Reviews</h6>
				{owner.ratings.map(function(rating, i) {
					return <div className="rating" key={`owners_rating_${i}`}>
								<StarRating rating={rating.score}/>
								<p>{rating.comment}</p>
							</div>
				})}
			</div>
		)
	}
}