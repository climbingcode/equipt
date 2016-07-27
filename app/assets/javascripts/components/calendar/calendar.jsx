class Calendar extends React.Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {
	  	var rentals	= this.props.rentals ? this.props.rentals : [];
        this.buildCalendar(rentals);
	}

  	componentWillReceiveProps() {
  		var equipment = EquipmentStore.getEquipment() ? EquipmentStore.getEquipment() : [];
        this.buildCalendar(equipment.rentals);
  	}

    buildCalendar(rentals) {

        if (!rentals) return;
        const {calendar} = this.refs;

        // Unavailiable Dates
        var events = rentals.map(function(rental, i) {
            return {
                id: rental.id,
                title: 'rented',
                start: rental.pickup_date,
                end: rental.dropoff_date,
                color: 'red'
            }
        });

        // Selected Dates
        if (RentalStore.getRentalDates()) {
            events.push({
                title: 'selected',
                start: RentalStore.getRentalDates().start,
                end: RentalStore.getRentalDates().end,
                color: '#8FC485'
            });
        }

        // Full Calendar settings
        var fullCalendarSettings = {
            events: events,
            select: (start, end, allDay) => {
                this.props.selectedDates(start, end);
            }, 
            eventLimit: true, // for all non-agenda views
            selectable: true,
            selectOverlap: false,
            selectHelper: true,
            contentHeight: 200,
            views: {
                agenda: {
                    eventLimit: 1 // adjust to 6 only for agendaWeek/agendaDay
                }
            }
        };

        // eventTrackers
        $(calendar).fullCalendar('destroy');
        $(calendar).fullCalendar(fullCalendarSettings); 

        // Move calendar to selected month
        if (this.props.rentalDates) {
            $(calendar).fullCalendar('gotoDate', RentalStore.getRentalDates().start);
        }

    }

  	componentWillUnmount() {
  		const {calendar} = this.refs;
  		$(calendar).fullCalendar('destroy');
  	}

	render() {
		return (
			<div ref="calendar"></div>
		);
	}

}