Equipt.views.mapView = class Map extends Equipt.controllers.MainController {

	static propType = {
		position: React.PropTypes.object.isRequired,
		setPosition: React.PropTypes.func,
		showLocationSearch: React.PropTypes.bool
	}

	constructor(props) {
		super(props);
		this.stores = [];
	}

	buildMap(callback) {

		let mapElement = this.refs.map;

		// init map
		this.map = new google.maps.Map(mapElement, {
	        center: this.props.position,
	        zoom: 8,
	        styles: Equipt.content.mapTheme
	    });

	    callback(this.map);

	}

	buildMarker(map) {

		// create marker
	    this.marker = new google.maps.Marker({
          	position: this.props.position,
          	map: map,
          	draggable:true,
     		animation: google.maps.Animation.DROP,
          	title: 'Pick Up Location' 
        });

	    // Marker was dropped callback
        google.maps.event.addListener(this.marker, 'dragend', () => {
		    this.props.setPosition(this.marker.getPosition());
		});

	}

	buildLocationSearch(map) {
		
		let input 	  = this.refs.searchBar;
        let searchBox = new google.maps.places.SearchBox(input);
        let bounds 	  = new google.maps.LatLngBounds();

        map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

        // Adds current map bounds to search bar
        map.addListener('bounds_changed', function() {
        	searchBox.setBounds(map.getBounds());
        });

        // Location was changed 
        searchBox.addListener('places_changed', () => {
        	let place = searchBox.getPlaces()[0];

        	if (place.length === 0) return;

	        if (!place.geometry) {
	             console.log("Returned place contains no geometry");
	             return;
	        };

			if (place.geometry.viewport) {
				bounds.union(place.geometry.viewport);
			} else {
				bounds.extend(place.geometry.location);
			}

			map.fitBounds(bounds);

			var latlng = new google.maps.LatLng({
        		lat: place.geometry.location.lat(),
        		lng: place.geometry.location.lng()
        	});

			this.marker.setPosition(latlng);

        	this.props.setPosition({
        		lat: place.geometry.location.lat(),
        		lng: place.geometry.location.lng()
        	});

        });

	};

	init() {
		this.buildMap((map) => {
			this.buildMarker(map);
			if (this.props.showLocationSearch) this.buildLocationSearch.call(this, map);
		});
	}

	componentDidMount() {
		if (window.google) {
			this.init();
		} else {
			window.googleMapsLoaded = () => {
				this.init();
			}
		}
	}

	shouldComponentUpdate() {
		return this.props.position.lat !== 0 && this.props.position.lng !== 0;
	}

	componentWillUpdate() {
		this.marker.setPosition(this.props.position);
		this.map.panTo(this.props.position);
	}

	render() {

		let searchBar;

		if (this.props.showLocationSearch) {				
			searchBar = <input 	ref="searchBar" 
								placeholder="Search a Location"
								className="search-bar form-control"/>
		}

		return (
			<div className="google-map-container">
				{searchBar}
				<div className="map" ref="map" style={{ width: '100%', height: '350px' }}/>
			</div>
		)

	}

}