class StarRating extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {

		let rating = this.props.rating;
		let stars = [];

		for (var i = 0; i < 5; i++) {

			if (i <= rating) {
				stars.push(<li 	className="fa fa-star" 
								aria-hidden="true"
								key={`star_${i}`}></li>);
			} else {
				stars.push(<li 	className="fa fa-star-o" 
								aria-hidden="true"
								key={`star_${i}`}></li>);
			}

		}

		return (
			<ul className="star-container">
				{stars}
			</ul>
		)
	}

}