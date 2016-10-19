Equipt.views.Calendar = class Calendar extends React.Component {

	constructor(props) {
		super(props);
	}

    haveDatesChanged(nextProps) {
        let oldDates = this.props.rental;
        let newDates = nextProps.rental;

        if (!!oldDates.pickup_date && !!oldDates.dropoff_date) {
            return !oldDates.pickup_date.isSame(newDates.pickup_date)
            || !oldDates.dropoff_date.isSame(newDates.dropoff_date);
        }

        return false;
    }

    shouldComponentUpdate(nextProps, state) { 
        return this.loadedUnavailableDates != true
        || this.haveDatesChanged(nextProps)
    }
  
    componentWillReceiveProps() {

        const {calendar} = this.refs;

        let rental = this.props.rental;

        if (rental.pickup_date && rental.dropoff_date) {   
            
            // Selected Dates
            let event = {
                id: 1,
                title: 'selected',
                start: rental.pickup_date,
                end: rental.dropoff_date,
                color: '#8FC485'
            };

            $(calendar).fullCalendar('removeEvents', 1);
            $(calendar).fullCalendar('renderEvent', event);

        }

    }

    componentWillUpdate() {

        if (this.loadedUnavailableDates) return;

        const {calendar} = this.refs;

        // Unavailable Dates
        var events = this.props.rentals.map((rental, i) => {
            this.loadedUnavailableDates = true;
            return {
                id: rental.id,
                title: 'rented',
                start: rental.pickup_date,
                end: rental.dropoff_date,
                color: 'red'
            }
        });


        $(calendar).fullCalendar('addEventSource', events);

    }

    buildCalendar(rentals) {

        const {calendar} = this.refs;

        // Full Calendar settings
        var fullCalendarSettings = {
            // events: events,
            select: (start, end, allDay) => {
                Equipt.actions.selectedRentalDates({
                    pickup_date: start,
                    dropoff_date: end
                });
            }, 
            eventLimit: true, // for all non-agenda views
            selectable: true,
            selectOverlap: false,
            selectHelper: true,
            contentHeight: 400,
            views: {
                agenda: {
                    eventLimit: 1 // adjust to 6 only for agendaWeek/agendaDay
                }
            }
        };

        // eventTrackers
        $(calendar).fullCalendar(fullCalendarSettings); 

    }

    componentWillUnmount() {
        const {calendar} = this.refs;
        this.loadedUnavailableDates = false;
        $(calendar).fullCalendar('destroy');
    }

    componentDidMount() {
        let rentals = this.props.rentals;
        this.buildCalendar(rentals);
    }

    render() {

		return (
			<div ref="calendar"></div>
		);
	}

}