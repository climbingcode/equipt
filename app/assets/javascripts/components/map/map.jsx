Equipt.views.mapView = class Map extends Equipt.controllers.MainController {

	static propType = {
		position: React.PropTypes.object.isRequired
	}

	constructor(props) {
		super(props);
		this.stores = [];
	}

	componentWillReceiveProps() {
		
		let mapElement = this.refs.map;

		// init map
		let map = new google.maps.Map(mapElement, {
	        center: this.props.position,
	        zoom: 8,
	        styles: Equipt.content.mapTheme
	    });

		// create marker
	    let marker = new google.maps.Marker({
          	position: this.props.position,
          	map: map,
          	draggable:true,
     		animation: google.maps.Animation.DROP,
          	title: 'Pick Up Location' 
        });

	    // Marker was dropped callback
        google.maps.event.addListener(marker, 'dragend', () => {
		    this.props.setPosition(marker.getPosition());
		});

	}

	componentDidMount() {

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

	render() {

		return (
			<div className="map" ref="map" style={{ width: '100%', height: '350px' }}></div>
		)
	}

}