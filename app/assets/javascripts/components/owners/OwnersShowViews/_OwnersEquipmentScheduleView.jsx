Equipt.views.OwnersEquipmentScheduleView = class OwnersEquipmentScheduleView extends React.Component {

	static contextTypes = {
		router: React.PropTypes.func.isRequired
	}

	selectedOccupiedDates(dates) {
		debugger;
	}

	render() {

		const Calendar = Equipt.views.Calendar;
		
		let userId = Equipt.stores.AuthStore.getUserId();

		return (
			<div className="owners-rental-schedule">
				<Link to="ownersIndex" params={{userId: userId}}>
					Back to equipment
				</Link>
				<Calendar 	selectedDates={ this.selectedOccupiedDates }
							rental={ this.props.rental }
						 	rentals={ this.props.equipment.rentals || [] }/>
			</div>
		)
	}

}