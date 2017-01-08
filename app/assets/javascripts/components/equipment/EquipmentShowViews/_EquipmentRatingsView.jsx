Equipt.views.EquipmentRatingsView = class EquipmentInfoView extends React.Component {

	static PropTypes = {
		ratings: React.PropTypes.array.isRequired
	}

	render() {

		let StarRating = Equipt.controllers.StarRating;

		let ratings = this.props.ratings || [];
		
		return (
			<div className="equipment-ratings-container">
				<h5><b>Ratings</b></h5>
				<ul>
				{
					ratings.map((rating, index) => {
						return 	<li className="equipment-rating"
									key={ `equipment_rating_${ index }` }>
									<p>{ rating.comment }</p>
									<StarRating rating={ rating.score }/>
									<i className="created-date">{ `created ${ rating.time_ago } ago` }</i>
								</li>
					})
				}
				</ul>
			</div>
		)

	}

}