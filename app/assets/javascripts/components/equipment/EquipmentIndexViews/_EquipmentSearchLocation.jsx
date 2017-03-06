Equipt.views.EquipmentSearchLocation = class EquipmentSearchLocation extends React.Component {

	searchForm() {

		let input 	  = this.refs.searchLocation;
		let searchBox = new google.maps.places.SearchBox(input);

		searchBox.addListener('places_changed', () => {
			this.place = searchBox.getPlaces()[0];
			this.searchLocation( searchBox );	
		});

	}

	searchLocation() {

		let searchObj = this.props.search;
		let place = this.place;

		if (!place) return;

		searchObj.location = {
    		lat: place.geometry.location.lat(),
    		lng: place.geometry.location.lng(),
    		range: this.range || { from: 0, to: 5 }
    	};

		Equipt.actions.getEquipment(searchObj);

	}

	componentDidMount() {
		if (window.google) {
			this.searchForm();
		} else {
			window.googleMapsLoaded = () => {
				this.searchForm();
			}
		}
	}

	rangeUpdated(range) {

		switch(range) {
			case 'Within 0-5km':
				this.range = { from: 0, to: 5 };
			break;
			case 'Within 6-10km':
				this.range = { from: 6, to: 10 };
			break;
			case 'Within 11-15km':
				this.range = { from: 11, to: 15 };
			break;
			case '15km+':
				this.range = { from: 16 };
			break;
		}

		this.searchLocation();

	}

	render() {

		const OptionsHelper = Equipt.helpers.OptionsHelper;

		let options = ['Within 0-5km', 'Within 6-10km', 'Within 11-15km', '16km+'];

		return (
			<div className="location-search-container col-lg-3 col-xs-12">
				<OptionsHelper 	ref="range"
								name="range"
								options={options}
								defaultOption="Within"
								onChange={this.rangeUpdated.bind(this)}/>
				<span> OF </span>
				<input  ref="searchLocation" 
						placeholder="location"
						className="form-control col-sm-3"/>
			</div>
		)
	}

}