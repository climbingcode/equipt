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
                title: 'rented',
                start: rental.pickup_date,
                end: rental.dropoff_date,
                color: 'red'
            }
        });

        // Selected Dates
        if (this.props.dates.start) {
            events.push({
                title: 'selected',
                start: RentalStore.getRentalDates().start,
                end: RentalStore.getRentalDates().end,
                color: 'green'
            });
        }

        var fullCalendarSettings = {
            events: events,
            select: (start, end, allDay) => {
                this.props.selectedDates(start, end);
            }, 
            eventLimit: true, // for all non-agenda views
            selectable: true,
            selectHelper: true,
            views: {
                agenda: {
                    eventLimit: 1 // adjust to 6 only for agendaWeek/agendaDay
                }
            }
        };

        $(calendar).fullCalendar('destroy');
        $(calendar).fullCalendar(fullCalendarSettings); 
        if (this.props.dates.start) $(calendar).fullCalendar('gotoDate', this.props.dates.start);

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