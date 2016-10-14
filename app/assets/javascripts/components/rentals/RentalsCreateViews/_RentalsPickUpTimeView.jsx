Equipt.views.RentalsPickUpTimeView = class RentalsPickUpTimeView extends React.Component {

	constructor(props) {
		super(props);
	}


	render() {

		const selectedPickUpTime = Equipt.actions.selectedPickUpTime;

		let rentalTime = this.props.rental.times;

		return(
			<ul className="rental-pickup-times-wrapper">
				{
					[...Array(24)].map((value, index) => {
		
						let time = (index+1).toFixed(2);
						let klass = time == rentalTime ? 'col-sm-1 selected' : 'col-sm-1';
						return <li  className={klass}
								  	key={`${time}_selected`}
								  	onClick={ selectedPickUpTime.bind(this, time) }>
								  	{time}
								</li>;
						
					})
				}
			</ul>
		)

	}

}