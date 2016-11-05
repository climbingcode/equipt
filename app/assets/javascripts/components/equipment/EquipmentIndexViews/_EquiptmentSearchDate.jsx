Equipt.views.EquiptmentSearchDate = class EquiptmentSearchDate extends React.Component {

	static propType = {
		search: React.PropTypes.object.isRequired,
		selected: React.PropTypes.func.isRequired
	}

	dateChanged(dates) {
		if (dates.pickup && dates.dropoff) {
			let searchObj   = this.props.search;
			searchObj.dates = dates;
			Equipt.actions.getEquipment(searchObj);
		}
	}

	componentDidMount() {

		let $datepicker = $(this.refs.datePicker).daterangepicker();

		$datepicker.on('apply.daterangepicker', (ev, picker) => {
  			this.dateChanged({
  				dropoff: picker.startDate.format('YYYY/MM/DD'),
  				pickup: picker.endDate.format('YYYY/MM/DD')
  			});
		});

	}

	render() {
		return (
			<div ref="datePicker" className="col-lg-1 col-xs-12 equipment-date-search-container">
			    <i className="glyphicon glyphicon-calendar fa fa-calendar"></i>&nbsp;
    			<span></span> 
    			<b className="caret"></b>
            </div>

		)
	}

}