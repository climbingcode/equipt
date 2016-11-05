Equipt.views.EquipmentSearchLocation = class EquipmentSearchLocation extends React.Component {

	searchForm() {

		let input 	  = this.refs.searchLocation;
		let searchBox = new google.maps.places.SearchBox(input);

		searchBox.addListener('places_changed', () => {

			let place 	  = searchBox.getPlaces()[0];
			let searchObj = this.props.search;

			searchObj.location = {
        		lat: place.geometry.location.lat(),
        		lng: place.geometry.location.lng()
        	};

			Equipt.actions.getEquipment(searchObj);

		});

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

	render() {
		return (
			<div className="search-form-container col-lg-3 col-xs-12">
				<input ref="searchLocation" className="form-control"/>
			</div>
		)
	}

}