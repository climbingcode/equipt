class Map extends React.Component {

	constructor(props) {
		super(props)
	}

	componentDidMount() {
		new google.maps.Map(this.refs.map, {
          center: {lat: this.props.lat, lng: this.props.lng},
          zoom: 8
        });
	}

	render() {

		return (
			<div className="map" style={{width: 285, height: 300}} ref="map"/>
		)
	}

}