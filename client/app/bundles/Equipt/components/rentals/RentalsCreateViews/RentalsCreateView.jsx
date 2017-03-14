Equipt.views.RentalsCreateView = class RentalsCreateView extends React.Component {

	static contextTypes = {
		router: React.PropTypes.func.isRequired
	}

	static propType = {
		equipment: React.PropTypes.object.required,
		rentals: React.PropTypes.array.required,
		rental: React.PropTypes.object.required,
		hasCreatedRental: React.PropTypes.bool.required,
		owner: React.PropTypes.object.required,
		selectDates: React.PropTypes.object.required,
		selectTime: React.PropTypes.object.required,
		agreedToTerms: React.PropTypes.bool.required,
		rent: React.PropTypes.func.required,
		agreedToTermsChanged: React.PropTypes.func.required
	}

	render() {

		const Calendar 				  = Equipt.views.Calendar;
		const RentalsPickUpTimeView   = Equipt.views.RentalsPickUpTimeView;
		const RentalsConfirmationView = Equipt.views.RentalsConfirmationView;

		let owner = this.props.equipment.owner || {};

		if (this.props.hasCreatedRental) {
			return (
				<RentalsConfirmationView 	equipment={ this.props.equipment }
											rental={ this.props.rental }
											owner={ this.props.owner }
				/>
			)
		}

		return (
			<div className="rentals-create-container">
				<Calendar 	selectedDates={ this.props.selectDates }
							rentals={ this.props.rentals }
							rental={ this.props.rental } />
				
				<h4>Pick Up Time</h4>

				<RentalsPickUpTimeView 	selectTime={ this.props.selectTime }
										availabilities={ owner.availabilities } 
										selectedTime={ this.props.rental.times }
				/>

				<div className="clearfix"></div>
				
				<input  type="checkbox"
						ref="agreedToTerms"
						onChange={ this.agreedToTermsClicked.bind(this) }
						defaultChecked={ this.props.agreedToTerms }
				/>

				<span>I agree to the rental terms and conditions</span>

				<button className="btn btn-success col-sm-12" 
						disabled={ this.canRent() }
						onClick={ this.props.rent }>
						Rent
				</button>
				
			</div>
		)
	}

	canRent() {
		return 	!this.props.rental.pickup_date
				|| !this.props.rental.times;
	}

	agreedToTermsClicked() {
		let input = this.refs.agreedToTerms || {};
		Equipt.actions.agreedToRentalTermsChanged( input.checked );
	}

}