Equipt.views.Calendar = class Calendar extends React.Component {

	constructor(props) {
		super(props);
	}

    haveDatesChanged(nextProps) {
        
        let oldDates = this.props.rental;
        let newDates = nextProps.rental;

        if (!!oldDates.pickup_date && !!oldDates.dropoff_date) {
            return !oldDates.pickup_date.isSame(newDates.pickup_date)
            && !oldDates.dropoff_date.isSame(newDates.dropoff_date);
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

        if (!rental.pickup_date || !rental.dropoff_date) return;
            
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

    componentWillUpdate() {

        if (this.loadedUnavailableDates) return;
        if (!this.props.rentals.length) return;

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

    selectedDatesString(start, end) {
        return `${ start.format('dddd MM/DD/YYYY') } to ${ end.format('dddd MM/DD/YYYY') } selected`;
    }

    buildCalendar(rentals) {

        const {calendar} = this.refs;

        // Full Calendar settings
        var fullCalendarSettings = {
            header: {
                left: 'prev,next today',
                center: 'title'  
            },
            // events: events,
            select: (start, end, allDay) => {

                let startDate = start;
                let todaysDate = moment();
                let tomorrowsDate = start.add(1);

                if (tomorrowsDate >= todaysDate) {                
                    this.props.selectedDates({
                        pickup_date: startDate,
                        dropoff_date: end
                    });
                    hasNotice({ info: this.selectedDatesString(start, end) });
                } else {
                    hasNotice({ error: Equipt.content.passedDate });
                }

            }, 
            viewRender: function(view) {
                let now = new Date(); 
                let end = new Date();
                end.setMonth(now.getMonth() + 1); 
                let cal_date_string = view.start.format('MM')+'/'+view.start.format('YYYY');
                let cur_date_string = now.getMonth()+'/'+now.getFullYear();
                let end_date_string = end.getMonth()+'/'+end.getFullYear();

                if(cal_date_string == cur_date_string) { jQuery('.fc-prev-button').addClass("fc-state-disabled"); }
                else { jQuery('.fc-prev-button').removeClass("fc-state-disabled"); }

                if(end_date_string == cal_date_string) { jQuery('.fc-next-button').addClass("fc-state-disabled"); }
                else { jQuery('.fc-next-button').removeClass("fc-state-disabled"); }

            },
            eventLimit: true, // for all non-agenda views
            selectable: true,
            selectHelper: false,
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
        Equipt.stores.RentalStore.clearRentals();
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