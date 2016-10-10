Equipt.views.mapView = class Map extends Equipt.controllers.MainController {

	static propType = {
		position: React.PropTypes.object.isRequired
	}

	constructor(props) {
		super(props);
		this.stores = [];
	}

	getPosition() {

		let showPosition = (position) => {
			this.props.setPosition({
				lat: position.coords.latitude,
				lng: position.coords.longitude
			}); 
		}

		if (navigator.geolocation) {
        	navigator.geolocation.getCurrentPosition(showPosition);
    	}

	}

	initMap(callback) {

		let mapElement = this.refs.map;

		// init map
		this.map = new google.maps.Map(mapElement, {
	        center: this.props.position,
	        zoom: 8,
	        styles: Equipt.content.mapTheme
	    });

	    callback(this.map);

	}

	initMarker(map) {

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

	init() {

		this.getPosition();
		this.initMap((map) => {
			this.initMarker(map);
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

	componentWillReceiveProps() {
		if (this.marker && this.map) {	
			this.marker.setPosition(this.props.position);
			this.map.panTo(this.props.position);
		}
	}

	render() {

		return (
			<div className="map" ref="map" style={{ width: '100%', height: '350px' }}></div>
		)
	}

}