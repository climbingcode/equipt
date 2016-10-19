Equipt.views.OwnersEquipmentScheduleView = class OwnersEquipmentScheduleView extends React.Component {

	static contextTypes = {
		router: React.PropTypes.func.isRequired
	}

	render() {

		const Calendar = Equipt.views.Calendar;
		
		let userId   = Equipt.stores.AuthStore.getUserId();

		return (
			<div className="owners-rental-schedule">
				<Link to="ownersIndex" params={{userId: userId}}>
					Back to equipment
				</Link>
				<Calendar 	rental={ this.props.rental }
						 	rentals={ this.props.equipment.rentals || [] }/>
			</div>
		)
	}

}