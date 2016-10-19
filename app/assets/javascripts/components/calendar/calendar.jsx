Equipt.views.Calendar = class Calendar extends React.Component {

	constructor(props) {
		super(props);
	}

    componentWillReceiveProps() {

        const {calendar} = this.refs;

        let rental = this.props.rental;

        // Unavailable Dates
        var events = this.props.rentals.map((rental, i) => {
            return {
                id: rental.id,
                title: 'rented',
                start: rental.pickup_date,
                end: rental.dropoff_date,
                color: 'red'
            }
        });

        if (rental.pickup_date && rental.dropoff_date) {   
            
            // Selected Dates
            events.push({
                id: 1,
                title: 'selected',
                start: rental.pickup_date,
                end: rental.dropoff_date,
                color: '#8FC485'
            });

        }
        
        $(calendar).fullCalendar('removeEvents', 1); 
        $(calendar).fullCalendar('addEventSource', events);    

    }

    buildCalendar(rentals) {

        const {calendar} = this.refs;

        // Full Calendar settings
        var fullCalendarSettings = {
            // events: events,
            select: (start, end, allDay) => {              
                this.props.selectedDates({
                    pickup_date: start,
                    dropoff_date: end
                });
            }, 
            eventLimit: true, // for all non-agenda views
            selectable: true,
            selectOverlap: true,
            selectHelper: true,
            contentHeight: 200,
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