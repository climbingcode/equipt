class EquipmentOwnerView extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {

		var owner = this.props.equipment.user;
		if (!owner) return(<div></div>);

		return (
			<div className="equipment-owner-container">
				<h5>{`${owner.firstname.capitalize()} ${owner.lastname.capitalize()}`}</h5>
				<h6>Owners Reviews</h6>
				{owner.ratings.map(function(rating, i) {
					return <div className="rating" key={`owners_rating_${i}`}>
								<p>{rating.score}</p>
								<p>{rating.comment}</p>
							</div>
				})}
			</div>
		)
	}
}